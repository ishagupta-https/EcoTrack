export type SessionUser={id:string;name:string;email:string};
export type SessionState={status:'authenticated'|'anonymous'|'incomplete';user:SessionUser|null};
