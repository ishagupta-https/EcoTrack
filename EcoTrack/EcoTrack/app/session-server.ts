import {getChatGPTUser} from './chatgpt-auth';
import {headers} from 'next/headers';
import type {SessionState} from './session-types';
export async function readSession():Promise<SessionState>{const u=await getChatGPTUser();if(u)return {status:'authenticated',user:{id:u.userId,name:u.fullName||u.email,email:u.email}};const h=await headers();return {status:h.has('oai-authenticated-user-email')||h.has('oai-authenticated-user-id')?'incomplete':'anonymous',user:null};}
