import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Divider from '../Divider/Divider'
import './About.css'
import BigTitle from '../BigTitle/BigTitle'

import aboutMePng from '../../resources/aboutMe/about-me.png'
import endingPng from '../../resources/aboutMe/ending.svg'
import Footer from '../Footer/Footer'
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import useOnScreen from '../../hooks/useOnScreen'

// icons
import Behance from '../../resources/icons/behance.svg'
import Dribbble from '../../resources/icons/Vector-1.svg'
import LinkedIn from '../../resources/icons/Vector-2.svg'
import Email from '../../resources/icons/Vector-3.svg'
import Github from '../../resources/icons/Vector.svg'

export default function About() {
  const title = "I'm nabila👋"
    const desc = "A curious mind with a passion for learning new things and understanding the world through the lenses of technology, design, and people."
    const role = "UX Engineering, Web Design, Product Design, UX Design, Front-End Development, HCI, AI/ML"
    const sector = "🍵🎨🎸📸📚"
    const category = "LETS GET TO KNOW EACH OTHER!"
    const heroImg = aboutMePng;
    const bgColor = "#FFF13E"
    const textColor = "#000"
    
    const border_style = '2px solid ' + textColor;
    const title_style = {
      fontFamily: "'Inter', sans-serif"
    }

    // Footer
    const footerRef = useRef();
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(footerRef);

    useEffect(() => {
        if (onScreen) setReveal(onScreen)
    }, [onScreen])
    
    useEffect(() => {
        if (reveal) {
            const split = new SplitText(".footer-move-text", {
                type: "lines",
                linesClass: "lineChildren",
              });
              const splitParent = new SplitText(".footer-move-text", {
                type: "lines",
                linesClass: "lineParent",
              });
    
            gsap.fromTo(split.lines, {y:200}, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.1,
                ease: 'power2'
            })
        }
    }, [reveal])

  return (
    <div>
        <div style={{backgroundColor: bgColor, color: textColor}} className="hero-section d-flex flex-column">
        <div className="pt-5">
          <Container className="pt-5">
            {/* <Divider height={20} /> */}
            {/* <div className="mt-5"></div> */}
            <Divider height={150} />
            {/* <p className="hero-project-category m-0">{category}</p> */}
            <BigTitle lineContent1={category} lineContent2={title} lineContent3="" lineContent4={desc} />
            <Divider height={120} />
            {/* <BigTitle lineContent1={category} lineContent2={title} lineContent3={desc}/> */}
            {/* <p style={{fontSize: "150px", lineHeight: "150px"}} className="bebas-text hero-project-title m-0">{title}</p> */}
            {/* <p className="hero-project-desc mb-5">{desc}</p> */}
            <Row>
              <Col xs={12} sm={10} md={9} lg={8}>
                <div style={{ borderBottom: border_style, borderTop: border_style }} className="hero-project-info">
                  <div>
                      <p className="project-section m-0 mt-4">Areas of Interest</p>
                      <p className="project-info">{role}</p>
                  </div>
                  <div>
                      <p className="project-section m-0">Hobbies</p>
                      <p className="project-info m-0 mb-4" style={{fontSize: "48px"}}>{sector}</p>
                  </div>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <div className="mt-5 pt-5">
          <Row className="hero-project-img">
            <Col></Col>
            <Col xs={10} sm={10} md={10} lg={10}>
              <img className="hero-img" src={heroImg}></img>
            </Col>
          </Row>
        </div>
      </div>

      <div className="project-content">
        <Divider height={72} />
        <Container className="text-center">
          <p className="about-title">HIJABI // OPTIMIST // WONDERER</p>
          <p className="about-quote">“We travel, some of us forever, to seek other places, other lives, other souls.”</p>
          <p className="about-name">-Anais Inn</p>
        </Container>

        <Divider height={150} />

        {/* Overview */}
        <Container>
          <Row>
          <Col>
              <div>
                <div className="Section-line-about"></div>
                <p className="Section-type">My story</p>
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col md={7} lg={6}>
              <div>
                <p className="Section-title">How did I end up across the world from home?</p>
              </div>
            </Col>
            <Col md={5} lg={6}>
              <p>My journey started when I left my country at the age of 15 to pursue my studies in science. Leaving my country at such a young age taught me the importance of connecting with people no matter the language and culture. My creative journey began when I started college at KAIST. There, I pursued a degree in Computer Science and Industrial Design. My interest in design and code led me to intern at HCI labs (published to TWO renowned CS conferences), and do projects that combine the use of AI/ML with design. Outside of work, I love to make comics, play with my band, and go sightseeing to local places.</p>
            </Col>
          </Row>

        <Divider height={150} />

        </Container>
        </div>

        <Container>
          <div className="img-giant">
            <img className="opening-image" src={endingPng}></img>
          </div>
        </Container>

        <Divider height={120} />

        {/* Footer  */}
        <div>
          <Footer />
        </div>
    </div>
  )
}
