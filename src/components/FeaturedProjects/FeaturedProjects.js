import React, { useEffect, useState, useRef } from 'react'
import './FeaturedProjects.css'
import Divider from '../Divider/Divider'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

// Animations
import SplitText from '../../utils/Split3.min.js'
import { gsap } from 'gsap'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'

// featured projects
import CeeyaImage from '../../resources/featuredPictures/ceeya-featured.png'
import SomeWeatherImage from '../../resources/featuredPictures/someWeather-featured.png'
import ReBalanceImage from '../../resources/featuredPictures/reBalance-featured.png'
import WheelOn from '../../resources/featuredPictures/wheelOn-featured.png'
import XDesign from '../../resources/featuredPictures/kixlab-featured.png'
import AsianCHI from '../../resources/featuredPictures/asianCHI-featured.png'

// featured projects small images
import CeeyaImageSmall from '../../resources/small-cards/small-sc.png'
import SomeWeatherImageSmall from '../../resources/small-cards/small-sw.png'
import ReBalanceImageSmall from '../../resources/small-cards/small-rb.png'
import WheelOnSmall from '../../resources/small-cards/small-wo.png'
import XDesignSmall from '../../resources/small-cards/small-xd.png'
import AsianCHISmall from '../../resources/small-cards/small-asianchi.png'

