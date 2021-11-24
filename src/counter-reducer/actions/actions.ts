export type CounteAction =
    | { type:'increseBy',payload:{ value:number}} 
    | { type:'reset'};


export const doReset = ():CounteAction=>({
    type:'reset'
});

export const doincreseBy = (value:number):CounteAction=>({
    type:'increseBy',
    payload: {
        value:value
    }
});