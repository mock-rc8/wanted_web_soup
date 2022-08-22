import React from"react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentSliderList from "./ContentSliderList";

export default function SectionDiv(props){
    var sectionContentSettings={
        dots:false,
        infinite:true,
        slidesToShow:4,
        slidesToScroll:4,
        autoplay:false
    }

    return(
        <SectionWrapper>
            <SectionHeader>
                <SectionPrev></SectionPrev>
                <div className="header-title">
                    <div className="title-wrapper">
                        <h2>{props.title}</h2>
                    </div>
                    <Link to='/' className="subtitle-wrapper">
                        {props.type} 전체보기
                        <span>
                            <svg viewBox="0 0 19 19">
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                        </span>
                    </Link>
                </div>
                <SectionNext></SectionNext>
            </SectionHeader>

            <SectionContentList>
                <ContentSlider {...sectionContentSettings}>
                    <ContentSliderList></ContentSliderList>
                    <ContentSliderList></ContentSliderList>
                    <ContentSliderList></ContentSliderList>
                    <ContentSliderList></ContentSliderList>
                    <ContentSliderList></ContentSliderList>
                </ContentSlider>
            </SectionContentList>

        </SectionWrapper>
    )
}

const SectionWrapper=styled.div`
    max-width:1060px;
    width:87.72%;
    margin:0 auto;
`
const SectionHeader=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:30px;
    grid-gap:8px;
    gap:8px;
    justify-content:space-between;

    .header-title{
        text-align:center;
    }
    .title-wrapper{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    h2{
        font-size:22px;
        line-height:1.3;
        font-weight:700;
        color:#333;
        margin-left:4px;
    }
    .subtitle-wrapper{
        font-size:15px;
        margin:5px 0 0;
        font-weight:500;
        line-height:normal;
        vertical-align:middle;
        color:#767676;
    }
    span{
        display:inline-flex;
        width:10px;
        margin-left:4px;
        vertical-align:middle;
        align-items:center;
        justify-content:center;
    }
`
const SectionContentList=styled.ul`
    margin:-10px;
`
const ContentSlider=styled(Slider)`
    margin-bottom:10px;

    .slick-prev::before,
    .slick-next::before{
        opacity:0;
        display:none;
    }
    .slick-track{
        width:2700px;
    }
    .slick-slide{
        width:270px;
    }
`

const B=styled.button`
    position:relative;
    width:36px;
    height:36px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    border:1px solid #e1e2e3;
    border-radius:50%;
    background-color:#fff;
    box-shadow:0 2px 2px 0 rgb(0 0 0 / 5%);
    font-size:16px;
    color:#767676 ;  
    span{
        margin-left:0;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    svg{
        fill:currentColor;
        width:1em;
        height:1em;
        flex-shrink:0;
        display:inline-block;
    }
`
const SectionPrev=()=>{
    return(
        <B>
            <span>
                <svg viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                </svg>

            </span>

        </B>
    )
    

}
const SectionNext=()=>{
    return(
        <B>
            <span>
                <svg viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
            </span>

        </B>
    )
}