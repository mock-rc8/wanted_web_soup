import React from"react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SliderList(props){
    return(
        <SliderItem>
            <div className="slider-img">
                <img src={props.src} className="img" alt="sliderimg" width="1060px" height="300px"></img>
            </div>
            <div className="slider-info">
                <h2>프리온보딩 백엔드 코스</h2>
                <h3>기업의 실제 채용 과제로 구성된 커리큘럼</h3>
                <div className="slider-divider"></div>
                <Link to='/'>
                    <span className="link-btn-container">
                        바로가기
                        <span className="link-btn">
                            <span className="link-btn-icon">
                                <svg viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                </svg>
                            </span>
                        </span>
                    </span>
                </Link>
            </div>
        </SliderItem>
    )
}

const SliderItem=styled.div`

    display:inline-block;
    height:299.969px;
    width:1060px;

    .slider-img{
        position:relative;
        padding-bottom:28.3%;
        height:100%;
    }
    .img{
        position:absolute;
        left:0;
        top:0;
        border-radius:4px;
        object-fit:cover;
    }
    .slider-info{
        position:absolute;
        bottom:28px;
        width:330px;
        height:146px;
        border-radius:4px;
        background-color:#fff;
        text-align:left;
        left:34px;
    }
    h2{
        width:auto;
        margin-left:20px;
        margin-right:20px;
        font-size:20px;
        line-height:1.5;
        margin-top:20px;
        font-weight:700;
        color:#333;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
    }
    h3{
        margin: 0 20px;
        height:44px;
        font-size:14px;
        line-height:14px;
        font-weight:500;

    }
    .slider-divider{
        height:1px;
        margin:0;
        border:none;
        flex-shrink:0;
        background-color:#ececec;
    }
    a{
        height:40px;
        font-size:15px;
        color:#36f;
        padding: 6px 8px;
        position:relative;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        box-sizing:border-box;
        border-radius:25px;
        font-weight:700;
        border:none;
        cursor:pointer;
        margin: 6px 0 0 13px;
        text-decoration:none;
    }
    svg{
        width:1em;
        height:1em;
        fill:#36f;
        flex-shrink:0;
    }
    .link-btn-container{
        width:100%;
        display:flex;
    }
    .link-btn{
        margin-top:-2px;
        margin-right:-1px;
        margin-left:2px;
    }
    .link-btn-icon{
        width:100%;
        display:flex;
    }
`