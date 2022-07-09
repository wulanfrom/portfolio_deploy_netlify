import React, { useEffect, useRef } from 'react'
import { Power4, gsap } from 'gsap'
import { Timeline } from 'gsap/gsap-core';

export default function Transition() {
    const trans = useRef(null);
    const timeline = gsap.timeline();
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 5,
            x: 2600,
            ease: Power4.easeOut
        })
    }, [])
  return (
    <div ref={trans} style={{height: "100vh", backgroundColor:"#171717", color: "#fff"}}></div>
  )
}
