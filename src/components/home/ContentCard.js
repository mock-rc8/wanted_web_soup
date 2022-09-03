import React from"react";
import styled from "styled-components";

export default function ContentCard(props){
    let profileUrl;

    switch(props.type){
        case "1":
            profileUrl="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90";
            break;
        case "2":
            profileUrl="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90";
            break;
        case "3":
            profileUrl="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90";
            break;
    }


    return(
        <ContentCardItem>
            <a href={props.Link}>
                <div className="card-thumbnail">
                    <img className="thumbnail-img" src={props.src}></img>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-info">{props.introduction}</p>
                <div className="card-profile">
                    <img className="profile-img" src={profileUrl} alt="profileimg"></img>
                    <p className="profile-name">{props.creator}</p>
                </div>
            </a>
        </ContentCardItem>
    )
}

const ContentCardItem=styled.li`
    display:flex;
    flex-direction:column;
    width:calc(25% - 20px);
    margin:0 10px 50px;

    .card-thumbnail{
        position:relative;
        height:auto;
        padding-bottom:70%;
        padding-left:0;
    }

    .thumbnail-img{
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        border-radius:4px;
        object-fit:cover;
        object-position:top;
        border:1px solid rgba(0,0,0,.05);
        outline-offset:-1px;
    }
    .card-title{
        margin:17px 0 8px;
        color:#333;
        line-height:24px;
        font-size:14px;
        font-weight:700;
        text-overflow:ellipsis;
        overflow:hidden;
    }
    .card-info{
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        color:#aaa;
        line-height:21px;
        font-size:13px;
        font-weight:600;
        text-overflow:ellipsis;
        overflow:hidden;
    }
    .card-profile{
        margin-top:12px;
        display:flex;
        align-items:center;
    }
    .profile-img{
        width:30px;
        height:30px;
        border-radius:50%;
        border:1px solid #ececec;
    }
    .profile-name{
        margin-left:10px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-weight:600;
        font-size:13px;
        line-height:19px;
        color:#aaa;
    }
`