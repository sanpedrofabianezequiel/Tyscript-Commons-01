import React, { useState } from 'react'


interface Props {
    initialState? : number
}

export const Counter = ({initialState= 0 } : Props) => {
    const [counter, setCounter] = useState<number>(initialState);
    const handleClick= ()=>{
        setCounter( (previus)=>(
             previus + 1    
        ))
    }
    return (
        <>
            <h1>Counter : {counter}</h1>   
            <button  onClick={handleClick}>
                +1
            </button>
        </>
    )
}
