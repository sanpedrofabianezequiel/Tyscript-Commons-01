import React, { useReducer } from 'react'


interface CounterState {
    counter :number,
    previous:number,
    changes :number
}

const INITIAL_STATE :CounterState ={
    counter:0,
    previous:0,
    changes:0
}

type CounteAction =
    | { type:'increseBy',payload:{ value:number}} 
    | { type:'reset'};


const counterReducer = (state:CounterState, action:CounteAction): CounterState=>{
    switch (action.type) {
        case 'reset':
            return {
                ...state,
                counter :0,
                previous:0,
                changes :0
            }    
        case 'increseBy':
            return{
                ...state,
                changes: state.changes +1,
                counter: state.counter + action.payload.value,
                previous: state.counter                
            }
        default:
            return state;
    }
}



export const CounterReducerComponent = () => {
   
    const [firstValue, dispatch] = useReducer(counterReducer,INITIAL_STATE);

    const handleClick= ()=>{
        dispatch({
            type:'reset'
        });
    }

    const increseBy  =(num:number)=>{

        dispatch({
            type:'increseBy',
            payload:{value:num}
        })

    }
    return (
        <>
            <h1>CounterReducerComponent : {firstValue.counter}</h1>   
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
