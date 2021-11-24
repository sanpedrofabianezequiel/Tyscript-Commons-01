import React, { useEffect, useState,useRef,useLayoutEffect } from 'react'
import { useCounter } from '../hooks/useCounter';

const MAXIMUN_COUNT = 10;

interface Props {
    initialState? : number
}

export const CounterHook = ({initialState= 10 } : Props) => {
  
    const { counter,elementToAnimate,handleClick} = useCounter({maxCount:15});

    return (
        <>
            <h1>Counter Hooks:</h1>   
            <h2 ref={elementToAnimate}> {counter}</h2>
            <button  onClick={handleClick}>
                +1
            </button>
        </>
    )
}
