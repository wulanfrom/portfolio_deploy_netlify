import React, {useRef, useEffect  } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import './BigTitle.css'

export default function BigTitle({lineContent1, lineContent2, lineContent3, lineContent4}) {
    const timeline = gsap.timeline();

    useEffect(() => {
        const split = new SplitText("#main-hero-text", {
            type: 'lines',
            linesClass: 'lineChildren',
        });

        const splitParent = new SplitText("#main-hero-text", {
            type: 'lines',
            linesClass: 'lineParent',
        });

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power2'
        })

        gsap.fromTo(".hero-project-desc", {opacity: 0, ease: 'power3'}, {opacity: 1, duration: 2});
        gsap.fromTo(".hero-project-category", {opacity: 0, stagger: 0.1, ease: 'power2.out'}, {opacity: 1, stagger: 0.1, duration: 2});
    }, [])

  return (
    <Container>
        <Row>
            <Col sm={12} md={12} lg={12}>
            <div className="page-title text-center">
                <div className="line-wrap">
                    <div className="line-content-1">{lineContent1}</div>
                </div>
                <div className="line-wrap">
                    <div style={{fontSize: "190px", lineHeight: "210px"}} className="tilt-inner line bebas-text hero-project-title m-0">{lineContent2}</div>
                    <div style={{fontSize: "190px", lineHeight: "190px"}} className="tilt-inner line bebas-text hero-project-title m-0">{lineContent3}</div>
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
