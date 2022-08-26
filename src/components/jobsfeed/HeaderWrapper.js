import React from"react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionPrev, SectionNext } from "../common/ArrowButton";

export default function HeaderWrapper(props){

    const type=props.type;

    return(
        <Header>
            <div className="header-titleWrapper">
                {
                    type=="theme"||type=="featured"
                    ?
                    <h2 className="title">{props.title}</h2>
                    :
                    <h2 className="title">
                        <Link to='/'>
                            #{props.title}
                            <img src={props.src}></img>
                        </Link>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;회사를 소개합니다</span>
                    </h2>
                }

                {
                    type=="theme"||type=="featured"
                    ?
                    ""
                    :
                    <div className="subtitle">
                        <Link to='/'>
                            <span className="subtitle-content">포지션으로 더보기</span>
                            <span className="subtitle-icon">
                                <svg viewBox="0 0 6 10" width="6" height="10">
                                    <path d="M0.34467 8.24802C0.0517767 8.51161 0.0517767 8.93898 0.34467 9.20257C0.637563 9.46617 1.11244 9.46617 1.40533 9.20257L5.65533 5.37773C5.94822 5.11414 5.94822 4.68677 5.65533 4.42317L1.40533 0.59833C1.11244 0.334736 0.637563 0.334736 0.34467 0.59833C0.0517767 0.861923 0.0517767 1.28929 0.34467 1.55288L4.06434 4.90045L0.34467 8.24802Z"></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                }

            </div>

            {
                type=="featured"
                ?
                ""
                :
                <div className="header-nav">
                    <SectionPrev className="arrowBtn"></SectionPrev>
                    <SectionNext className="arrowBtn"></SectionNext>
                </div>
            }

        </Header>
    )
}

const Header=styled.header`
    position:relative;
    margin-bottom:36px;
    
    .header-titleWrapper{
        display:flex;
        flex-direction:column;
        justify-content:center;
        height:51px;
        padding-top:36px;
    }

    .title{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:9px;
        font-size:22px;
        font-weight:700;
        line-height:24px;
        color:#333;
        text-align:center;
    }
    .title>a{
        position:relative;
    }
    .title>a>img{
        position:absolute;
        top:-2px;
        width:24px;
        height:24px;
        margin:0 8px 0 4px;
    }
    .title>span{
        font-weight:400;
    }
    .subtitle{
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
    }
    .subtitle>a{
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .subtitle-content{
        margin-top:2px;
        margin-right:6px;
        font-weight:500;
        line-height:18px;
        font-size:15px;
        color:#767676;
    }
    .subtitle-icon{
        width:6px;
        height:10px;
        padding:0;
        margin:0;
        color:#767676;
    }
    .subtitle-icon>svg{
        fill:#767676;
        position:absolute;
    }

    .header-nav{
        position:absolute;
        top:50%;
        transform:translateY(-55%);
        width:100%;
        display:flex;
        justify-content:space-between;
    }
`