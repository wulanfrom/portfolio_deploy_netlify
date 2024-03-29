import React, { useState } from 'react'
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'
import './ProjectFooter.css'
import { Link } from 'react-router-dom'
import Divider from '../Divider/Divider'

// icons
import Behance from '../../resources/icons/behance.svg'
import Dribbble from '../../resources/icons/Vector-1.svg'
import LinkedIn from '../../resources/icons/Vector-2.svg'
import Email from '../../resources/icons/Vector-3.svg'
import Github from '../../resources/icons/Vector.svg'

// images
import WheelOnPng from '../../resources/someWeather/someWeatherMoodboard.png'


export default function ProjectFooter(props) {
    const nextProject = props.next;
    const prevProject = props.prev;
    const nextLink = props.nextLink;
    const prevLink = props.prevLink;

    const projectLinks = {
        ceeya: "ceeya",
        reBalance: "reBalance",
        wheelOn: "wheelOn",
        someWeather: "someWeather",
        xdesign: "xdesign",
        asianCHI: "asianchi",
        color: "colorArt",
        nft: "nftArt",
        goodFood: "goodFood"
    }

    // ceeya,  rebalane, wheelon, someweather, xdesign, asian chi, color my influence, nft, goodfood
    const nextProjects = {
        ceeya: [projectLinks.reBalance, projectLinks.wheelOn],
        reBalance: [projectLinks.ceeya, projectLinks.wheelOn],
        wheelOn: [projectLinks.reBalance, projectLinks.someWeather],
        someWeather: [projectLinks.wheelOn, projectLinks.xdesign],
        xdesign: [projectLinks.someWeather, projectLinks.asianCHI],
        asianCHI: [projectLinks.xdesign, projectLinks.color],
        color: [projectLinks.asianCHI, projectLinks.nft],
        nft: [projectLinks.color, projectLinks.goodFood],
        goodFood: [projectLinks.color, projectLinks.nft],
    }

    // dropdown
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

  return (
    <div>
        <div className="footer-div m-0 p-0 px-5 pt-5 pb-3">
            <Container>
            <div style={{height: "24px"}}></div>
                <div>
                    <div className="text-white more-projects mb-4 mt-3">
                    <p className="footer-move-text  footer-tag m-0 mb-4">Interested in seeing more?</p>
                        <Link to="/" style={{color: "#fff"}}><p className="bebas-text" style={{fontSize: "120px", lineHeight: "120px"}}>Back to Projects</p></Link>
                    </div>
                </div>
                <Divider height={24} />
                <Row className="footer-responsive mt-3 mb-2">
                    <Col sm={12} md={12} lg={12} className="d-flex align-items-center justify-content-center text-white">
                        <div className="d-flex">
                            <a href="mailto:biasindi.wulanfrom@gmail.com" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Email} /></a>
                            <a href="https://www.linkedin.com/in/wulanfrom/" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={LinkedIn} /></a>
                            <a href="https://www.behance.net/wulanfrom" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Behance} /></a>
                            <a href="https://dribbble.com/biasindi" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Dribbble} /></a>
                            <a href="https://github.com/wulanfrom" target="_blank" rel="noopener noreferrer" className="social-links"><img className="social-icon me-3 mb-2" src={Github} /></a>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex flex-column justify-content-center">
                    <div className="divider-footer mb-2"></div>
                    <div className="footer-info-text d-flex justify-content-center align-items-center text-center mt-2">
                        <p className="copyright-text text-white">Copyright 2022. Developed and Designed by wulanfrom with ❤️</p>
                        <div className="ml-2">
                            <DropdownButton
                                key='up'
                                id="info-up"
                                drop='up'
                                title="info"
                                className="info-dropdown"
                                show={show}
                                onMouseEnter={showDropdown} 
                                onMouseLeave={hideDropdown}
                            >
                                <Dropdown.Header>Built and Developed with</Dropdown.Header>
                                <div className="ms-3">
                                    <p className="ml-1" eventKey="4">Figma (Design Tool)</p>
                                    <p className="ml-1" eventKey="2">React.js (JS Framework)</p>
                                    <p className="ml-1" eventKey="1">GSAP (Animation)</p>
                                    <p className="ml-1" eventKey="3">Netlify (Hosting)</p>
                                </div>
                            </DropdownButton>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}
