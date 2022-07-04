import React, { useRef, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'
import './BigTitle.css'

export default function BigTitle({lineContent1, lineContent2, lineContent3, lineContent4}) {
    const timeline = gsap.timeline();
    const [reveal, setReveal] = useState(false);
    const footerRef = useRef();
    const onScreen = useOnScreen(footerRef);

    useEffect(() => {
        if (onScreen) setReveal(onScreen)
    }, [onScreen])

    useEffect(() => {
        if (reveal) {
            gsap.fromTo(".line-content-1", {y:200}, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 1,
                ease: 'power2'
            });
            gsap.fromTo(".line-content-2", {y:200}, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 1,
                ease: 'power2'
            });
            gsap.fromTo(".line-content-3", {y:200}, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 1,
                ease: 'power2'
            });
            gsap.fromTo(".my-desc", {y:200}, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.5,
                ease: 'power2'
            });
        }
        // gsap.fromTo(".hero-project-category", {opacity: 0, stagger: 0.1, ease: 'power2.out'}, {opacity: 1, stagger: 0.1, duration: 2});
    }, [reveal])

  return (
    <Container>
        <Row ref={footerRef} className={cn({"is-reveal": reveal})}>
            <Col sm={12} md={12} lg={12}>
            <div className="page-title text-center">
                <div className="line-wrap">
                    <div className="line-content-1">{lineContent1}</div>
                </div>
                <div className="line-wrap">
                    <div style={{fontSize: "190px", lineHeight: "210px"}} className="tilt-inner line-content-2 line bebas-text hero-project-title m-0">{lineContent2}</div>
                    <div style={{fontSize: "190px", lineHeight: "190px"}} className="tilt-inner line-content-3 line bebas-text hero-project-title m-0">{lineContent3}</div>
                </div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={12} lg={12}>
                <div style={{maxWidth: "400px", marginLeft: "auto", marginRight: "auto"}}className="text-center text">
                    <p className="my-desc">{lineContent4}</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
