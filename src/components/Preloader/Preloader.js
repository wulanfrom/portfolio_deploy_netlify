import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './Preloader.css'

export default function Preloader() {
  const timeline = gsap.timeline();
  useEffect(() => {
    gsap.fromTo(".top-text-loader", {y:200}, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 1,
      ease: 'power4'
  });
  }, [])
  return (
    <div>
        <div style={{height: "100vh", backgroundColor:"#171717", color: "#fff"}} className="loader-wrapper absolute d-flex justify-content-center align-items-center flex-column">
            <div style={{height: "110px", overflow: 'hidden'}}>
              <h1 className="top-text-loader text-center">Fetching Projects...</h1>
            </div>
            <p className="loader-title">GRAB A SNACK WHILE YOU WAIT</p>
            {/* <h2 className="bottom-text-loader">Have some snacks while you wait🍵🍿🥜🍫</h2> */}
        </div>
  </div>
  )
}
