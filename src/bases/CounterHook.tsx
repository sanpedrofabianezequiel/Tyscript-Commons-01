import React, { useEffect, useState,useRef,useLayoutEffect } from 'react'
import { useCounter } from '../hooks/useCounter';

const MAXIMUN_COUNT = 10;

interface Props {
    initialState? : number
}

export const CounterHook = ({initialState= 5 } : Props) => {
  
    const { counter,counterElement,handleClick} = useCounter();

    return (
        <>
            <h1>Counter Hooks:</h1>   
            <h2 ref={counterElement}> {counter}</h2>
            <button  onClick={handleClick}>
                +1
            </button>
        </>
    )
}
