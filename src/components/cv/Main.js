import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dummy from "./db/advitemlist.json";
import list from "./db/careerlist.json";

export default function CVMain(){
    return(
        <CVMainWrapper>

            <IntroBanner>
                <div className="intro-content">
                    <h1>jjj</h1>
                    <picture>
                        <img src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_intro_title.png"></img>
                    </picture>
                    
                    <h1 className="intro-title">합격을 부르는 이력서</h1>
                    <h2 className="intro-sub">
                        원티드 이력서로 지원 시 일반 이력서보다<br/>서류 합격률이 *2배 높아집니다.
                    </h2>
                    <button className="writeBtn">
                        <span>원티드 이력서 작성하기</span>
                    </button>
                    <p className="subText">
                        *21/01/01 ~ 22/01/01 기간 중 원티드를 통해<br/>
                        지원한 이용자의 평균 서류 합격률 기준
                    </p>
                </div>
            </IntroBanner>
            
            <IntroAdv>
                <div className="intro-content">
                    <h1 className="info-title">원티드 이력서는 이런 점이 좋아요!</h1>
                    <ul>
                        {
                            dummy.map((list)=>{
                                return(                                
                                    <AdvList 
                                    bgColor={list.bgColor} title={list.title} marginTop={list.marginTop}
                                    sub1={list.sub1} sub2={list.sub2} src={list.src}></AdvList>
                                )
                            })
                        }
                    </ul>
                </div>
            </IntroAdv>

            <IntroExample>
                <div className="info-content">
                    <h1>쓰는 사람도 보는 사람도 편하게</h1>
                    <a href="https://static.wanted.co.kr/images/userweb/resume-sample/sample_resume_ko.pdf">
                        <p>이력서 샘플 다운로드</p>
                    </a>
                </div>

                <div className="example-list">
                    <ExampleContent></ExampleContent>
                </div>

                <div className="gradient"></div>
            </IntroExample>

            <IntroCard>
                <div className="card-content">
                    <h2>이력서 작성, 시작부터 막힌다면</h2>
                    <ul className="cardLists">
                        <li className="card-list">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fresume_intro%2Fresume_abroad_1.png&w=520&q=100"></img>
                            <Link to=''>
                                <div className="card-infoBox">
                                    <h4>이력서를 부탁해 by 원티드</h4>
                                    <p>데이터에 기반한 이력서 작성 비법 Tip</p>
                                </div>
                            </Link>
                        </li>
                        <li className="card-list">
                            <img src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_abroad_02.png"></img>
                            <Link to=''>
                                <div className="card-infoBox">
                                    <h4>포트폴리오를 부탁해</h4>
                                    <p>통과되는 포트폴리오 제작법, 구조부터 포멧까지</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <Link to=''>
                        더 많은 콘텐츠 보러 가기 
                        <span className="icon">
                            <svg viewBox="0 0 18 18">
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                        </span>
                    </Link>
                </div>
            </IntroCard>

            <IntroAI>
                <div className="introAi-wrapper">
                    <div className="introAi-content">
                        <div className="title">
                            이력서 완성하면
                            <p>
                                <img width="198" height="33"
                                src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png"></img>
                                가 포지션 추천까지
                            </p>
                        </div>
                        <p className="sub">
                            이력서를 분석하여 딱 맞는 포지션을 찾아드려요.
                            <br/>
                            원티드AI가 추천한 포지션은 서류합격률이  일반 지원 대비 4배 높습니다.
                        </p>
                        <button className="startBtn">
                            <span>지금 시작하기</span>
                        </button>
                    </div>
                        
                    <img width="516" height="352" className="mainImg"
                    src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png"></img>
                </div>
            </IntroAI>

        </CVMainWrapper>
    )
}

