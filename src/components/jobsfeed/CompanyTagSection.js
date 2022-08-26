import React from"react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionWrapper, SectionContent} from "../styled";
import dummy from './db/list.json';
import HeaderWrapper from "./HeaderWrapper";

export default function CaompanyTagSection(){

    return(
        <SectionWrapper>
            <ListItems 
            title="연봉이 최고의 복지"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=75&q=75"
            ></ListItems>

            <ListItems 
            title="50인 이상"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=75&q=75"
            ></ListItems>

        </SectionWrapper>
    )
}

const ListItems=(props)=>{
    const TwoSettings={
        dots:false,
        infinite:true,
        slidesToShow:2,
        slidesToScroll:2,
        autoplay:false
    }

    const title=props.title;

    const list=dummy[title];

    return(
        <ContentList>
            <HeaderWrapper title={props.title} src={props.src}></HeaderWrapper>

            <SectionContent>
                <StyledSlide {...TwoSettings}>
                    {
                        list.map((item)=>{
                            return<SliderItem 
                            imgUrl={item.imgUrl} title={item.title} tag={item.tag} profileUrl={item.profileUrl}></SliderItem>
                        })
                    }
                </StyledSlide>
            </SectionContent>

        </ContentList>
    )
}

const SliderItem=(props)=>{
    const style={
        backgroundImage:`url(${props.imgUrl})`
    }
    const profileStyle={
        backgroundImage:`url(${props.profileUrl})`
    }

    return(
        <CardContainer>
            <Link to='/'>
                <div className="card-img" style={style}></div>
                <div className="card-info">
                    <div className="info-container">
                        <div className="info-profile" style={profileStyle}></div>
                        <div className="info-body">
                            <p className="body-title">{props.title}</p>
                            <p className="body-tag">{props.tag}</p>
                        </div>
                    </div>
                    <button className="info-btn">
                        <span>팔로우</span>
                    </button>
                </div>
            </Link>
        </CardContainer>
    )
}

const ContentList=styled.div`
    margin-bottom:90px;
`
const StyledSlide=styled(Slider)`
    margin-bottom:30px;
`

const CardContainer=styled.div`
    padding:10px;

    .card-img{
        padding-bottom:52%;
        background-size:cover;
        background-position:50%;
        border-radius:4px;
        box-shadow:inset 0 0 0 1px grb(0 0 0/10%);
    }

    .card-info{
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        margin-top:17px;
    }
    .info-container{
        display:flex;
        flex:1 0;
    }
    .info-profile{
        width:42px;
        height:42px;
        flex-grow:0;
        flex-shrink:0;
        box-shadow:inset 0 0 0 1px rgb(0 0 0/10%);
        background-size:contain;
        background-position:50%;
        margin-right:12px;
        background-repaeat:no-repeat;
    }
    .info-body{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .body-title{
        font-size:18px;
        font-weight:700;
        color:#333;
    }
    .body-tag{
        font-size:14px;
        font-weiht:500;
        color:#999;
    }

    .info-btn{
        border:1px solid #e1e2e3;
        padding:12px 25.2px 11px;
        line-height:1;
        height:40px;
        font-size:15px;
        color:#36f;
        background-color;
        position:relative;
        display:inline-block;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        border-radius:25px;
        font-weight:700;
    }
    .info-btn>span{
        width:100%;
    }
`

