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
    height: 450px;
    width: 100%;
    margin: 0;
    `

    return (
    <div>
        <Tilt className="Tilt" options={{ max : 10, perspective: 3000, scale: 1.01, speed: 1500, transition: true, easing: "cubic-bezier(.03,.98,.52,.50)", reset: true}}>
            <div className="other-card-container">
                    <Link className="link-container-other" to={ projectLink }>
                        <div className="">
                            <img className="project-img-other" src={img} />
                        </div>
                    </Link>
            </div>
        </Tilt>
        <div className="desc-row-other">
            <p className="m-0 category-text-other">{category}</p>
            <p className="m-0 title-text-other">{title}</p>
            {/* <p>{desc}</p> */}
        </div>
    </div>
  )
}
