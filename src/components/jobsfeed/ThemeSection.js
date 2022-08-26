import React from"react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionWrapper, SectionContent} from "../styled";
import HeaderWrapper from "./HeaderWrapper";
import imgList from "./db/imgList.json";
import dummy from "./db/list.json";

export default function ThemeSection(){
    const TwoSettings={
        dots:false,
        infinite:true,
        slidesToShow:2,
        slidesToScroll:2,
        autoplay:false
    }

    const list=dummy["테마로 모아보는 요즘 채용"];

    return(
        <SectionWrapper style={style}>
            <HeaderWrapper title="테마로 모아보는 요즘 채용" type="theme"></HeaderWrapper>

            <SectionContent>
                <StyledSlider {...TwoSettings}>
                        {
                            list.map((item)=>{
                                return<SliderItem
                                src={item.src} title={item.title} subtitle={item.subtitle}></SliderItem>
                            })
                        }
                    </StyledSlider>
            </SectionContent>
        </SectionWrapper>
    )
}

const SliderItem=(props)=>{
    const title=props.title;

    const logo=imgList[title];

    const style={
        backgroundImage:`url(${props.src})`
    }

    return(
        <CardContainer>
            <Link to="/">
                <div className="card-img" style={style}>
                </div>
                <h2>{props.title}</h2>
                <h5>{props.subtitle}</h5>
            </Link>

            <div className="card-logo">
                {
                    logo.map((item)=>{
                        return <img src={item.src}></img>
                    })
                }
                <Link to='/'>
                    <span>+8</span>

                </Link>
            </div>
        </CardContainer>
    )
}

const style={
    paddingTop:"70px",
    paddingBottom:"70px",
    position:"relative"
}

const CardContainer=styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;

    .card-img{
        padding-bottom:57.7%;
        background-size:cover;
        background-position:50%;
        border-radius:4px;
        box-shadow:inset 0 0 0 1px grb(0 0 0/10%);
    }

    h2{
        margin-top:16px;
        font-size:18px;
        font-weight:700;
        line-height:21.6px;
        color:#333;

    }
    h5{
        margin-top:8px;
        font-size:14px;
        line-height:16.8px;
        font-weight:500;
        color:#939393;
        text-overflow:ellipsis;
        overflow:hidden;
    }

    .card-logo{
        margin-top:8px;

    }
    .card-logo>img{
        display:inline;
        margin-top:8px;
        margin-right:8px;
        border:1px solid rgba(0,0,0,.05);
    }
    .card-logo>a{
        font-size:14px;
        color:#666;
        font-weight:700;
        vertical-align:text-top;

    }
`
const StyledSlider=styled(Slider)`
    margin-bottom:10px;
    .slick-slide{
        width:540px;
    }
    .slick-track{
        width:5400px;
    }
`