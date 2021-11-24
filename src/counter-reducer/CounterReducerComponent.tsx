import React, { useReducer } from 'react'
import { counterReducer } from './state/counterReducer';
import { CounterState } from './interfaces/interfaces';
import * as CounterAction from './actions/actions';



const INITIAL_STATE :CounterState ={
    counter:0,
    previous:0,
    changes:0
}



export const CounterReducerComponent = () => {
   
    const [firstValue, dispatch] = useReducer(counterReducer,INITIAL_STATE);

    const handleClick= ()=>{
        dispatch(CounterAction.doReset());
    }

    const increseBy  =(num:number)=>{

        dispatch(CounterAction.doincreseBy(  num ));

    }
    return (
        <>
            <h1>CounterReducerComponent Segmentado: {firstValue.counter}</h1>   
            <pre>
                {JSON.stringify(firstValue,null,2)}
            </pre>

            <button onClick={()=>increseBy(1)}>+1</button>
            <button onClick={()=>increseBy(5)}>+5</button>
            <button onClick={()=>increseBy(10)}>+10</button>

            <button  onClick={handleClick}>
               reset
            </button>
        </>
    )
}
