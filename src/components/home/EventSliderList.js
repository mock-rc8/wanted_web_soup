import React from"react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function EventSliderList(props){
    return(
        <ListItem>
            <a href={props.link} style={{width:"100%"}}>
                <div className="event">
                    <img src={props.src} alt="img"></img>
                </div>
                <div className="event-body">
                    <div className="event-label">
                        <span className="label-online">
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="#fff">
                                <path d="M5.98.9A5.09 5.09 0 00.32 6.54l1.03-.1a4.07 4.07 0 014.52-4.53L5.98.89zm4.57 4.56l-1.03.1A4.07 4.07 0 015 10.1l-.11 1.03a5.1 5.1 0 005.66-5.66zM5.76 2.94c-.9-.1-1.84.18-2.53.86a3.06 3.06 0 00-.86 2.54l1.02-.11c-.07-.6.12-1.24.57-1.7a2.05 2.05 0 011.7-.57l.1-1.02zM8.5 5.68l-1.04.12a2 2 0 01-2.24 2.24L5.1 9.06a3.06 3.06 0 003.4-3.4zm-2.53-.22c-.3-.3-.8-.3-1.1 0-.3.3-.29.78.02 1.08.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08z"></path>
                            </svg>
                            <span>온라인</span>
                        </span>
                    </div>
                    <h3 className="event-tile">{props.title}</h3>
                    <p className="event-date">{props.date}</p>
                </div>
            </a>
        </ListItem>
    )
}
const ListItem=styled.div`
    padding:10px;
    display:flex;

    .event{
        position:relative;
        height:auto;
        padding-bottom:52.3%;
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

    .event-body{
        margin-top:12px;
    }

    .event-label{
        display:flex;
    }
    h3{
        font-size:16px;
        margin-top:8px;
        font-weight:700;
        line-height:1.5;
        color:#333;
    }
    .event-date{
        margin-top:3px;
        font-size:13px;
        font-weight:500;
        color:#aaa;
    }
    .label-online{
        border-color:#1c1c1c;
        background-color:#1c1c1c;
        margin-right:5px;
        color:#fff;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        height:20px;
        border:1px solid;
        border-radius:2px;
    }
    .label-online>svg{
        margin-left:4px;
    }
    .label-online>span{
        font-size:11px;
        font-weight:700;
        padding:0 6px;
    }
`
