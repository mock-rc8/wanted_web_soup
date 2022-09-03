import React, { useEffect, useState } from"react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentSliderList from "./ContentSliderList";
import { SectionPrev } from "../common/ArrowButton";
import { SectionNext } from "../common/ArrowButton";
import dummy from './eventlist.json';
import axios from "axios";
import EventSliderList from "./EventSliderList";
import articlelist from "./db/articlelist.json";
import vodlist from "./db/vodlist.json"

export default function SectionDiv(props){
    const url=`http://www.pangmin.shop/app/mains`

    const [articles,setArticles]=useState([]);
    const [vods,setVods]=useState([]);

    const search=async()=>{
        try{
            const data=await axios({
                method:'get',
                url:url,
            })
            setArticles(data.data.result[1]);
            setVods(data.data.result[2]);

        }catch(err){
            console.log(err);
        }
    }

    const num=props.contentNum;

    const [isNum, setIsNum]=useState(false);

    const ContentSettings={
        dots:false,
        infinite:true,
        slidesToShow:4,
        slidesToScroll:4,
        autoplay:false
    }

    const TwoSettings={
        dots:false,
        infinite:true,
        slidesToShow:2,
        slidesToScroll:2,
        autoplay:false
    }
    useEffect(()=>{
        search()
        {num==2?setIsNum(true):setIsNum(false)};

    },[])

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

            <SectionContentList style={isNum?{display:"none"}:{display:"block"}}>
                {
                    props.type==="vod"
                    ?
                    <ContentSlider {...ContentSettings}>
                        {
                            vodlist.map((item)=>{
                                return(
                                    <ContentSliderList 
                                    title={item.title} url={item.thumbnailUrl} type={"vod"}
                                    link={item.link} introduction={item.introduction} name={item.name}
                                    ></ContentSliderList>
                                )
                            })
                        }
                    </ContentSlider>
                    :
                    <ContentSlider {...ContentSettings}>
                    {
                        articlelist.map((item)=>{
                            return(
                                <ContentSliderList type={"article"}
                                title={item.title} tag={item.tag1} url={item.thumbnailUrl}
                                link={item.link} 
                                ></ContentSliderList>
                            )
                        })
                    }
                </ContentSlider>
                }

            </SectionContentList>

            <SectionEventList style={isNum?{display:"block"}:{display:"none"}}> 
                <ContentSlider {...TwoSettings}>
                    {
                        dummy.map((item)=>{
                            return(
                                <EventSliderList date={item.date}
                                title={item.title} src={item.src} link={item.link}></EventSliderList>
                            )
                            
                        })
                    }
                </ContentSlider>
            </SectionEventList>

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
const SectionEventList=styled.div`
    margin:-8px;

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
