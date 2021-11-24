import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap';


export const useCounter = ({maxCount=10})=>{
    const [counter, setCounter] = useState<number>(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline())
    const handleClick= ()=>{
            setCounter((previus)=> Math.min(previus +1 ,maxCount));
    };

    
    useLayoutEffect(() => {
        if(!elementToAnimate.current) return;
        
        tl.current.to(elementToAnimate.current,{ y:-10, duration:0.2, ease:'ease.out'})
            .to(elementToAnimate.current,{ y:0,duration:1,ease:'bounce.out'})

    }, []);
    useEffect(() => {
        tl.current.play(0);
    }, [counter])

    return{
        elementToAnimate,
        counter,
        handleClick
    }
}