const CVMainWrapper=styled.div`
    width:100%;
    overflow-x:hidden;
    background-color:#fff;
    color:#333;
`
const IntroBanner=styled.section`

    height:440px;
    position:relative;
    z-index:0;
    background-color:#f1f7fe;

    .intro-content{
        text-align:left;
        padding-top:100px!important;
        padding-bottom:0!important;
        max-width:1060px;
        margin:0 auto;
        word-break:keep-all;
        word-wrap:break-word;
    }
    picture>img{
        display:flex;
        justify-self:center;
        max-width:1440px;
        height:100%;
        position:absolute;
        top:0;
        right:0;
        left:0;
        margin:0 auto;
    }

    .intro-title{
        position:relative;
        font-weight:700;
        font-size:48px;
        line-height:62px;
        margin:0;
        letter-spacing: -.027em;
        color:#333;
    }
    .intro-sub{
        position:relative;
        font-weight:400;
        font-size:20px;
        line-height:32px;
        margin-top:15px;
        color:#333;
    }

    .writeBtn{
        height:50px;
        padding:13px 32px;
        margin-top:50px;
        font-weight:600;
        font-size:16px;
        color:#fff;
        background-color:#36f;
        border:none;
        position:relative;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-content:middle;
        min-width:64px;
        border-radius:25px;
    }
    .writeBtn>span{
        width:100%;
    }

    .subText{
        position:relative;
        margin-top:18px;
        text-align:right;
        font-weight:400;
        line-height:16px;
        color:#939393;
        letter-spacing:.031em;
        font-size:12px;
}
`
const IntroAdv=styled.section`
    padding-top:100px;
    width:100%;
    padding-bottom:100px;
    display:block;
    .intro-content{
        text-align:center;
        max-width:1060px;
        margin:0 auto;
        word-break:keep-all;
        word-wrap:break-word;
    }
    h1{
        font-weight:700;
        font-size:36px;
        margin:0;
    }
    ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        margin-top:50px;
    }
`
const IntroCard=styled.section`
    padding-top:50px;
    padding-bottom:100px;
    background-color:#f8f8f8;
    .card-content{
        text-align:center;
        max-width:1060px;
        margin:0 auto;
    }
    .card-content>h2{
        font-weight:700;
        font-size:26px;
        margin:20px 0 0;
        line-height:1.5;
    }
    .cardLists{
        display:flex;
        justify-content:space-between;
        margin-top:50px;
    }
    .card-list{
        width:520px;
        height:330px;
        overflow:hidden;
        border-radius:10px;
    }
    .card-list>img{
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }
    .card-content>a{
        display:flex;
        justify-content:center;
        align-items:center;
        grid-gap:6px;
        gap:6px;
        width:233px;
        height:50px;
        margin:50px auto 0;
        border-radius:50px;
        color:#000;
        border:1px solid #ececec;
        background-color:transparent;
        font-weight:600;
        font-size:16px;
        line-height:150%;
    }
    .card-infoBox{
        width:100%;
        height:100px;
        padding:18px 10px 23px 20px;
        text-align:left;
        background-color:#fff;
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }
    .card-infoBox>h4{
        font-weight:600;
        font-size:20px;
        line-height:25px
    }
    .card-infoBox>p{
        margin-top:8px;
        font-weight:400;
        font-size:16px;
        line-height:24px;
        color:#939393;
    }
    .icon{
        width:8px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .icon>svg{
        width:1em;
        height:1em;
        display:inline-block;
    }
`
const IntroAI=styled.section`
    padding:0;
    height:452px;
    .introAi-wrapper{
        position:relative;
        height:100%;
        display:flex;
        align-items:center;
        text-align:left;
        max-width:1060px;
        margin:0 auto;
    }
    .title{
        font-weight:700;
        font-size:36px;
        line-height:130%;
    }
    .title>p{
        height:47px;
        display:flex;
        align-items:baseline;
        grid-gap:5px;
        gap:5px;
    }
    .sub{
        font-weight:400;
        font-size:16px;
        line-height:160%;
        margin-top:20px;
    }
    .mainImg{
        position:absolute;
        bottom:0;
        left:575px
    }
    .startBtn{
        height:54px;
        margin-top:30px;
        font-weight:600;
        font-size:20px;
        line-height:150%;
        color:#fff;
        background-color:#36f;
        border:none;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        padding:0 27px;
        border-radius:25px;

    }
    .startBtn>span{
        width:100%;
    }
`

