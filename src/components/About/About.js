import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Divider from '../Divider/Divider'
import './About.css'
import BigTitle from '../BigTitle/BigTitle'
import SectionTitle from '../SectionTitle/SectionTitle'
import { ReactPictureGrid } from 'react-picture-grid';
import Gallery from 'react-grid-gallery';

import aboutMePng from '../../resources/aboutMe/main-img.png'
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

// images
import context1 from '../../resources/aboutMe/grad-hs.png'
import context2 from '../../resources/aboutMe/project.png'
import context3 from '../../resources/aboutMe/hackathon.png'
import context4 from '../../resources/aboutMe/gradpics.png'
import context5 from '../../resources/aboutMe/drawing.png'
import context6 from '../../resources/aboutMe/band-photocard.png'

export default function About() {
  const title = "I'm nabila👋"
    const desc = "A curious mind with a passion for learning new things and understanding the world through the lenses of technology, design, and people."
    const role = "UX Engineering, Web Design, Product Design, UX Design, Front-End Development, HCI, AI/ML"
    const sector = "🍵🎨🎸📸📚"
    const category = "Hi There!"
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

    const data = [
      {
        src: context1,
        thumbail: context1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
      },
      {
          src: context2,
      },
      {
          src: context3,
      },
      {
          src: context4,
      },
      {
          src: context5,
      },
      {
          src: context6,
      }
    ];

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
    <div style={{backgroundColor: "#171717"}}>
        <div className="hero-section hero-animated d-flex flex-column" style={{ color: "#fff" }}>
        <div className="pt-5">
          <Container className="pt-5">
            <Divider height={160} />
            <BigTitle lineContent1={category} lineContent2={title} lineContent3="" lineContent4={desc} />
            <Divider height={120} />
          </Container>
        </div>
      </div>

      <div className="projects-container" style={{backgroundColor: "#fff", height: "100%", borderRadius: "80px", zIndex: 100}}>
        <Divider height={150} />
        <Container className="text-center">
          <SectionTitle line1="Lets get to know" line2="each other" desc="HIJABI // OPTIMIST // WANDERER" />
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
              <div style={{width: "90%"}}>
                <p className="Section-title">How did I end up across the world from home?</p>
                <div style={{fontSize: "28px", lineHeight: "32px", fontWeight: 500}}>
                  <p style={{ marginBottom: "0.25rem" }}>“We travel, some of us forever, to seek other places, other lives, other souls.”</p>
                  <p>-Anais Inn</p>
                </div>
                <Divider height={32} />
                <p>My journey started when I left my country at the age of 15 to pursue my studies in science. Leaving my country at such a young age taught me the importance of connecting with people no matter the language and culture. My creative journey began when I started college at KAIST. There, I pursued a degree in Computer Science and Industrial Design. My interest in design and code led me to intern at HCI labs, and do projects that combine the use of AI/ML with design. My main areas of interest include UX Engineering, UX Design, Front-End Development, Explainable AI, and Data Visualization - although I am constantly exploring new fields to fall in love it. Outside of work, I love to make comics, play with my band, and go sightseeing to local places. </p>
              </div>
            </Col>
            <Col md={5} lg={6}>
              <img style={{borderRadius: "12px"}} src={heroImg} />
            </Col>
          </Row>

        <Divider height={150} />

    
        {/* <ReactPictureGrid closeOnClick showPreview className="grid-images-nft"data={data} gap={20} /> */}
        <Row style={{marginTop: "20px"}}>
          <Col>
            <img style={{width: "100%"}} src={context1} />
          </Col>
          <Col>
            <img style={{width: "100%"}} src={context2} />
          </Col>
          <Col>
            <img style={{width: "100%"}} src={context3} />
          </Col>
        </Row>
        <Row style={{marginTop: "20px"}}>
          <Col>
            <img style={{width: "100%"}} src={context4} />
          </Col>
          <Col>
            <img style={{width: "100%"}} src={context5} />
          </Col>
          <Col>
            <img style={{width: "100%"}} src={context6} />
          </Col>
        </Row>

        </Container>
        <Divider height={200} />
        </div>


        {/* Footer  */}
        <div>
          <Footer/>
        </div>
    </div>
  )
}
