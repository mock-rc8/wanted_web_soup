import React from "react";
import styled from "styled-components";

export default function CommunityItem(props){
    return(
        <PostItemList bgColor={props.bgColor}>
            <div>
                <div className="item-category">{props.category}</div>
                <h3 className="item-title">{props.title}</h3>
                <div className="item-author">
                    <div className="author-container">
                        <div className="author-img">
                            <div className="img-box">
                                <img src={props.src}></img>
                            </div>
                        </div>
                        <span className="author-username">{props.author}</span>
                    </div>
                </div>
            </div>
        </PostItemList>
    )
}

const PostItemList=styled.a`
    margin-right:15px;
    background-color:${props=>props.bgColor};
    flex:0 0 236px;
    padding:15px 20px 29px;
    border-radius:10px;

    .item-category{
        overflow:hidden;
        font-size:14px;
        font-weight:700;
        color:#939393;
        margin-bottom:8px;
        text-overflow:ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
    }
    h3{
        color:#000;
        font-size:14px;
        font-weight:700;
        line-heiht:1.38;
        margin-bottom:21px;
        min-height:44px;
        text-overflow:ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
    }

    .item-author{
        max-width:192px;
        display:flex;
        align-items:center;
        width:100%;
    }
    .author-container{
        display:flex;
        align-items:center;
    }
    .author-img{
        position:relative;
        margin-right:7px
    }
    .img-box{
        width:28px;
        height:28px;
        border:1px solid #ececec;
        border-radius:50%;
        overflow: hidden;
        background-color:#d8d8d8;
        background-size:cover;
        background-image: url(https://static.wanted.co.kr/images/profile_default.png);
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    .author-username{
        max-width:165px;
        color:#000;
        font-size:13px;
        font-weight:700;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`