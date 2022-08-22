import React from"react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ContentCard(){
    return(
        <ContentCardItem>
            <Link to="/">
                <div className="card-thumbnail">
                    <img className="thumbnail-img" src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F9NTm%2Fimage%2FyiReME33-YnD4fzmIEKXcbC-roI.png&w=500&q=75"></img>
                </div>
                <p className="card-title">신임리더의 실패가 흔한 이유</p>
                <p className="card-info">
                "있으나&nbsp;마나한&nbsp;무능한&nbsp;팀장때문에&nbsp;내가&nbsp;실질적인&nbsp;팀장&nbsp;역할을&nbsp;해왔다" 하는&nbsp;이들을&nbsp;흔하게&nbsp;본다. 핵심인재라&nbsp;육성되고, 
                공공연히 차기 리더로&nbsp;인식되거나 가장&nbsp;전문가라&nbsp;하는&nbsp;이들이&nbsp;주로&nbsp;해당된다. 
                막말로 "내가 발로 해도 저 인간보단 잘하겠다"하던 이들도&nbsp;팀장&nbsp;첫해엔&nbsp;온갖&nbsp;멘붕과&nbsp;시행착오를&nbsp;겪는다. 
                바라던&nbsp;리더&nbsp;자리였건만&nbsp;왜&nbsp;이리&nbsp;회의는&nbsp;많고, 왜&nbsp;이리&nbsp;이슈는
                </p>
                <div className="card-profile">
                    <img className="profile-img" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90" alt="profileimg"></img>
                    <p className="profile-name">ssoo</p>
                </div>
            </Link>
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
        font-size:16px;
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