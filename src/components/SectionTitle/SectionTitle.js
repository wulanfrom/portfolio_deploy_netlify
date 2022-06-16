import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Divider from '../Divider/Divider'
import './SectionTitle.css'

export default function SectionTitle(props) {
    const line1 = props.line1;
    const line2 = props.line2;
    const desc = props.desc
  return (
    <Container>
        <Row>
            <Col sm={12} md={12} lg={12}>
            <div className="page-title text-center">
                {/* <div className="line-wrap">
                    <div className="line-content-1">{lineContent1}</div>
                </div> */}
                <div className="line-wrap">
                    <div style={{fontSize: "190px", lineHeight: "160px"}} className="bebas-text hero-project-title m-0 line1-section">{line1}</div>
                    <div style={{fontSize: "190px", lineHeight: "160px"}} className="bebas-text hero-project-title m-0 line2-section">{line2}</div>
                </div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={12} lg={12}>
                <div style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}className="text-center text desc-section">
                    <p className="my-desc">{desc}</p>
                </div>
            </Col>
        </Row>
        {/* <Divider height={'120px'}/> */}
    </Container>
  )
}
