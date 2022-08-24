import React from "react";
import styled from 'styled-components';
import {useRecoilState} from "recoil";
import { popupRecoilState } from "../../atoms/Popup";
import SocialBtn from "./SocialBtn";

export default function LoginModal(){
    const [popup,setPopup]=useRecoilState(popupRecoilState);

    const handlePopup=()=>{
        setPopup(!popup);
    }

    return(
        <ModalWrapper>
            <div className="login-content">

                <ContentHeader>
                    <span className="icon-logo">
                        <img alt="iconimg" className="icon" 
                        src="https://raw.githubusercontent.com/hanghae99-Wanted-Clone-Coding/Wanted-Client-Application/develop/src/assets/wanted-logo.png"></img>
                    </span>
                    <button className="icon-close" onClick={handlePopup}>
                        <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                            <path fill="currentColor" d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
                        </svg>
                    </button>
                </ContentHeader>

                <ContentBody>
                    <div className="text-container">
                        <h1>직장인을 위한<br/>커리어 플랫폼, 원티드!</h1>
                        <h2>커리어 성장과 행복을 위한 여정<br/>지금 원티드에서 시작하세요.</h2>
                    </div>
                    <div className="input-container">
                        <input className="input-email"></input>
                        <div className="input-wrapper">
                            <label for="email">이메일</label>
                            <div className="input-body">
                                <input type="email" placeholder="이메일을 입력해 주세요."></input>
                            </div>
                        </div>
                        <div className="bottom-wrapper">
                            <button>
                                <svg viewBox="0 0 24 24" width="24" height="24" className="email-icon">
                                    <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2">
                                        <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                                        <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                                    </g>
                                </svg>
                                이메일로 계속하기 
                            </button>
                            <div className="divider">or</div>
                            <div className="continue">다음 계정으로 계속하기</div>
                            <div className="socialLogin-wrapper">
                                <SocialBtn 
                                type="Kakao"
                                d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                                ></SocialBtn>
                                <SocialBtn 
                                type="Facebook"
                                d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
                                ></SocialBtn>
                                <SocialBtn 
                                type="Google"></SocialBtn>
                                <SocialBtn 
                                type="Apple"
                                d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"></SocialBtn>
                            </div>
                        </div>
                        <p>
                            걱정마세요! 여려분의 지원 활동은 SNS에 노출되지 않습니다.<br/>
                            회원가입 시&nbsp;
                            <a href="https://help.wanted.co.kr/hc/ko/articles/360035484292" target="_blank">개인정보 처리방침</a>
                            과&nbsp;
                            <a href="https://help.wanted.co.kr/hc/ko/articles/360035844551" target="_blank">이용약관</a>
                            을 확인하였으며, 동의합니다.
                        </p>
                    </div>
                </ContentBody>
            </div>
            
            <div className="modal-background"></div>

        </ModalWrapper>
    )
}

const ModalWrapper=styled.div`
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:fixed;
    overflow:hidden;
    z-index:1000;

    .login-content{
        width:400px;
        overflow-y:auto;
        top:50%;
        left:50%;
        max-width:500px;
        max-height: calc(100vh - 150px);
        transform:translate(-50%,-50%);
        border-radius:5px;
        background-color:#fff;
        z-index:5;
        position:absolute;
        overflow:hidden;
    }

    .modal-background{
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:4;
        background-color:rgba(0,0,0,.5);
    }
`
const ContentHeader=styled.div` 
    border-bottom:0;
    height:22px;
    padding:16px 20px;
    position:relative;
    color:#333;
    text-align:center;
    font-size:16px;
    font-weight:600;
    .icon-logo{
        vertical-align:middle;
    }
    .icon-logo>img{
        width:70px;
    }
    .icon-close{
        position:absolute;
        top:50%;
        right:0;
        padding:15px;
        line-height:0;
        transform:translateY(-50%);
    }
`
const ContentBody=styled.div`
    background-color:#fff;
    padding:20px;

    .text-container{
        text-align:center;
        margin-top:24px;
        margin-bottom:40px;
    }
    .text-container>h1{
        line-height:1.54;
        font-size:26px;
        font-weight:600;
        color:#333
    }
    h2{
        margin-top:16px;
        line-height:1.5;
        font-size:16px;
        font-weight:400;
        color:#666;
    }


    .input-container{
        position:relative;
        overflow:hidden;
        z-index:1;
    }
    .input-email{
        appearance:none;
        position:absolute;
        z-index:-1;
        top:-10px;
        left:0;
        padding:0;
        height:0;
        border:1px solid transparent;
    }
    .input-wrapper{
        padding-bottom:14px;
        position:relative;
        color:#767676;
    }
    label{
        font-size:14px;
        font-weight:400;
    }
    .input-body{
        margin-top:11px;
    }
    .input-body>input{
        width:328px;
        height:50px;
        padding-right:15px;
        padding-left:15px;
        border-radius:5px;
        border:1px solid #e1e2e3;
        background-color:#fff;
        font-size:15px;
        color:#333;
        
    }

    .bottom-wrapper>button{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:54px;
        border:0;
        border-radius:27px;
        background-color:#36f;
        font-size:16px;
        font-seight:600;
        color:#fff;
    }
    .email-icon{
        margin-right:10px;
    }
    .divider{
        color:#969696;
        font-size:14px;
        font-weight:500;
        line-height:1;
        text-align:center;
        margin:13px auto;
        white-space:pre;
        display:block;
    }
    .continue{
        text-align:center;
        color:#767676;
        margin-bottom:17px;
        font-size:14px;
    }
    .socialLogin-wrapper{
        width:100%;
        height:84px;
        margin:auto;
    }

    p{
        margin-top:26px;
        text-align:center;
        font-size:11px;
        line-height:18px;
        color:#999;
    }
    p>a{
        collor:#336ff;
        text-decoration:underline;
    }

`