const AdvList=(props)=>{
    const bgColor=props.bgColor;
    const top=props.marginTop;

    return(
        <AdvListWrapper bgColor={bgColor} top={top}>
            <div className="info">
                <h2>{props.title}</h2>
                <h3>
                    {props.sub1}
                    <br/>
                    {props.sub2}
                </h3>
            </div>
            <img src={props.src}></img>
        </AdvListWrapper>
    )
}
const AdvListWrapper=styled.li`
    margin-top:${props=>props.top};
    display:flex;
    flex-wrap:wrap;
    align-content:space-between;
    width:520px;
    height:480px;
    padding-top:50px;
    border-radius:10px;
    text-align:left;
    background-color:${props=>props.bgColor};
    .info{
        padding-left:50px;
    }
    h2{
        margin-top:0;
        font-weight:600;
        font-size:24px;
        line-height:135.7%;
        margin:20px 0 0;
    }
    h3{
        font-weight:400;
        font-size:15px;
        line-height:150%;
        margin-top:15px;
    }
    img{
        width:520px;
    }
`


const IntroExample=styled.section`
    padding-top:100px;
    position:relative;
    background-color:#f2f4f7;
    display:block;

    .info-content{
        text-align:center;
        max-width:1060px;
        margin:0 auto;
    }
    h1{
        font-weight:600;
        font-size:38px;
        margin:0;
    }
    .info-content>a{
        color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        width:197px;
        height:50px;
        margin:43px auto 0;
        background-color:#36f;
        border-radius:50px;
    }
    .info-content>p{
        color:#fff;
        font-weight:600;
        font-size:16px;
        line-height:24px;
    }

    .example-list{
        margin-top:50px;
    }
    .gradient{
        position:absolute;
        bottom:0;
        width:100%;
        height:150px;
        background: linear-gradient(180deg,hsla(0,0%,97%,0),#f8f8f8);

    }

`

