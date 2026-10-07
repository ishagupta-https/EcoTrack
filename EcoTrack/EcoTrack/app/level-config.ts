export const MAX_LEVEL=100;
export const cleanLevel=(n:number)=>Math.max(1,Math.min(MAX_LEVEL,Math.floor(Number.isFinite(n)?n:1)));
export const roundSize=(level:number)=>8+2*Math.floor((cleanLevel(level)-1)/20);
export const requiredCorrect=(level:number)=>Math.ceil(roundSize(level)*(level<=30?.75:level<=70?.85:1));
export const puzzlePairs=(level:number)=>Math.min(12,4+Math.floor((cleanLevel(level)-1)/10));
export const puzzleMoves=(level:number)=>Math.ceil(puzzlePairs(level)*(3.5-1.8*(cleanLevel(level)-1)/99));
export const driveTarget=(level:number)=>10*Math.ceil(cleanLevel(level)/10);
export const chapterName=(level:number)=>['Seedling','Explorer','Trailblazer','Eco Agent','Specialist','Protector','Guardian','Innovator','Champion','Planet Legend'][Math.floor((cleanLevel(level)-1)/10)];
