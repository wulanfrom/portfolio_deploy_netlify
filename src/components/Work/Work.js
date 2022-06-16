import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BigTitle from '../BigTitle/BigTitle'
import Divider from '../Divider/Divider'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects'
import Footer from '../Footer/Footer'
import OtherProjects from '../OtherProjects/OtherProjects'
import Publications from '../Publications/Publications'
import Navigation from '../Navbar/Navigation'
import './Work.css'
import Preloader from '../Preloader/Preloader'

import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap'

export default function Work() {
    
  return (
    <div style={{backgroundColor: "#171717"}} data-scroll-section>
        <div>
            <div style={{ color: "#fff" }} className="hero-section hero-animated d-flex flex-column">
                <Divider height={160}/>
                <Container className="work-inner">
                    <BigTitle lineContent1="hello world," lineContent2="I’m Nabila" lineContent3="UX Engineer" lineContent4="Working at the intersection of design and code, creating experiences that help people."/>
                </Container>
                <Divider height={180}/>
            </div>
        </div>

        <div className="projects-container" style={{backgroundColor: "#fff", height: "100%", borderRadius: "80px"}}>
            <Container>
                <Divider height={150}/>

                <div id="featured-projects">
                    <FeaturedProjects />
                </div>

                <Divider height={200}/>

                <div id="other-projects">
                    <OtherProjects />
                </div>
                
                <Divider height={250}/>

                <div id="publications">
                    <Publications />
                </div>

                <Divider height={180}/>

            </Container>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}
