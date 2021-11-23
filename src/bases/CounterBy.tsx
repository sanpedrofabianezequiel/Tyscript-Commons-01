import React, { useState } from 'react'


interface Props {
    initialState? : number
}
interface Counter {
    counter: number,
    click:number
}


export const CounterBY = ({initialState= 0 } : Props) => {
    const [counterState, setCounterState] = useState<Counter>({
        counter: initialState,
        click:0
    });

    const handleClick= (num:number)=>{
        setCounterState( (previus)=>({
            counter: previus.counter + num ,
            click: previus.click + 1
        }));
    }
    return (
        <>
            <h1>CounterBY : {counterState.counter}</h1>   
            <h1>Clicks : {counterState.click}</h1>   
            <button  onClick={()=>handleClick(1)}>+1</button>
            <button  onClick={()=>handleClick(5)}>+5</button>
        </>
    )
}
