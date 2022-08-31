import React from"react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function ContentSliderList(props){
    return(
        <ListItem>
            <a href={props.link} style={{width:"100%"}}>
                <div className='content'>
                    <img src={props.url} alt="img"></img>
                </div>
                {
                    props.type==="article"
                    ?
                    <div className="article">
                        <p className="article-title">{props.title}</p>
                        <p className="article-category">{props.tag}</p>
                    </div>
                    :
                    <div className="article">
                        <p className="article-name">{props.name}</p>
                        <p className="article-title">{props.title}</p>
                        <p className="article-intro">{props.introduction}</p>
                    </div>
                }
            </a>
        </ListItem>
    )
}

const ListItem=styled.div`
    padding:10px;
    display:flex;
    .content{
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

    .article-name{
        font-size:14px;
        margin:5px 0;
        font-weight:600;
        color:#333;

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
    .article-intro{
        font-size:13px;
        margin-top:8px;
        font-weight:600;
        color:#aaa;
    }
`
