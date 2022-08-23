import React from"react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HireBannerItem(props){
    return(
        <BannerItems>
            <Link to='/' className="item-icon">
                <span className="span-wrapper">
                    <svg viewBox="0 0 32 32">
                        <path d={props.d}></path>
                    </svg>
                </span>
            </Link>
            <Link to='/' className="item-title">
                <span className="span-wrapper">
                    {props.title}
                    <span className="icon-wrapper">
                        <span className="span-wrapper">
                            <svg viewBox="0 0 18 18">
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                        </span>
                    </span>
                </span>
            </Link>
        </BannerItems>
    )
}

const BannerItems=styled.div`
    padding:18px 0 0;

    width:263.5px;
    align-self:auto;
    flex-wrap:nowrap;
    align-items:center;
    justify-content:flex-start;
    flex-direction:column;
    display:flex;
    border-right:1px solid #ececec;
    &: last-of-type{
        border:none;
    }
    .item-icon{
        font-size:32px;
    }
    .span-wrapper{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    svg{
        width:1em;
        height:1em;
        display:inline-block;
        
    }
    .item-title{
        height:50px;
        font-size:16px;
        padding:6px 8px;
        position:relative;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        border-radius:25px;
        font-weight:700;
        color:#333;
    }
    .icon-wrapper{
        margin-top:-2px;
        margin-right:-1px;
        margin-left:2px
    }

`