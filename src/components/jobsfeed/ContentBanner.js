import React from"react";
import styled from "styled-components";

export default function ContentBanner(){
    return(
        <BannerWrapper>
            <button>
                <div className="banner-content">
                    <p>입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기</p>
                    <strong>지금 확인하기</strong>
                    <div className="imgWrapper">
                        <img src="https://static.wanted.co.kr/career_connect/banner.png" alt="career-content-banner"></img>
                    </div>
                </div>
            </button>
        </BannerWrapper>
    )
}

const BannerWrapper=styled.div`
    height:150px;
    border-radius:0;
    margin:10px 0 60px;
    width:100%;
    background: linear-gradient(90deg,#ddebff -.28%,#b7d8ff);
    cursor:pointer;

    button{
        max-width:1060px;
        padding:0;
        margin:auto;
        font-size:24px;
        line-height:29px;
        position:relative;
        display:flex;
        align-items:center;
        height:100%;
        font-weight:700;
        color:#5071dc;
        width:87.72%;
    }
    .banner-content{
        display:flex;
        flex-direction:column;
    }
    p{
        display:inline-flex;
        margin-right:2px;
    }
    strong{
        margin-top:10px;
        height:36px;
        font-size:14px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:119px;
        border-radius:25px;
        background-color:#5071dc;
        color:#fff;
        font-weight:700;
        line-hegiht:16px;
    }
    .imgWrapper{
        position:absolute;
        right:30px;
        bottom:-12px;
        width:236px;
        height:160px;
        margin-bottom:12px;
        overflow-y:hidden;

    }
    .imgWrapper>img{
        position:relative;
        bottom:-12px;
        width:100%;
        height:100%;
        vertical-align:middle;
    }
`