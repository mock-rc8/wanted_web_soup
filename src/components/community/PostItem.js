import React, { useState } from "react";
import styled from "styled-components";
import { Divider } from "./CommunityList";

export default function PostItem(props){
    const [jobGroup,setJobGroup]=useState(props.jobGroup);
    const [jobColor,setJobColor]=useState("");

    switch(jobGroup){
        case 1:
            setJobGroup("개발");
            setJobColor("#8958fa");
            break;
        case 2:
            setJobGroup("디자인");
            setJobColor("#008ae2");
            break;
    }
    return(
        <PostItemWrapper href={props.url}>

            <div className="item-header">
                <div className="author-box">
                    <div className="author-imgWrapper">
                        <div className="author-img">
                            <img src={props.src}></img>
                        </div>
                    </div>
                    <button className="author-info">
                        <div className="userInfo">
                            <div className="info-userName">{props.name}</div>
                            <div className="info-carrerTag">
                                <CarrerTag color={jobColor}>{jobGroup}</CarrerTag>
                                <CarrerTag color="#888">{props.career}</CarrerTag>
                            </div>
                        </div>
                        <span className="createTime">{props.date}</span>
                    </button>
                </div>
            </div>

            <ItemBody>
                <h3 className="item-title">{props.title}</h3>
                <p className="item-content">{props.text}</p>
                <div className="item-tagList">
                    <TagList tag={props.tag1}></TagList>
                    <TagList tag={props.tag2}></TagList>
                </div>
                <div className="stateBtn">
                    <LikeBtn num={props.likeNum}></LikeBtn>
                    <CommentBtn num={props.commentNum}></CommentBtn>
                </div>
            </ItemBody>

            <Divider></Divider>

        </PostItemWrapper>
    )
}

const PostItemWrapper=styled.a`
    padding:29px 29px 30px;
    margin-bottom:2px;
    position:relative;
    display:block;

    .item-header{
        margin-bottom:9px
    }
    .author-box{
        display:flex;
        align-items:center;
        width:100%;
    }   
    .author-imgWrapper{
        position:relative;
        margin-right:7px;
    }
    .author-img{
        width:28px;
        height:28px;
        border:1px solid #ececec;
        border-radius:50%;
        overflow:hidden;
        background-color:#d8d8d8;
        background-image: url(https://static.wanted.co.kr/images/profile_default.png);
        background-size:cover;
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    .author-info{
        display:flex;
        flex-direction:column;
        width: calc(100% - 40px);
    }
    .userInfo{
        display:flex;
        width:100%;
    }
    .createTime{
        font-size:12px;
        color:#939393;
        line-height:100%;
    }
    .info-userName{
        margin-right:4px;
        max-width:399px;
        color:#333;
        margin-bottom:3pxl
        font-size:13px;
        font-weight:700;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .info-carrerTag{
        margin-right:4px;
        display:flex;
        white-space:nowrap;
    }


`
const CarrerTag=styled.div`
    margin-right:4px;
    color:${props=>props.color};
    display:flex;
    align-items:center;
    padding:0 4px;
    height:19px;
    background:#f6f6f6;
    border-radius:4px;
    font-weight:700;
    font-size:10px;
    line-height:12px;
`
const ItemBody=styled.div`
    width:730px;
    padding-left:35px;
    h3{
        font-size:19px;
        font-weight:700;
        color:#333;
        margin-bottom:5px;
        line-height:23px;
        width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .item-content{
        margin-bottom:13px;
        min-height:40px;
        font-size:14px;
        color:#666;
        line-height:1.43;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: break-spaces;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .item-tagList{
        margin-bottom:21px;
        display:flex;
    }
    .stateBtn{
        display:flex;
    }
`
const TagList=(props)=>{
    console.log(props.tag);
    return(
        <TagListBtn>
            {props.tag}
        </TagListBtn>
    )
}

const TagListBtn=styled.button`
    padding:0 8px;
    display:flex;
    align-items:center;
    background:#fff;
    border:1px solid #e1e2e3;
    border-radius:100px;
    font-size:12px;
    font-weight:400;
    color:#888;
    height:26px;
    margin-left:10px;
    &:first-of-type{
        margin-left:0;
    }
`

const LikeBtn=(props)=>{
    return(
        <BtnWrapper>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#666">
                <path d="M13.353 2.214c.082.164.15.332.204.502.325 1.032.13 2.08-.396 3.092l-.105.191L16.253 6a.75.75 0 0 1 .743.648l.007.102v5.75a.75.75 0 0 1-.106.385l-.058.084-3.004 3.75a.75.75 0 0 1-.472.273L13.25 17H9.22a.75.75 0 0 1-.101-1.493l.102-.007h3.668l2.614-3.264V7.5h-3.91a.75.75 0 0 1-.604-1.195l.066-.077c.137-.14.36-.415.584-.778.5-.808.702-1.6.487-2.283a1.858 1.858 0 0 0-.113-.278c-.278-.551-1.075-.442-1.075-.056a3.17 3.17 0 0 1-.777 2.125c-.293.338-.59.555-.774.647l-.472.292c-.89.568-1.459 1.04-1.762 1.409l-.097.128-.058.095v.062l-.004.016-.006.093a.75.75 0 0 1-.641.641l-.102.007-.102-.007a.75.75 0 0 1-.648-.743V7.5H2.496v8h2.999l-.001-4.535.007-.102a.75.75 0 0 1 1.493.102v5.286l-.007.102a.75.75 0 0 1-.743.648H1.747l-.102-.007a.75.75 0 0 1-.648-.743v-9.5l.007-.102A.75.75 0 0 1 1.747 6h4.498l.066.005c.387-.38.92-.796 1.621-1.256l.472-.3.253-.154c.07-.035.217-.143.37-.32.226-.26.37-.576.403-.969l.008-.173c0-2.082 2.972-2.491 3.915-.619z"></path>
            </svg>
            <span>{props.num}</span>
        </BtnWrapper>
    )
}

const CommentBtn=(props)=>{
    return(
        <BtnWrapper style={{marginLeft:"17px"}}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#666">
                <path d="M9 1c4.377 0 8 3.14 8 7s-3.623 7-8 7c-.317 0-.593-.026-.954-.088l-.395-.074-.205-.043-3.295 2.089a.75.75 0 0 1-.968-.143l-.067-.09a.75.75 0 0 1 .143-.968l.09-.067 3.55-2.25a.75.75 0 0 1 .551-.1l.652.132.301.052c.228.036.408.05.597.05 3.592 0 6.5-2.52 6.5-5.5S12.592 2.5 9 2.5C5.407 2.5 2.5 5.02 2.5 8c0 1.858 1.039 3.573 2.773 4.348a.75.75 0 1 1-.612 1.37C2.37 12.693 1 10.432 1 8c0-3.86 3.622-7 8-7z"></path>
            </svg>
            <span>{props.num}</span>
        </BtnWrapper>
    )
}

const BtnWrapper=styled.div`
    display:flex;
    color:#666;
    align-items:center;
    svg{
        color:#666;
    }
    span{
        color:#666;
        font-size:12px;
        margin-left:4px;
        padding:0.3em 0 0;
        line-height:100%;
        font-weight:700;
    }
`