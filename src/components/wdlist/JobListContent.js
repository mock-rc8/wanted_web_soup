import React from "react";
import styled from "styled-components";
import FilterList from "./FilterList";
import TagFilter from "./TagFilter";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ListContainer from "../common/ListContainer";
import list from './db/jobList.json';

export default function JobListContent(){

    var settings={
        dots:false,
        infinite:false,
        slidesToShow:5,
        slidesToScroll:7,
        autoplay:false,
    }

    return(
        <JobListContentWrapper>
            <div>
                <div>
                    <FilterListWrapper>
                        <FilterList></FilterList>
                        <Divider></Divider>
                        <TagFilter></TagFilter>
                    </FilterListWrapper>

                </div>

                <DividerStyle></DividerStyle>

                <BookmarkSection>
                    <button>
                        <svg width="13" height="17" viewBox="0 0 13 17" className="icon">
                            <path fill="#36f" d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"></path>
                        </svg>
                        <span>북마크 모아보기</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" className="arrowicon">
                            <path fill="#36f" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path>
                        </svg>
                    </button>
                </BookmarkSection>

                <h3>적극 채용 중인 회사</h3>

                <FeaturedList>
                    <StyledSlider {...settings}>
                        <SlideItem></SlideItem>
                        <SlideItem></SlideItem>
                        <SlideItem></SlideItem>
                        <SlideItem></SlideItem>
                        <SlideItem></SlideItem>
                    </StyledSlider>
                </FeaturedList>

                <SideBanner>
                    <button>
                        <div className="banner-text">
                            프리랜서 프로젝트
                            <br/>
                            찾고 있다면?
                        </div>
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fgigs%2Fwww%2Fwanted%2Fgigs_side_banner.png&w=120&q=100"></img>
                        <span className="arrow-icon">
                            <svg width="12" height="12" viewBox="0 0 12 12">
                                <path fill="#979DA4"
                                d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                            </svg>
                        </span>
                    </button>
                </SideBanner>

                <ListContainer list={list}></ListContainer>
            </div>
            
        </JobListContentWrapper>
    )
}
const SlideItem=()=>{
    return(
        <ItemWrapper>
            <Link to='/'>
                <header>
                    <div className="bgImg"></div>
                </header>
                <footer>
                    <div className="logoImg"></div>
                    <h4>로만</h4>
                    <h5>12개 포지션</h5>
                </footer>
            </Link>
        </ItemWrapper>

    )
}
const ItemWrapper=styled.div`
    header{
        z-index:1;
        border-radius:3px 3px 0 0;
        margin:0 9px;
    }
    .bgImg{
        background-image:url(https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75);
        height:147px;
        border-radius:3px 3px 0 0;
        background-position:50%;
        background-size:cover;
        background-repeat:no-repeat;

        box-shadow:inset 0 0 0 1px rgb(0 0 0 / 10%)
    }
    footer{
        margin:0 9px;
        padding:34px 16px 0;
        height:124px;
        border:1px solid #e1e2e3;
        border-top:none;
        border-radius:0 0 3px 3px;
        position:relative;
    }
    .logoImg{
        background-image: url(https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75);
        background-size: contain;
        background-color: rgb(255, 255, 255);
        position:absolute;
        top:-25px;
        left:16px;
        width:50px;
        height:50px;
        background-position:50%;
        background-repeat: no-repeat;
        z-index: 0;
        z-index: 0;
        box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    }
    h4{
        position:relative;
        font-size:16px;
        font-weight:600;
        letter-spacing:-.3px;
        color:#333;
        line-height:1.2;
        margin:4px 0;
        overflow:hidden;
        max-height:58px;
    }
    h5{
        font-size:14px;
        font-weight:400;
        letter-spacint:-.2px;
        color:#999;
        margin-top:6px;
    }
`
const StyledSlider=styled(Slider)`
    margin-left:-9px;
    margin-right:-4.5px;
    margin-bottom:30px;

`
const FilterListWrapper=styled.div`
    top:50px;
    margin-bottom:25px;
    padding-top:10px;
`

const JobListContentWrapper=styled.div`
    margin:0 auto;
    padding:20px 0 80px;
    width:87.72%;
    position:relative;
    max-width:1060px;

    h3{
        font-size:22px;
        font-weight:600;
        letter-spacing:-.3px;
        color:#333;
        margin:20px 0 14px;
    }
`
const Divider=styled.hr`
    max-width:1060px;
    margin:25px auto;
    background-color:rgba(236,236,236,.7);
    height:1px;
    border:none;
    flex-shrink:0
`
const DividerStyle=styled.hr`
    width:100vw;
    margin-bottom:38px;
    margin-left:calc(-50vw + 50%);
    background-color:#e1e2e3;
    height:1px;
    border:none;
    flex-shrink:0;

`
const BookmarkSection=styled.div`
    margin-bottom:12px;
    button{
        display:flex;
        align-items:center;
        line-height:24px;
        color:#36f;
    }
    .icon{
        width:11px;
        height:16px;
        margin-right:8px;
        color:grb(51,102,255);
    }
    span{
        font-size:15px;
        font-weight:600;
        line-height:24px;
    }
    .arrowicon{
        width:10px;
        margin:0 0 0 2px;
        height:16px;
    }
`

const FeaturedList=styled.div`
    max-width:1060px;
    margin-bottom:40px;
    position:relative;
    margin-left:0;
    margin-right:0;
`

const SideBanner=styled.aside`
    background-color:#f5f7ff;
    border-radius:4px;
    position:fixed;
    top:330px;
    right:30px;
    width:200px;
    height:90px;
    z-index:2;
    
    button{
        width:100%;
        height:100%;
        padding:16px 0 0 16px;
        display:flex;

    }
    .banner-text{
        text-align:left;
        font-weight:700;
        font-size:14px;
        line-height:20px;
        color:#36f;
    }
    img{
        position:absolute;
        bottom:0;
        right:12px;
        width:83px;
        height:56px;
    }
    .arrow-icon{
        position:absolute;
        left:50%;
        bottom:9.7px;
        transform:translateX(-50%);
    }
`


