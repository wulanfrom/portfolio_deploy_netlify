import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'
import './OtherCard.css'

export default function OtherCard(props) {
    const category = props.category;
    const title = props.title;
    const img = props.img
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const projectLink = props.link;
    const desc = props.desc;
    const OtherCardContainer = styled.div`
    color: ${textColor};
    background-color: ${bgColor};
    overflow: hidden;
    border-radius: 12px;
    height: 580px;
    width: 100%;
    margin: 0;
    `

    return (
    <div className="other-card-container">
        <div className="other-card-container m-0" data-scroll>
            <Link className="link-container-other" to={ projectLink }>
                    <OtherCardContainer>
                        <div className="desc-row-other">
                            <p className="m-0 category-text-other">{category}</p>
                            <p className="m-0 title-text-other">{title}</p>
                            <p>{desc}</p>
                        </div>
                        <div className="img-other-container">
                            <div className="project-img-other-container p-0">
                                <img className="project-img-other" src={img} />
                            </div>
                        </div>
                    </OtherCardContainer>
            </Link>
        </div>
    </div>
  )
}
