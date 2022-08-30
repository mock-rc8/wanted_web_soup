import React from "react";
import styled from "styled-components";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "./db/tagitems.json";

export default function TagFilter(){
    var settings={
        dots:false,
        infinite:false,
        slidesToShow:9,
        slidesToScroll:1,
        autoplay:false,
    }
        
    return(
        <TagFilterWrapper>
            <div className="tagList">
                <TagSlider {...settings}>
                    {
                        dummy.map((list)=>{
                            return <TagFiterItem title={list.title} src={list.src} color={list.color}></TagFiterItem>
                        })
                    }
                </TagSlider>
            </div>
        </TagFilterWrapper>
    )
}

const TagFiterItem=(props)=>{
    return(

        <ItemWrapper bgColor={props.color}>
            {props.title}
            <img src={props.src}></img>
        </ItemWrapper>

    )
}

const ItemWrapper=styled.button`

    background:${props=>props.bgColor};
    position:relative;
    height:32px;
    padding:8px 14px;
    border-radius:20px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    margin-right:8px;
    font-size:13px;
    line-height:16px;
    font-weight:400;
    color:#333;
    border:1px solid transparent;

    img{
        width:16px;
        height:16px;
        margin-left:5px;
    }

`
const TagFilterWrapper=styled.div`
    max-width:1060px;
    margin:0 auto;
`
const TagSlider=styled(Slider)`
    width:100%;
    margin-bottom:0;

    .slick-track{
        width:2968px!important;
    }
    .slick-track:after{
        display:block;
        z-index:1;
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%);
        position:absolute;
        height:32px;
        width:80px;
        top:0;
        right:0;
    }

    .slick-slide{
        outline:none;
        float:left;
        height:100%;
        min-height:1px;
        width:auto!important;
    }

    button{
        right:0;
        color:black;
    }
`