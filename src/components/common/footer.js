import React from"react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <FooterWrapper>
            <div className="footer-row">
                <div className="nav-links">
                    <div className="navLinks-logo">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></img>
                    </div>
                    <div className="navLinks-links">
                        <Link to='/'>기업소개</Link>
                        <Link to='/'>이용약관</Link>
                        <Link to='/'>개인정보 처리방침</Link>
                        <Link to='/'>고객센터</Link>
                    </div>
                </div>

                <div className="socialLinks">
                    <a href="https://www.instagram.com/wantedjobs.kr/">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"></img>
                    </a>
                    <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"></img>
                    </a>
                    <a href="https://www.facebook.com/wantedkr">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"></img>
                    </a>
                    <a href="https://blog.naver.com/wantedlab">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"></img>
                    </a>
                    <a href="https://pf.kakao.com/_XqCIxl">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100"></img>
                    </a>
                    <a href="https://post.naver.com/my.nhn?memberNo=18284175">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"></img>
                    </a>
                    <a href="https://apps.apple.com/kr/app/id1074569961">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"></img>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"></img>
                    </a>
                </div>
            </div>

            <div className="footer-row border">
                <p className="footer-text">
                (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147<br/>
                유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118<br/>
                © Wantedlab, Inc.
                </p>
                <div className="footer-langSelect">
                    <img className="lang-img" src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"></img>
                    <select>
                        <option value="Ko" className="op">한국 (한국어)</option>
                        <option value="Jp">日本 (日本語)</option>
                        <option value="Ww">Worldwide (English)</option>
                        <option value="Sg">Singapore (English)</option>
                    </select>
                    <i className="arrow-btn">
                        <svg viewBox="0 0 19 19">
                            <path d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"></path>
                        </svg>
                    </i>
                </div>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper=styled.footer`
    padding:18px 0 65px;
    background-color:#fff;
    border-top:1px solid #ececec;
    .footer-row{
        width:90%;
        max-width:1060px;
        margin:0 auto 18px;
        display:flex;
    }
    .border{
        border-top:1px solid #ececec;
        padding-top:25px;
    }
    .nav-links{
        flex-grow:1;
        display:flex;
        align-items:center;

    }
    .navLinks-logo{
        margin-right:50px;
    }
    .navLinks-links{
        display:flex;
    }
    .navLinks-links>a{
        font-size:15px;
        color:#3a3a3a;
        font-weight:500;
        line-height:2.6;
        margin-right:45px;
        white-space:nowrap;
    }

    .socialLinks{
        display:flex;
        flex-wrap:nowrap;
        line-height:2.6;
    }
    .socialLinks>a{
        position:relative;
        display:block;
        float:left;
        height:20px;
    }
    .socialLinks>a>img{
        margin-left:14px;
    }

    .footer-text{
        font-size:12px;
        float:left;
        font-weight:500;
        line-height:1.666666667em;
        color:#767676;
        width:calc(100%-290px);
        margin-right:40px;
    }
    .footer-langSelect{
        position:relative;
        width:250px;
        height:36px;
        float:left;
    }
    .lang-img{
        position:absolute;
        left:15px;
        top:55%;
        transform:translateY(-50%);
        width:24px;
        height:17px;
        z-index:1;
    }
    select{
        width:100%;
        height:40px;
        background:#f2f4f7;
        border-radius:5px;
        border:none;
        font-size:14px;
        line-height:2.1;
        color:#717171;
        padding:0 45px;
        font-weight:500;
        appearance:none;
    }
    .arrow-btn{
        position:absolute;
        width:10px;
        height:10px;
        font-size:10px;
        line-height:1.6;
        right:15px;
        top:50%;
        transform:translateY(-50%);
        color:#171717;
    }
    option{
        font-size:14px;
        color:#717171;
        line-height:2.1;
        min-height:1.2em;
        padding:0 2px 1px;
    }
`