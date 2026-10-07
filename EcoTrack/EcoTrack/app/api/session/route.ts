import {readSession} from '../../session-server';
export const dynamic='force-dynamic';
export async function GET(){return Response.json(await readSession(),{headers:{'Cache-Control':'private, no-store, max-age=0','Vary':'Cookie'}})}
