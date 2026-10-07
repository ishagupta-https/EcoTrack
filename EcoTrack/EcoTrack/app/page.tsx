import Dashboard from './dashboard';
import {readSession} from './session-server';
export const dynamic='force-dynamic';
export default async function Home(){return <Dashboard initialSession={await readSession()}/>;}
