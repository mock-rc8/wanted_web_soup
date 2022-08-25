import React from"react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function BannerBtn(props){
    let margin="60px auto 0";

    switch(props.page){
        case 'job':
            margin="60px auto";
            break;
    }

    return(
        <BannerWrapper style={margin={margin}}>
            <Link to='/'>
                <div className="banner-blue">

                    {props.page=="job"
                    ?<JobsfeedBanner></JobsfeedBanner>
                    :<HomeBanner></HomeBanner>}

                </div>
            </Link>
        </BannerWrapper>
    )
}


const HomeBanner=()=>{
    return(
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
    )
}

const JobsfeedBanner=()=>{
    return(
        <div className="banner-box">
            <svg width="28" height="28" viewBox="0 0 28 28" className="jobsfeed-icon">
                <path d="M24.465 25.702a.875.875 0 0 0 1.237-1.237L18.12 16.88l-.296-.257a.875.875 0 0 0-1.187.043 7.876 7.876 0 1 1 1.96-3.216.875.875 0 0 0 1.67.525c.292-.93.442-1.902.442-2.893a9.625 9.625 0 0 0-9.625-9.625 9.625 9.625 0 0 0-9.625 9.625c0 5.315 4.31 9.625 9.625 9.625a9.589 9.589 0 0 0 6.161-2.23l7.22 7.224z"></path>
            </svg>
            채용 중인 포지션 보러가기
        </div>

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
        font-size:18px;
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
    .banner-icon>svg{
        display:inline-block;
        width:1em;
        height:1em;
        flex-shrink:0;
        fill:#fff;
    }

    .jobsfeed-icon{
        margin-right:15px;
        fill:#fff;
    }
`