// other projects
import Nft from '../../resources/nftPoster/nft.png'
import ColorArt from '../../resources/colorArt/color.png'
import GoodFood from '../../resources/goodFood/goodFood.png'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function FeaturedProjects() {
  const descriptions = {
    ceeya: "Ceeya.io’s Search Website Design, from conceptualization to implementation.",
    someWeather: "Integrating environmental awareness to everyday weather apps.",
    reBalance: "Helping manage your emotional, physical, and social health.",
    wheelOn: "Assisting users with moving disabilities through online means.",
    asianCHI: "Asian CHI Symposium's 2021 Official Website",
    kixlab: "Intergrating explainable AI into interface design education."
  }
  const category = {
    ceeya: "Web Development // UX Design",
    someWeather: "UX design // App design",
    reBalance: "SYSTEM DESIGN // WEB DEVELOPMENT",
    wheelOn: "SYSTEM DESIGN // WEB DEVELOPMENT",
    nft: "infographic",
    goodFood: "illustration",
    asianCHI: "web design & development",
    kixlab: "hci research // system design & development"
  }
  const images = {
    ceeya: CeeyaImage,
    someWeather: SomeWeatherImage,
    reBalance: ReBalanceImage,
    wheelOn: WheelOn,
    nft: Nft,
    colorArt: ColorArt,
    asianCHI: AsianCHI,
    goodFood: GoodFood,
    kixlab: XDesign,
  }

  const imagesSmall = {
    ceeya: CeeyaImageSmall, 
    someWeather: SomeWeatherImageSmall,
    reBalance: ReBalanceImageSmall,
    wheelOn: WheelOnSmall,
    asianCHI: AsianCHISmall,
    kixlab: XDesignSmall,  
  }

  const colors = {
    ceeya: ["#272727", "#ffffff"],
    someWeather: ["#4CDCB1", "#000000"],
    reBalance: ["#6CAFE5", "#000000"],
    wheelOn: ["#FAB82D", "#000000"],
    asianCHI: ["#02377D", "#fff"],
    kixlab: ["#E8E8E8", "#000"],
  }

  const projectLinks = {
    ceeya: "ceeya",
    someWeather: "someWeather",
    reBalance: "reBalance",
    wheelOn: "wheelon",
    asianCHI: "asianCHI",
    kixlab: "xdesign"
  }

  const titleRef = useRef();
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(titleRef);

    useEffect(() => {
        if (onScreen) setReveal(onScreen)
        
    }, [onScreen])
    
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
        {/* <div className="sub-title my-5"> */}
            {/* <h1 ref={titleRef} style={{fontSize: "120px"}} className="bebas-text">Featured Projects</h1> */}
            {/* <p className="section-sub">Here are some projects that I am proud of!</p> */}
        <div>
          <SectionTitle line1="Featured" line2="Works" desc="UX ENGINEER // UX DESIGN // WEB DEVELOPMENT" />
        </div>
        {/* <div className="project"> */}

        {/* Featured works */}
        <div>
          <Divider height={80}/>
          <FeaturedCard className="featured-full-width" category={category.ceeya} link={projectLinks.ceeya} title={"Search.connect"} smallImg={imagesSmall.ceeya} desc={descriptions.ceeya} img={images.ceeya} bgColor={colors.ceeya[0]} textColor={colors.ceeya[1]}/>
          {/* <FeaturedCard className="featured-small-width" category={category.ceeya} link={projectLinks.ceeya} title={"Search.connect"} desc={descriptions.ceeya} img={imagesSmall.ceeya} bgColor={colors.ceeya[0]} textColor={colors.ceeya[1]}/> */}
          {/* </div>/ */}

          <Divider height={12}/>

          {/* <div className="project"> */}
          <FeaturedCard className="featured-full-width" category={category.reBalance} link={projectLinks.reBalance} title={"reBalance"} smallImg={imagesSmall.reBalance} desc={descriptions.reBalance} img={images.reBalance} bgColor={colors.reBalance[0]} textColor={colors.reBalance[1]}/>
            {/* <FeaturedCard className="featured-small-width" category={category.reBalance} link={projectLinks.reBalance} title={"reBalance"} desc={descriptions.reBalance} img={imagesSmall.reBalance} bgColor={colors.reBalance[0]} textColor={colors.reBalance[1]}/> */}
          {/* </div> */}

          <Divider height={12}/>

          {/* <div className="project"> */}
          <FeaturedCard className="featured-full-width" category={category.wheelOn} link={projectLinks.wheelOn} title={"WheelOn"} smallImg={imagesSmall.wheelOn} desc={descriptions.wheelOn} img={images.wheelOn} bgColor={colors.wheelOn[0]} textColor={colors.wheelOn[1]}/>
          {/* <FeaturedCard className="featured-small-width" category={category.wheelOn} link={projectLinks.wheelOn} title={"WheelOn"} desc={descriptions.wheelOn} img={imagesSmall.wheelOn} bgColor={colors.wheelOn[0]} textColor={colors.wheelOn[1]}/> */}
          {/* </div> */}
        </div>

        {/* <Divider height={80}/> */}

        {/* <div className="project"> */}
        {/* <FeaturedCard className="featured-full-width" category={category.someWeather} link={projectLinks.someWeather} title={"Some(섬) Weather"} desc={descriptions.someWeather} img={images.someWeather} bgColor={colors.someWeather[0]} textColor={colors.someWeather[1]}/> */}
        {/* <FeaturedCard className="featured-small-width" category={category.someWeather} link={projectLinks.someWeather} title={"Some(섬) Weather"} desc={descriptions.someWeather} img={imagesSmall.someWeather} bgColor={colors.someWeather[0]} textColor={colors.someWeather[1]}/> */}
        {/* </div> */}

        {/* <Divider height={'32px'}/> */}

        {/* <FeaturedCard className="featured-full-width" category={category.kixlab} link={projectLinks.kixlab} title={"XDesign"} desc={descriptions.kixlab} img={images.kixlab} bgColor={colors.kixlab[0]} textColor={colors.kixlab[1]}/> */}
        {/* <FeaturedCard className="featured-small-width" category={category.kixlab} link={projectLinks.kixlab} title={"XDesign"} desc={descriptions.kixlab} img={imagesSmall.kixlab} bgColor={colors.kixlab[0]} textColor={colors.kixlab[1]}/> */}
        {/* </div> */}

        {/* <Divider height={'32px'}/> */}

        {/* <FeaturedCard className="featured-full-width" category={category.asianCHI} link={projectLinks.asianCHI} title={"AsianCHI Symposium 2021 Official Website"} desc={descriptions.asianCHI} img={images.asianCHI} bgColor={colors.asianCHI[0]} textColor={colors.asianCHI[1]}/> */}
        {/* <FeaturedCard className="featured-small-width" category={category.asianCHI} link={projectLinks.asianCHI} title={"AsianCHI Symposium 2021 Official Website"} desc={descriptions.asianCHI} img={imagesSmall.asianCHI} bgColor={colors.asianCHI[0]} textColor={colors.asianCHI[1]}/> */}
        {/* </div> */}

        {/* <Divider height={'32px'}/> */}
    </div>
  )
}
