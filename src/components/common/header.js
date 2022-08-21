import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function MainHeader(){
    return(
        <NavPageWrapper>
            <div className="mainBar">
                <nav className="mainBar-nav">
                    <MainBarLeft>
                        <div className="nav-logo">
                            <button className="nav_category_btn">
                                <img className="category_img" alt="categoryimg"
                                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75">
                                </img>
                            </button>
                            <Link to='/'>
                                <img alt="iconimg" className="icon" src="https://raw.githubusercontent.com/hanghae99-Wanted-Clone-Coding/Wanted-Client-Application/develop/src/assets/wanted-logo.png"></img>
                            </Link>                        
                        </div>
                    </MainBarLeft>
                    <MainBarCenter>
                        <li className="cartegoryList">
                            <Link to='/' className="link">채용</Link>
                        </li>
                        <li className="cartegoryList">
                            <Link to='/' className="link">이벤트</Link>
                        </li>
                        <li className="cartegoryList">
                            <Link to='/' className="link">직군별 연봉</Link>
                        </li>
                        <li className="cartegoryList">
                            <Link to='/' className="link">이력서</Link>
                        </li>
                        <li className="cartegoryList">
                            <Link to='/' className="link">커뮤니티</Link>
                            <em>
                                <svg width="18" height="11" viewBox="0 0 18 11">
                                    <g fillRule="evenodd">
                                        <text>
                                            <tspan x="0" y="8">New</tspan>
                                        </text>
                                    </g>
                                </svg>
                            </em>
                        </li>
                        <li className="cartegoryList">
                            <Link to='/' className="link">프리랜서</Link>
                        </li>
                        <li className="cartegoryList">
                            <Link to='/' className="link">AI 합격예측</Link>
                            <em>
                                <svg width="18" height="11" viewBox="0 0 18 11">
                                    <g fillRule="evenodd">
                                        <text>
                                            <tspan x="0" y="8">Beta</tspan>
                                        </text>
                                    </g>
                                </svg>
                            </em>
                        </li>
                    </MainBarCenter>
                    <MainBarRight>
                        <ul>
                            <li>
                                <button>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#333" fillRule="evenodd">
                                        <path d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button>
                                    회원가입/로그인
                                </button>
                            </li>
                            <li id="forEmployers">
                                <div className="division"></div>
                                <Link to="/" className="forEmplyers-btn">기업 서비스</Link>
                            </li>
                        </ul>
                    </MainBarRight>
                </nav>
            </div>

        </NavPageWrapper>
    )
}

const NavPageWrapper=styled.div`
    position:fixed;
    width:100%;
    top:0;
    background-color:#fff;
    box-shadow:0 1px 0 0 rgb(0 0 0 /10%);
    z-index:10;

    .mainBar{
        margin:0 auto;
        height:50px;
        position:relative;
        max-width:1060px
    }
    .mainBar-nav{
        display:flex;
        align-items:center;
        justify-content: space-between;
        flex-direction:row;
        flex-wrap:wrap;

    }
`
const MainBarLeft=styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;

    .nav-logo{
        display:flex;
    }

    button{
        margin:0;
        padding:0;
        border:0;
        background:none;
    }
    .nav_category_btn{
        margin-top:3px;
        margin-right: 15px;
    }
    .category_img{
        width:17px;
        height:14px;
        object-fit:contain;
    }
    .icon{
        height:21px;
    }
`
const MainBarCenter=styled.ul`
    text-align:center;
    margin:0;
    list-style:none;

    .cartegoryList{
        display:inline-block;
        position:relative;
    }
    .link{
        position:relative;
        vertical-align:middle;
        font-size:14px;
        font-weight:600;
        padding:15px;
        cursor:pointer;
        text-decoration:none;
        color:#333;
    }
    em{
        position:absolute;
        top:-3px;
        right:-5px;

    }
    g{
        font-size:9px;
        font-weight:500;
        fill:#36f;
    }
`
const MainBarRight=styled.div`
    height:100%;
    padding:10px 0;

    ul{
        height:100%;
        margin:0;
    }
    li{
        position:relative;
        display:inline-block;
        height:100%;
        vertical-align:middle;
    }
    #forEmployers{
        display:inline-flex;
    }
    button{
        position:relative;
        margin-top:5px;
        padding:0 10px;
        height:100%;
        font-size:14px;
        color:#333;
        font-weight:600;
        line-height:1;
        margin:0;
        border:0;
        background:none;
        cursor:pointer;
    }
    .division{
        display:block;
        width:1px;
        height:10px;
        background-color: #e1e2e3;
        margin:auto 10px;
    }
    .forEmplyers-btn{
        text-decoration:none;
        font-size:13px;
        color:#666;
        line-height:30px;
        height:30px;
        border:1px solid #e1e2e3;
        border-radius:15px;
        padding:0 10px;
        margin-left:15px;
        font-weight:400;
        vertical-align:bottom;
    }

`
