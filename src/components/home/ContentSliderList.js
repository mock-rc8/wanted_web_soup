import React from"react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function ContentSliderList(){
    return(
        <ListItem>
            <Link to='/' style={{width:"100%"}}>
                <div className="thumbnail-wrapper">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2346%2Fce1dc609.jpg&w=800&q=75" alt="개발자를 위한 개발 팀, 뭐가 다를까?"></img>
                </div>
                <div className="article">
                    <p className="article-title">개발자를 위한 개발 팀, 뭐가 다를까?</p>
                    <p className="article-category">
                        #개발 #회사생활 #IT/기술
                    </p>
                </div>
            </Link>
        </ListItem>
    )
}

const ListItem=styled.div`
    padding:10px;
    display:flex;

    .thumbnail-wrapper{
        position:relative;
        height:auto;
        padding-bottom:70%;
        padding-left:0;
    }
    img{
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        border-radius:4px;
        object-fit:cover;
        object-position:top;
        outline:1px solid rgba(0,0,0,.05);
        outline-offset:-1px;
    }
    .article-title{
        margin-top:17px;
        font-size:16px;
        overflow:hidden;
        font-weight:700;
        line-height:1.5;
        color:#333;

    }
    .article-category{
        margin-top:13px;
        overflow:hidden;
        font-size:12px;
        font-weight:500;
        color:#333;
        text0overflow:ellipsis;
        display:-webkit-box;
    }
`