import React from "react";
import styled from "styled-components";
import CommunityList from "./CommunityList";

export default function CommunityMain(){
    return(
        <CommunityWrapper>
            <aside className="community-aside">
                <div className="aside-body">

                    <div className="profile-wrapper">
                        <h2>MY 커뮤니티</h2>
                        <button>
                            <div className="user-img">
                                <img src="https://static.wanted.co.kr/images/profile_default.png"></img>
                            </div>
                            <div className="user-name">
                                <span>로그인 해주세요</span>
                            </div>
                            <span className="arrowBtn">
                                <svg width="18" height="18">
                                    <path d="M5.21967 2.21967C5.48594 1.9534 5.9026 1.9292 6.19621 2.14705L6.28033 2.21967L12.5303 8.46967C12.7966 8.73594 12.8208 9.1526 12.6029 9.44621L12.5303 9.53033L6.28033 15.7803C5.98744 16.0732 5.51256 16.0732 5.21967 15.7803C4.9534 15.5141 4.9292 15.0974 5.14705 14.8038L5.21967 14.7197L10.939 9L5.21967 3.28033C4.9534 3.01406 4.9292 2.5974 5.14705 2.30379L5.21967 2.21967Z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>

                    <button className="interestBanner">
                        <div className="banner-text">
                            요즘 내 관심사는?<br/>
                            선택하고 맞춤 콘텐츠 받기!
                        </div>
                    </button>

                </div>
            </aside>

            <CommunityList></CommunityList>
            
        </CommunityWrapper>
    )
}

const CommunityWrapper=styled.div`
    width:1060px;
    display:flex;
    margin:0 auto;
    position:relative;

    .community-aside{
        display:flex;
        flex: 0 0 258px;
        padding:0;
        margin:60px 20px 0 0;
    }
    .aside-body{
        position:fixed;
        top:110px;
        display:grid;
        grid-row-gap:14px;
        row-gap:14px;
    }
    .profile-wrapper{
        width:258px;
        height:123px;
        padding:24px;
        background-color:#fff;
        border:1px solid #e1e2e3;
        border-radius:5px;
    }
    .profile-wrapper>h2{
        margin-bottom:18px;
        font-size:14px;
        font-weight:400;
        color:#666;
    }
    .profile-wrapper>button{
        position:relative;
        display:flex;
        width:100%;
        height:37px;
        cursor:pointer;
    }
    .user-img{
        width:37px;
        height:37px;
        border:1px solid #ececec;
        border-radius:50%;
        background-color:#d8d8d8;
        background-image: url(https://static.wanted.co.kr/images/profile_default.png);
        background-size:cover;
    }
    .user-img>img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    .user-name{
        display:flex;
        align-items:center;
        width:134px;
        height:100%;
        margin-left:11px;
        color:#666;
    }
    .user-name>span{
        text-align:left;
        font-size:16px;
        line-height:22px;
        color:#000;
        width:100%;
        text-overflow:ellopsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .arrowBtn{
        position:absolute;
        top:8.5px;
        right:0;
        display:inline-flex;
    }


    .interestBanner{
        padding:0 20px;
        background: no-repeat right top 1px/98px url(https://static.wanted.co.kr/images/community/interest_tag_banner.png),linear-gradient(270deg,#01a9fe .24%,#2f5fef);
        height:88px;
        width:100%;
        border-radius:6px;
        display:flex;
        text-align:left;
        justify-self:center;
        align-items:center;
        position:relative;
    }
    .banner-text{
        font-weight:700;
        font-size:13.8px;
        color:#f0f0f0;
        max-width:180px;
    }



    .community-main{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:folumn;
    }
`