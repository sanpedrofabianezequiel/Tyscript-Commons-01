import { useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap';

const MAXIMUN_COUNT = 10;


export const useCounter = ()=>{
    const [counter, setCounter] = useState<number>(5);
    const counterElement = useRef<HTMLHeadingElement>(null);
    const handleClick= ()=>{
            setCounter((previus)=> Math.min(previus +1 ,MAXIMUN_COUNT));
    };

    
    useLayoutEffect(() => {
        if(counter < 10 ) return;
        console.log('%cSe llego al valor maximo','color:blue');    
        const tl = gsap.timeline();
        tl.to(counterElement.current,{ y:-10, duration:0.2, ease:'ease.out'})
            .to(counterElement.current,{ y:0,duration:1,ease:'bounce.out'})

    }, [counter]);


    return{
        counterElement,
        counter,
        handleClick
    }
}