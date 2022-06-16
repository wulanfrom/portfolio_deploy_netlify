import React from 'react'
import './FeaturedCard.css'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'

export default function FeaturedCard(props) {
    const category = props.category;
    const title = props.title;
    const description = props.desc;
    const img = props.img
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const projectLink = props.link;
    const smallImg = props.smallImg;
    const ProjectCard = styled.div`
    color: ${textColor};
    background-color: ${bgColor};
    overflow: hidden;
    border-radius: 8px;
    min-height: 470px;
    `

    return (
    <div className="feature-overlay">
        <div className="feature-hover-container">
            <Container className="p-0 feature-card-container">
                <Link className="link-container" to={ projectLink }>
                        <ProjectCard>
                            <Row className="card-div" style={{backgroundColor: {bgColor}}}>
                                <Col className="card-text-content" sm={12} md={5} lg={4}>
                                    <div className="d-flex flex-column justify-content-between desc-text" style={{height: "100%"}}>
                                    <div style={{ borderBolor: textColor }} className="underline-category mb-3"></div>
                                        <div className="category-text">
                                            <p className="mb-1">{category}</p>
                                            <h2 style={{fontSize: "60px"}} className="bebas-text mb-1 project-featured-title">{title}</h2>
                                        </div>
                                        <div className="mt-auto mb-0">
                                            <p className="Tilt-inner m-0">{description}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={7} lg={8} className="p-0">
                                    <div className="project-img-container d-flex flex-column align-items-baseline">
                                        <img className="project-img" src={img} />
                                        <img className="project-img-small" src={smallImg} />
                                    </div>
                                </Col>
                            </Row>
                        </ProjectCard>
                </Link>
            </Container>
        </div>
    </div>
    )
}