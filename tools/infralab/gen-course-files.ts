/* Génère les fichiers de départ « .infralab.json » des séances de BTS SIO SISR (dépôt bts1-sio-sisr-bloc1).
   Usage (depuis une copie d'InfraLab) : npx vite-node tools/gen-course-files.ts <dossier de sortie> */
import { mkdirSync, writeFileSync } from 'node:fs';
import { DAY, HOUR, Scheduler, Store } from '../src/core';
import { registerInfraCommands } from '../src/infra';
import { registerInventoryCommands } from '../src/inventory';
import { advance } from '../src/inventory/time';
import { agentHealth } from '../src/inventory/agent';
import { assetFreshness } from '../src/inventory/selectors';
import { registerItsmCommands } from '../src/itsm';
import { registerScenarioCommands } from '../src/scenarios';
import { seedNovatechFull } from '../src/scenarios/novatech-full';
import { serialize } from '../src/ui/shell/files';

const out = process.argv[2] ?? '/tmp/infralab-files'; mkdirSync(out, { recursive: true });
function lab() {
  const sch = new Scheduler(); const store = new Store({ clock: () => sch.now });
  registerInfraCommands(store); registerInventoryCommands(store); registerItsmCommands(store); registerScenarioCommands(store);
  const d = (c: { type: string; payload?: Record<string, unknown> }) => { const r = store.dispatch(c as never); if (!r.ok) throw new Error(c.type + ' : ' + r.error?.message); return r.ok; };
  return { sch, store, d };
}
const dev = (store: Store, n: string) => Object.values(store.getState().reality.devices).find(x => x.name === n)!.id;
const usr = (store: Store, n: string) => Object.values(store.getState().management.users).find(u => u.name.startsWith(n))!.id;
const save = (name: string, store: Store, sch: Scheduler, label: string) => writeFileSync(`${out}/${name}.infralab.json`, serialize(store.snapshot(), sch.now, label, new Date('2026-10-20T08:00:00Z')));

/* ---------- S05 : audit d'inventaire de NovaTech ---------- */
{
  const { sch, store, d } = lab(); seedNovatechFull(store, c => d(c));
  advance(store, sch, 1 * DAY);
  const withAgent = Object.values(store.getState().reality.devices).filter(x => x.kind === 'workstation' && x.agent.state === 'running').map(x => x.name).sort();
  const [stopped, wrongUrl, old] = [withAgent[1]!, withAgent[4]!, withAgent[7]!];
  d({ type: 'agent.stop', payload: { id: dev(store, stopped) } });
  d({ type: 'agent.configure', payload: { id: dev(store, wrongUrl), serverUrl: 'http://srv-inventaire/inventory' } });
  d({ type: 'agent.configure', payload: { id: dev(store, old), version: '2.1' } });
  d({ type: 'infra.installSoftware', payload: { id: dev(store, stopped), softwareId: 'sw-teamviewer' } });
  d({ type: 'infra.installSoftware', payload: { id: dev(store, wrongUrl), softwareId: 'sw-vlc' } });
  advance(store, sch, 3 * DAY);
  save('s05-audit-inventaire', store, sch, 'S05 — Audit d\'inventaire NovaTech');
  const st = store.getState();
  console.log('S05 pannes :', { stopped, wrongUrl, old });
  const pcs = Object.values(st.reality.devices).filter(x => x.kind === 'workstation');
  console.log('postes', pcs.length, 'avec agent', pcs.filter(x => x.agent.state !== 'none').length);
  for (const x of Object.values(st.reality.devices)) { const a = Object.values(st.management.assets).find(y => y.deviceId === x.id); console.log(x.name.padEnd(14), x.kind.padEnd(11), agentHealth(st, x).padEnd(14), a ? assetFreshness(a, sch.now) : 'hors outil'); }
}

/* ---------- S06 : une matinée au service desk ---------- */
{
  const { sch, store, d } = lab(); seedNovatechFull(store, c => d(c));
  const MIN = 60_000;
  const ticket = (kind: string, title: string, description: string, who: string, wait = 10) => {
    advance(store, sch, wait * MIN);
    d({ type: 'itsm.createTicket', payload: { title, description, requester: usr(store, who), kind } });
  };
  advance(store, sch, 1 * DAY + 8 * HOUR); // lundi, 8 h : on prend le poste
  d({ type: 'infra.powerOff', payload: { id: dev(store, 'IMP-COMPTA') } }); // la panne est réelle : on peut la constater sur le schéma
  ticket('incident', 'Imprimante de la comptabilité en panne', 'Appel d\'Alice à 8 h 55. IMP-COMPTA est en panne. Clôture mensuelle aujourd\'hui : les 8 personnes du service ne peuvent pas éditer les factures avant 17 h.', 'Alice', 55);
  ticket('incident', 'Mon imprimante ne marche plus', 'Appel de Chloé à 9 h 10. L\'imprimante de mon bureau ne répond plus. Rien de pressé, j\'utilise celle du couloir en attendant.', 'Chloé', 15);
  ticket('incident', 'Impossible de me connecter à ma session', 'Appel d\'Alice à 9 h 20 : son mot de passe est refusé ce matin.', 'Alice', 10);
  ticket('incident', 'Excel se ferme tout seul', 'Mail de Chloé à 9 h 30 : Excel se ferme à l\'ouverture du fichier des ventes, depuis ce matin, sur son poste PC22.', 'Chloé', 10);
  ticket('request', 'Accès au dossier partagé RH', 'Mail de Hugo Blanc (RH) à 9 h 45 : nouveau dans le service depuis lundi, il obtient « Accès refusé » sur le dossier partagé RH. Son responsable a validé la demande.', 'Hugo', 15);
  ticket('incident', 'VPN impossible depuis l\'hôtel', 'Appel d\'Éric Moreau (Direction) à 10 h 05, en déplacement : le VPN ne se connecte pas, il doit consulter des documents confidentiels pour une réunion à 14 h.', 'Éric', 20);
  ticket('request', 'Nouveau poste pour une arrivée', 'Mail du service RH à 10 h 20 : un collaborateur arrive dans 15 jours au service Commercial ; il faudra un poste préparé et un compte.', 'Hugo', 15);
  save('s06-service-desk', store, sch, 'S06 — Une matinée au service desk');
  const st = store.getState();
  console.log('S06 horloge', sch.now / HOUR, 'h');
  for (const t of Object.values(st.management.tickets)) console.log(t.id ?? '', t.kind, t.status, t.title);
  console.log(Object.values(st.management.users).filter(u => u.roles.includes('technician')).map(u => u.name));
}
void HOUR;
