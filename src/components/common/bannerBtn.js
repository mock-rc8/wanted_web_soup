import React from"react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function BannerBtn(){
    return(
        <BannerWrapper>
            <Link to='/'>
                <div className="banner-blue">
                    <div className="banner-box">
                        <span>
                            직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
                            <em className="banner-emoji">👀</em>
                            <span className="banner-icon">
                                <svg viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                </svg>
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </BannerWrapper>
    )
}

const BannerWrapper=styled.div`
    margin:60px auto 0;
    width:87.7%;
    max-width:1060px;
    
    .banner-blue{
        display:flex;
        text-align:center;
    }
    .banner-box{
        background-image:linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
        display:flex;
        flex-grow:1;
        justify-content:center;
        align-items:center;
        color:#fff;
        font-weight:700;
        padding:21px 30px;
        font-size:17px;
        border-radius:38.5px;
    }
    .banner-emogi{
        font-weight:400;
    }
    .banner-icon{
        display:inline-flex;
        width:10px;
        margin-left:2px;
        align-items:center;
        justify-content:center;

    }
    svg{
        display:inline-block;
        width:1em;
        height:1em;
        flex-shrink:0;
        fill:#fff;
    }
`