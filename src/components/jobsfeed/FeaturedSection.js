import React, { useState } from"react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionWrapper} from "../styled";
import HeaderWrapper from "./HeaderWrapper";
import dummy from "./db/list.json";


export default function FeaturedSection(){
    const list=dummy["요즘 뜨는 포지션"];

    return(
        <SectionWrapper style={style}>
            <HeaderWrapper title="요즘 뜨는 포지션" type="featured"></HeaderWrapper>
            <ListContainer>
                <ul className="job-list">
                    {
                    list.map((item)=>{
                        return<ListItem
                        position={item.position} name={item.name} location={item.location} 
                        reward={item.reward} url={item.url} plus={item.plusinfo}></ListItem>
                    })
                    }
                </ul>
            </ListContainer>
        </SectionWrapper>
    )
}
const style={
    padding:"70px 0 50px",
    position:"relative"
}

const ListItem=(props)=>{
    const imgstyle={
        backgroundImage:`url(${props.url})`
    }

    return(
        <Item>
            <div>
                <Link to='/'>
                    <header className="card-img" style={imgstyle}>
                        <button className="bookmarkBtn">
                            <svg fill="none" width="24" height="24" viewBox="0 0 18 18">
                                <path fill="#fff" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"></path>
                                <path fillOpacity="0.5" fill="black" d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"></path>
                            </svg>
                        </button>
                    </header>
                    <div className="card-body">
                        <div className="card-position">{props.position}</div>
                        <div className="card-name">{props.name}</div>

                        {
                            props.plus=='t'
                            ?
                            <PlusInfo></PlusInfo>
                            :
                            ""
                        }

                        <div className="card-location">{props.location}</div>
                        <div className="card-reward">{props.reward}</div>
                    </div>
                </Link>
            </div>
        </Item>
    )
}

const PlusInfo=()=>{
    const [isOver,setIsOver]=useState(0);

    return(
        <PlusInfoContainer>
            <button>
                <div className="info-body" onMouseOver={()=>setIsOver(1)}>
                    <span>응답률이 매우 높음</span>
                </div>
                {
                    isOver
                    ?
                    <HideInfo onMouseOut={()=>setIsOver(0)}>지원 후 응답 받을 확률이 95% 이상입니다.</HideInfo>
                    :
                    ""
                }
                
            </button>
        </PlusInfoContainer>
    )
}

const PlusInfoContainer=styled.div`
    position:relative;
    button{
        position:relative;
    }
    .info-body{
        border:1px solid #00aead;
        color:#00aead;
        border-radius:2px;
        background-color:#fff;
        display:inline-block;
        font-size:10px;
        font-weight:600;
        height:19px;
        line-height:19px;
        margin-top:4px;
        padding:0 5px;
    }
    .info-body>span{
        position:relative;
        line-height:19px;
        top:-1px;
    }
`
const HideInfo=styled.div`

    color:#333;
    font-size:12px;
    font-weight:400;
    min-height:40px;
    height:auto;
    line-height:normal;
    position:absolute;
    padding:11px 12px;
    background:#fff;
    border:1px solid #999;
    z-index:1;
    white-space:nowrap;
    top: calc(100% + 4px);
    left:50%;
    transform:translateX(-50%);

`

const Item=styled.li`
    width:25%;
    padding:10px;
    display:inline-block;
    vertical-align:top;

    .card-img{
        padding-bottom:75%;
        position:relative;
        background-size:cover;
        background-position:50%;
        border-radius:4px;
        box-shadow:inset 0 0 0 1px rgb(0 0 0/10%);
    }
    .bookmarkBtn{
        background:none;
        padding:8px 6px;
        width:42px;
        height:42px;
        top:0;
        right:0;
        flex-direction:row;
        z-index:1;
        justify-content:flex-end;
        align-items:flex-start;
        border-radius:3px;
        position:absolute;
        color:#fff;
        font-size:12px;
        font-weight:400;
        display:flex;
    }

    .card-body{
        padding:14px 0;
    }
    .card-position{
        text-overflow:ellipsis;
        position:relative;
        color:#333;
        font-size:17px;
        font-weight:600;
        line-height:1.2;
        max-height:2.4em;
        overflow:hidden;
        text-align:left;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        word-break:break-word;

    }
    .card-name{
        font-size:14px;
        color:#333;
        font-weight:600;
        text-align:left;
        width:100%;
        text-overflow:ellipsis;
        margin-top:10px;
        overflow:hidden;
        
    }
    .card-location{
        font-weight:400;
        color:#999;
        text-align:left;
        width:100%;
        text-overflow:ellipsis;
        margin-top:10px;
        overflow:hidden;
        font-size:14px;
    }
    .card-reward{
        margin-top:10px;
        color:#333;
        font-size:14px;
        font-weight:500;
        text-align:left;
        width:100%;
        text-overflow:ellipsis;
        overflow:hidden;
    }
`


const ListContainer=styled.div`
    .job-list{
        margin:-10px;
        padding:0;
    }
`

