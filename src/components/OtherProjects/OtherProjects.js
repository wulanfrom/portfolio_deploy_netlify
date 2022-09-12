import React, { useEffect, useState, useRef } from "react";
import "./OtherProjects.css";

import { Row, Col, Container } from "react-bootstrap";
import OtherCard from "../OtherCard/OtherCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import Divider from "../Divider/Divider";

// Animations
import SplitText from "../../utils/Split3.min.js";
import { gsap } from "gsap";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

// other projects
// import Nft from '../../resources/nftPoster/nft.png'
// import ColorArt from '../../resources/colorArt/color.png'
// import AsianCHI from '../../resources/asianCHI/asianchi.png'
// import GoodFood from '../../resources/goodFood/goodFood.png'
// import Kixlab from '../../resources/xDesign/xdesign.png'

import Nft from "../../resources/otherProjects/nftArt.png";
import ColorArt from "../../resources/otherProjects/colorArt.png";
import AsianCHI from "../../resources/otherProjects/asianCHI.png";
import GoodFood from "../../resources/otherProjects/goodFood.png";
import XDesign from "../../resources/otherProjects/xdesign.png";
import SomeWeather from "../../resources/otherProjects/someWeather.png";

// featured projects small images
import SomeWeatherImageSmall from "../../resources/small-cards/small-sw.png";
import XDesignSmall from "../../resources/small-cards/small-xd.png";
import AsianCHISmall from "../../resources/small-cards/small-asianchi.png";
import SomeWeatherImage from "../../resources/featuredPictures/someWeather-featured.png";

export default function OtherProjects() {
  const category = {
    nft: "infographic",
    goodFood: "illustration",
    colorArt: "data visualization",
    xDesign: "HCI Research // WEB DEVELOPMENT",
    someWeather: "UX DESIGN // APP DESIGN",
    asianCHI: "WEB DEVELOPMENT & MANAGEMENT",
  };
  const color = {
    // background color, font color
    goodFood: ["#BFDCC4", "#000000"],
    nft: ["#FCFF76", "#000000"],
    colorArt: ["#6A777E", "#ffffff"],
    asianCHI: ["#00357C", "#ffffff"],
    xDesign: ["#E8E8E8", "#000000"],
    someWeather: ["#4CDCB1", "#000000"],
  };
  const img = {
    goodFood: GoodFood,
    nft: Nft,
    colorArt: ColorArt,
    someWeather: SomeWeather,
    asianCHI: AsianCHI,
    xDesign: XDesign,
  };
  const projectLink = {
    goodFood: "goodFood",
    nft: "nftPoster",
    colorArt: "colorArt",
    asianCHI: "asianCHI",
    xDesign: "xDesign",
    someWeather: "someWeather",
    kixlab: "xDesign",
  };
  const desc = {
    someWeather:
      "Integrating environmental awareness to everyday weather apps.",
    asianCHI: "Asian CHI Symposium's 2021 Official Website",
    kixlab: "Intergrating explainable AI into interface design education.",
    xDesign: "Intergrating explainable AI into interface design education.",
    colorArt:
      "Visualizing the Colors used by the Century's Most Influential Painters",
    nft: "Drawing Indonesian Food as homes",
    goodFood: "Drawing Indonesian Food as homes",
  };

  const titleRef = useRef();
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(titleRef);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText(".sub-title", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText(".sub-title", {
        type: "lines",
        linesClass: "lineParent",
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <div>
      {/* <div className="sub-title my-5">
            <h1 ref={titleRef} style={{fontSize: "90px"}} className={cn("bebas-text", {"is-reveal": reveal})}>Other Projects</h1> */}
      {/* <p className="section-sub">projects i’ve done on the side.</p> */}
      {/* </div> */}

      <div>
        <SectionTitle
          line1="Relevant"
          line2="Works"
          desc="UX DESIGN // MOBILE DESIGN // WEB DEVELOPMENT // ILLUSTRATION"
        />
      </div>

      <Container>
        <Divider height={80} />
        <Row style={{ marginBottom: "12px" }} className="p-0">
          {/* <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"XDesign"} link={projectLink.xDesign} img={img.xDesign} category={category.xDesign} bgColor={color.xDesign[0]} textColor={color.xDesign[1]} />
                    </div>
                </Col> */}
          <Col className="" sm={12} md={12} lg={6}>
            <div className="other-project">
              <OtherCard
                title={"Some(섬) Weather"}
                link={projectLink.someWeather}
                img={img.someWeather}
                category={category.someWeather}
                bgColor={color.someWeather[0]}
                textColor={color.someWeather[1]}
                desc={desc.someWeather}
              />
            </div>
          </Col>
          <Col className="" sm={12} md={12} lg={6}>
            <div className="other-project">
              <OtherCard
                title={"XDesign"}
                link={projectLink.xDesign}
                img={img.xDesign}
                category={category.xDesign}
                bgColor={color.xDesign[0]}
                textColor={color.xDesign[1]}
                desc={desc.xDesign}
              />
            </div>
          </Col>
          {/* <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"AsianCHI Symposium Official Website"} link={projectLink.asianCHI} img={img.asianCHI} category={category.asianCHI} bgColor={color.asianCHI[0]} textColor={color.asianCHI[1]} />
                    </div>
                </Col> */}
        </Row>
        <Row style={{ marginBottom: "12px" }} className="p-0">
          <Col className="" sm={12} md={12} lg={6}>
            <div className="other-project">
              <OtherCard
                title={"asian chi symposium "}
                link={projectLink.asianCHI}
                img={img.asianCHI}
                category={category.asianCHI}
                bgColor={color.asianCHI[0]}
                textColor={color.asianCHI[1]}
                desc={desc.asianCHI}
              />
            </div>
          </Col>
          <Col className="" sm={12} md={12} lg={6}>
            <div className="other-project">
              <OtherCard
                title={
                  "NFT Crypto Art is Changing How Artists Earn, but at What Cost?"
                }
                link={projectLink.nft}
                img={img.nft}
                category={category.nft}
                bgColor={color.nft[0]}
                textColor={color.nft[1]}
                desc={desc.nft}
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "12px" }} className="p-0">
          <Col className="" sm={12} md={12} lg={6}>
            <div className="other-project">
              <OtherCard
                title={"Color My Influence"}
                link={projectLink.colorArt}
                img={img.colorArt}
                category={category.colorArt}
                bgColor={color.colorArt[0]}
                textColor={color.colorArt[1]}
                desc={desc.colorArt}
              />
            </div>
          </Col>
          <Col className="" sm={12} md={12} lg={6}>
            <div className="other-project">
              <OtherCard
                title={"Good Food that Feels like Home"}
                link={projectLink.goodFood}
                img={img.goodFood}
                category={category.goodFood}
                bgColor={color.goodFood[0]}
                textColor={color.goodFood[1]}
                desc={desc.goodFood}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