const ExampleContent=()=>{
    return(
        <ExampleWrapper>
            <div className="first-content">
                <h1>김티드</h1>
                <div className="info-container">
                    이메일: wanted@wantedlab.com
                    <br/>
                    연락처: 000-0000-0000
                    <SideBanner>
                        성별, 사진 등 불필요한 개인정보 최소화
                        <div className="side"></div>
                    </SideBanner>
                </div>
                <p>
                    Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자 김티드입니다.
                    <br/>
                    새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이 많습니다.
                </p>
                <div className="info-container">
                    <ul>
                        <li>웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                        <li>다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도</li>
                        <li>제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수</li>
                        <li>프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
                    </ul>
                    <SideBanner>
                        깔끔한 UI와 가독성 높은 디자인
                        <div className="side"></div>
                    </SideBanner>
                </div>
            </div>

            <DividerBar></DividerBar>

            <SecondContent>
                <div className="career-title">
                    <h5>경력</h5>
                </div>
                <div className="career-content">
                    <div className="content-company">
                        <div className="company-info">
                            <h5>원티드랩</h5>
                            <p>프론트엔드팀 / 팀원</p>
                        </div>
                        <p className="term">2020.07 - 현재 재직중</p>
                    </div>

                    <ul>
                        <ListItemFirst>
                            <div className="dot">.</div>
                            <div className="info-wrapper">
                                <h6>
                                    <span>웹사이트 SEO</span>
                                    2022.05 - 2022.06
                                </h6>
                                <p>
                                    도메인 정책 수립 및 URL 표준화(canonical) 및 페이지 별 메타태그/키워드 검증
                                    <br/>
                                    - 성과: 오가닉 트래픽 30% 증가
                                    <br/>
                                    - 사용 기술: Next.js, Google Search Console
                                    <br/>
                                    - 링크: https://www.wanted.co.kr
                                </p>
                            </div>

                            <SideBanner>
                                업무 강점과 경력을 강조하는 템플릿
                                <div className="side"></div>
                            </SideBanner>

                        </ListItemFirst>
                        {
                            list.map((item)=>{
                                return( 
                                    <CareerList title={item.title} date={item.date}
                                    p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4}
                                    index={item.index}
                                    ></CareerList>
                                )
                            })
                        }
                    </ul>

                    <DividerBar style={{backgroundColor:"#ccc"}}></DividerBar>
                    
                    <div className="fade">
                        <div className="fade-box">
                            <h5>한국빅컴퍼니</h5>
                            <p>디지털기술개발팀 / 사원</p>
                        </div>
                        <p className="fade-date">2018.03 - 2020.06</p>
                    </div>
                </div>
            </SecondContent>

        </ExampleWrapper>
    )
}
const ExampleWrapper=styled.div`
    max-width:1060px;
    margin:0 auto;
    padding:90px 90px 20px;
    background-color:#fff;

    .first-content{
        line-height:150%;
        font-weight:400;
        font-size:15px;
    }
    h1{
        font-weight:700;
        font-size:28px;
        margin-top:20px;
    }
    .info-container{
        color:#08ba9c;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top:20px;
    }
    .first-content>p{
        color:#333;
        margin-top:20px;
    }
    .info-container>ul{
        margin:0;
        list-style-type:disc;
        padding-left:25px;
    }
    li{
        margin-top:15px;
        &:first-of-type{
            margin-top:0
        }
    }

    
}
`
const SecondContent=styled.div`
    .second-content{
        display:flex;
        position:relative;
    }
    .career-title{
        width:78px;
    }
    .career-title>h5{
        font-weight:400;
        font-size:16px;
    }

    .career-content{
        width:100%;
    }
    .content-company{
        display:flex;
        justify-content:space-between;
        font-weight:600;
        font-size:16px;
    }
    .company-info>h5{
        font-weight:600;
        font-size:16px;
        line-height:150%;
    }
    .company-info>p{
        color:#333;
        margin-top:5px;
        font-weight:400;
        font-size:14px;
        line-height:142.9%;
    }
    .term{
        color:#333;
        font-weight:600;
        font-size:16px;
        line-height:150%;
    }
    .career-content>ul{
        margin-top:20px;
    }
    .fade{
        display:flex;
        justify-content:space-between;
    }
    .fade-box>h5{
        font-weight:600;
        font-size:16px;
        line-height:150%;
    }
    .fade-box>p{
        margin-top:5px;
        font-weight:400;
        font-size:14px;
        line-height:142.9%;
    }
    .fade-date{
        font-weight:600;
        font-size:16px;
        line-height:150%;
    }
`
const SideBanner=styled.div`

    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width:242px;
    height:36.55px;
    background-color:#08ba9c;
    border-radius:30px;
    font-weight:600;
    font-size:12px;
    color:#fff;
    line-height:18px;
    transition: opacity 1s linear,transform 1s linear .2s,-webkit-transform 1s linear .2s;
    transform: translate3d(0,-25%,0);
    .side{
        display:block;
        position:absolute;
        border-color:#08ba9c transparent;
        border-style:solid;
        border-width:10px 6px 0;
        width:0;
        bottom:-2px;
        left:-4px;
        transform: rotate(45deg);
    }
`
const DividerBar=styled.div`
    margin:50px 0;
    background-color:#333;
    height:1px;
    border:none;
    flex-shrink:0;
`
const CareerList=(props)=>{
    return(
        <ListWrapper>
            <div className="dot">.</div>
            <div className="info-wrapper">
                <h6>
                    <span>{props.title}</span>
                    {props.date}
                </h6>
                <p>
                    {props.p1}
                    <br/>
                    {props.p2}
                    <br/>
                    {props.p3}
                    <br/>
                    {props.p4}
                </p>
            </div>
        </ListWrapper>
    )
}
const ListWrapper=styled.li`

    margin-top:20px;
    position:relative;
    padding-left:19px;
    .dot{
        position:absolute;
        top:-18.5px;
        left:0;
        font-size:60px;
        line-height:14px;
    }
    h6{
        margin-bottom:10px;
        font-size:14px;
    }
    span{
        font-weight:600;
        font-size:13px;
        margin-right:10px;
    }
    p{
        font-size:13px;
        color:#333;
    }
`
const ListItemFirst=styled.li`
    margin-top:20px;
    position:relative;
    padding-left:19px;
    color:#08ba9c!important;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .dot{
        position:absolute;
        top:-18.5px;
        left:0;
        font-size:60px;
        line-height:14px;
    }
    h6{
        margin-bottom:10px;
        font-size:14px;
    }
    span{
        font-weight:600;
        font-size:13px;
        margin-right:10px;
    }
    p{
        font-size:13px;
        color:#08ba9c!important;
    }
`