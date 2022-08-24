import React from"react";
import styled from "styled-components";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderList from "./SliderList";
import ContentCard from "./ContentCard";
import { Link } from "react-router-dom";
import SectionDivider from "../common/divider";
import SectionDiv from "./SectionDiv";
import BannerBtn from "../common/bannerBtn";
import HireBannerItem from "./HireBannerItem";
import Footer from "../common/footer";


export default function HomeMain(){
    var settings={
        className:"center",
        centerPadding:"51px",
        centerMode:true,
        dots:false,
        infinite:true,
        slidesToShow:1.7,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnHover:true,
        prevArrow:(
            <Btn>
                <span style={{
                    width:"100%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <svg viewBox="0 0 18 18" style={{
                        width:"1em",
                        height:"1em",
                        display:"inline-block",
                        fill:"#333",
                        flexShrink:"0"
                    }}>
                        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                    </svg>
                </span>
            </Btn>

        ),
        nextArrow:(
            <Btn>
                <span style={{
                    width:"100%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <svg viewBox="0 0 18 18" style={{
                        width:"1em",
                        height:"1em",
                        display:"inline-block",
                        fill:"#333",
                        flexShrink:"0"
                    }}>
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                </span>
            </Btn>
        )
    };

    return(
        <MainPageWrapper>

            <TopBanner>
                <StyledSlider {...settings}>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1789%2F7ffde204.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1780%2Fa307601f.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1790%2Fd4b41ce4.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1776%2F89e208e3.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1786%2F2441afc4.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1789%2F7ffde204.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1780%2Fa307601f.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1790%2Fd4b41ce4.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1776%2F89e208e3.jpg&w=1060&q=100"></SliderList>
                    <SliderList src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1776%2F89e208e3.jpg&w=1060&q=100"></SliderList>
                </StyledSlider>
            </TopBanner>

            <ContentSection>
                <div className="section-wrapper">

                    <SectionTitle>
                        <div className="title-wrapper">
                            <h2>나에게 필요한 커리어 인사이트</h2>
                            <button>
                                <svg width="24" height="24" viewBox="0 0 17 17" fill="none" fillRule="evenodd">
                                    <path stroke="#999" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"></path>
                                    <path stroke="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"></path>
                                    <path stroke="#999" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"></path>
                                </svg>
                            </button>
                        </div>
                    </SectionTitle>

                    <SectionCategory>
                        <div className="category-container">
                            <div className="category-arrow">
                                <button className="arrow-btn">
                                    <span className="btn-icon">
                                        <svg viewBox="0 0 18 18">
                                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="category-scroll">
                                <button className="category-btn">취업/이직</button>
                                <button className="category-btn">인간관계</button>
                                <button className="category-btn">회사생활</button>
                                <button className="category-btn">커리어고민</button>
                                <button className="category-btn">리더십</button>
                                <button className="category-btn">IT/기술</button>
                                <button className="category-btn">조직문화</button>
                                <button className="category-btn">라이프스타일</button>
                                <button className="category-btn">브랜딩</button>
                                <button className="category-btn">개발</button>
                                <button className="category-btn">UX/UI</button>
                                <button className="category-btn">HR</button>
                                <button className="category-btn">콘텐츠 제작</button>
                                <button className="category-btn">마케팅</button>
                                <button className="category-btn">서비스기획</button>
                                <button className="category-btn">노무</button>
                                <button className="category-btn">데이터</button>
                                <button className="category-btn">경영/전략</button>
                                <button className="category-btn">MD</button>
                                <button className="category-btn">디자인</button>
                            </div>
                        </div>
                        <button className="category-more-btn">
                            <svg width="16" height="3" viewBox="0 0 16 3">
                                <path fillRule="evenodd" d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"></path>
                            </svg>
                        </button>
                    </SectionCategory>

                    <SectionContent>
                        <ContentCard></ContentCard>
                        <ContentCard></ContentCard>
                        <ContentCard></ContentCard>
                        <ContentCard></ContentCard>
                        <ContentCard></ContentCard>
                        <ContentCard></ContentCard>
                        <ContentCard></ContentCard>
                        <ContentCard></ContentCard>
                    </SectionContent>

                    <SectionMoreBtn>
                        <button>
                            <span className="more-btn-container">
                                더 많은 콘텐츠 보기
                                <span className="more-btn-icon">
                                    <span className="svg-icon">
                                        <svg viewBox="0 0 19 19">
                                            <path d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </SectionMoreBtn>

                </div>
            </ContentSection>

            <CreaterBanner>
                <div className="banner-container">
                    <div className="banner-content">
                        즐겨보는&nbsp;
                        <span style={{color:"#a9ecf0"}}>크리에이터의</span>&nbsp;
                        글도 추천하고 싶다면?
                    </div>
                    <div className="banner-img">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=121&q=75" alt="크리에이터 추천하기"></img>
                    </div>
                    <Link to='/' className="banner-btn">
                        <span className="banner-btn-title">크리에이터 추천하기</span>
                    </Link>
                </div>
            </CreaterBanner>

            <ContentSection>
                <SectionDiv 
                title={"3분만에 읽는 Wanted+ 아티클"} type={"아티클"}
                ></SectionDiv>
            </ContentSection>

            <SectionDivider></SectionDivider>

            <ContentSection>
                <SectionDiv
                title={"직장인을 위한 Wanted+ VOD"} type={"VOD"}
                ></SectionDiv>
            </ContentSection>

            <BannerBtn></BannerBtn>

            <ContentSection>
                <SectionDiv
                title={"커리어 성장을 위한 맞춤 이벤트"} type={"이벤트"}
                ></SectionDiv>
            </ContentSection>

            <SectionBanner>
                <div className="section-wrapper">
                    <div className="banner-container">
                        <div className="banner banner-info">
                            <div className="info-title">
                                <span>
                                    <svg>
                                        <path d="M0.140625 10.0156L6.11719 29H11.4258L15.5391 16.5547L19.6172 29H24.9609L30.9375 10.0156H25.6289L22.1133 21.8984L18.2461 10.0156H12.7969L8.92969 21.8984L5.41406 10.0156H0.140625ZM46.5469 29H51.6094V10.0156H46.5469V11.9844C45.1758 10.2441 43.1895 9.3125 40.6406 9.3125C35.2969 9.3125 31.4121 13.6016 31.4297 19.5078C31.4121 25.4141 35.2969 29.7031 40.6406 29.7031C43.1895 29.7031 45.1758 28.7891 46.5469 27.0664V29ZM36.4922 19.5078C36.4746 16.2559 38.6016 13.8828 41.5547 13.8828C44.543 13.8828 46.5117 16.0977 46.5469 19.5078C46.5117 22.918 44.543 25.1328 41.5547 25.1328C38.6016 25.1328 36.4746 22.7598 36.4922 19.5078ZM60.0469 29V17.75C60.082 15.7285 61.6289 14.0234 63.7383 14.0234C66.041 14.0234 67.2188 15.5527 67.2188 18.1719V29H72.2812V16.7656C72.2812 12.125 69.6445 9.3125 65.5312 9.3125C63.2285 9.3125 61.3125 10.4023 60.0469 12.1953V10.0156H54.9844V29H60.0469ZM86.6602 10.0156H82.8633V3.72266L77.8008 5.76172V10.0156H74.3906V14.5156H77.8008V22.7422C77.8008 28.1035 81.3867 30.2305 86.6602 29.1758V24.5352C83.7949 25.0801 82.8633 24.1836 82.8633 22.7422V14.5156H86.6602V10.0156ZM89.1211 19.5078C89.1211 25.4141 93.2871 29.7031 99 29.7031C103.078 29.7031 106.418 27.5762 108.035 23.832L103.148 22.6367C102.34 24.2012 100.881 25.1328 99 25.1328C96.4863 25.1328 94.7285 23.4805 94.2891 20.8438H108.809C108.844 20.4043 108.879 19.9648 108.879 19.5078C108.861 13.6016 104.713 9.3125 99 9.3125C93.2871 9.3125 89.1211 13.6016 89.1211 19.5078ZM94.5176 17.3281C94.834 15.377 96.4688 13.8828 99 13.8828C101.496 13.8828 103.113 15.377 103.465 17.3281H94.5176ZM130.746 29V0.804688L125.684 2.84375V11.9844C124.312 10.2441 122.326 9.3125 119.777 9.3125C114.434 9.3125 110.549 13.6016 110.566 19.5078C110.549 25.4141 114.434 29.7031 119.777 29.7031C122.326 29.7031 124.312 28.7891 125.684 27.0664V29H130.746ZM115.629 19.5078C115.611 16.2559 117.738 13.8828 120.691 13.8828C123.68 13.8828 125.648 16.0977 125.684 19.5078C125.648 22.918 123.68 25.1328 120.691 25.1328C117.738 25.1328 115.611 22.7598 115.629 19.5078ZM148.148 16.4141H141.363V20.3164H148.148V27.3828H152.191V20.3164H159.012V16.4141H152.191V9.41797H148.148V16.4141Z"></path></svg>
                                </span>
                                <div className="title-title banner banner-row">구독해야 하는 이유</div>
                            </div>
                            <p>
                                구독자의 서류 합격률이 비구독자보다 1.5배 높아요!
                            </p>
                            <Link to='/' className="banner-button">
                                <span className="btn-label">
                                    <span className="btn-icon">
                                        <span>
                                            <svg viewBox="0 0 18 18" fill="#fff">
                                                <path d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                    첫 구독 0원 신청하기
                                </span>
                            </Link>
                        </div>
                        <div className="banner banner-row">
                            <img height="158" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90"></img>
                        </div>
                    </div>
                </div>
            </SectionBanner>

            <ContentSection>
                <div className="section-wrapper">
                    <HireBannerHeader>
                        <div className="header-title">
                            <div className="title-wrapper">
                                <h2>채용 정보를 찾고 계셨나요?</h2>
                            </div>
                        </div>
                    </HireBannerHeader>

                    <HireBannerContent>
                        <HireBannerItem 
                        title="채용공고"
                        d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"
                        ></HireBannerItem>
                        <HireBannerItem 
                        title="내 프로필"
                        d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"
                        ></HireBannerItem>
                        <HireBannerItem 
                        title="매치업"
                        d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"
                        ></HireBannerItem>
                        <HireBannerItem
                        title="직군별 연봉"
                        d="M10.667 21.667a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2l-13.805.001a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138a3.67 3.67 0 0 1 3.529-2.667zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333zm10.666-11.334A3.67 3.67 0 0 1 24.862 15H28a1 1 0 0 1 0 2h-3.138a3.67 3.67 0 0 1-7.057 0H4a1 1 0 0 1 0-2h13.805a3.67 3.67 0 0 1 3.528-2.667zm0 2a1.668 1.668 0 0 0 0 3.334 1.668 1.668 0 0 0 0-3.334zM10.667 3a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2H14.195a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138A3.67 3.67 0 0 1 10.667 3zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333z"
                        ></HireBannerItem>
                    </HireBannerContent>
                </div>
            </ContentSection>

            <Footer></Footer>

        </MainPageWrapper>
    )
}
//styled-components
const MainPageWrapper=styled.div`
    padding-top:25px;
    background-color:#fff;
`

//TopBanner
const TopBanner=styled.div`
    position:relative;
    overflow:hidden;
    height:304.969px;

`
const StyledSlider=styled(Slider)`
    margin-bottom:0;
    .slick-prev::before,
    .slick-next::before{
        opacity:0;
        display:none;
    }
    .slick-prev{
        left:300px;
    }
    .slick-next{
        right:300px;
    }

    .slick-list{
        padding:0 50px;

    }
    .slick-track{
        width:54090px;

    }
    .slick-slide{
        width:100%;
        padding:0 12px;
        box-sizing:content-box;
    }
    .slick-slide>div{
        position:relative;
        width:1060px;
        margin:0
    }
`
const Btn=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 120px;
    width: 30px;
    height: 60px;
    opacity: .5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
    z-index: 20;
`

//ContentSection
const ContentSection=styled.section`
    position:relative;
    scroll-margin-top:4px;
    padding:60px 0;

    .section-wrapper{
        max-width:1060px;
        width:87.72%;
        margin:0 auto;
    }
`

//ContentSection-career
const SectionTitle=styled.div`
    text-align:center;
    .title-wrapper{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    button{
        padding:0;
        margin-top:6px;
        margin-left:4px;
        border:0;
        background:none;
    }
    h2{
        font-size:22px;
        line-height:1.33;
        font-weight:700;
        color:#333;
        margin-left:4px;
    }

`
const SectionCategory=styled.div`
    margin:30px 0;
    position:relative;
    display:flex;

    .category-container{
        margin-right:20px;
        position:relative;
        display:flex;
        justify-content:space-between;
        overscroll-behavior:contain;
        flex-grow:1;
        overflow-x:auto;
        overflow-y:hidden;
    }

    .category-arrow{
        right:0;
        justify-content:flex-end;
        background:linear-gradient(270deg,#fff 21.8%,hsla(0,0%,100%,0));
        display:flex;
        width:80px;
        position:absolute;
        align-items:center;
        height:100%;
    }
    .arrow-btn{
        width:44px;
        height:44px;
        font-size:22px;
        min-width:36px;
        min-height:36px;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        border:1px solid #e1e2e3;
        border-radius:50%;
        background-color:#fff;
        box-shadow:0 2px 0 rgb(0 0 0 / 5%);
        color:#7676767;

    }
    .btn-icon{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    svg{
        width:1em;
        height:1em;
        display:inline-block;
        flex-shrink:0;
        fill:black;

    }
    .category-scroll{
        scroll-snap-type: x mandatory;
        overflow-x:scroll;
        overflow-y:hidden;
        display:flex;
        align-items:center;
        overscroll-behavior:contain;

    }

    body{
        -ms-overflow-style: none;
        }
        
    ::-webkit-scrollbar {
        display: none;
    }

    .category-scroll{
        -ms-overflow-style: none;
    }
    .category-scroll::-webkit-scrollbar{
        display:none;
    }


    .category-btn{
        background-color:#f2f4f7;
        border:1px solid #f2f4f7;
        color:#333;
        outline:none;
        padding:0 29px;
        height:50px;
        font-size:15px;
        scroll-snap-align:start;
        margin-right:10px;
        border-radius:5px;
        white-space:nowrap;
        scroll-margin-left:400px;
        margin-top:7px;
        margin-left:4px;
        cursor:pointer;
    }

    .category-more-btn{
        min-width:50px;
        min-height:50px;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        border:1px solid #e1e2e3;
        border-radius:5px;
        box-shadow:0 4px 4px rgb(0 0 0 /5%);
        color:#939393;

    }
`
const SectionContent=styled.ul`
    display:flex;
    flex-wrap:wrap;
    margin:0 -10px;

`
const SectionMoreBtn=styled.div`
    display:flex;
    justify-content:center;
    button{
        height:50px;
        font-size:16px;
        background-color:#fff;
        border:1px solid #e1e2e3;
        position:relative;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        padding: 0 27px;
        box-sizing:border-box;
        border-radius:25px;
        font-weight:700;
        cursor:pointer;
        width:345px;
    }
    .more-btn-container{
        width:100%;
    }
    .more-btn-icon{
        margin-top:-2px;
        margin-right:-1px;
        margin-left:2px;
    }
    svg{
        width:1em;
        height:1em;
        display:inline-block;
        fill:#333;
        flex-shrink:0;

    }

`

//CBanners
const CreaterBanner=styled.div`
    display:flex;
    height:110px;
    background-color:#36f;
    .banner-container{
        max-width:1060px;
        width:87.72%;
        margin:0 auto;
        flex-direction:row;
        flex-wrap:nowrap;
        align-items:center;
        justify-content:flex-start;
        display:flex;
    }
    .banner-content{
        font-size:24px;
        color:#fff;
        font-weight:500;
        line-height:35px;
        lett-spacing:-.2px;
    }
    .banner-img{
        flex-grow:1;
    }
    .banner-btn{
        height:40px;
        font-size:15px;
        color:#36f;
        background-color:#fff;
        border:1px solid #36f;
        position:relative;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        padding:0 27px;
        box-sizing:border-box;
        border-radius:25px;
        font-weight:700;
        cursor:pointer;
        width:220px;

    }


`
const SectionBanner=styled.section`
    background-color:#f7f7f7;
    padding:60px 0;
    .section-wrapper{
        width:87.72%;
        max-width:1060px;
        margin:0 auto;
    }
    .banner-container{
        flex-direction:row;
        align-self:auto;
        flex-wrap:nowrap;
        align-items:center;
        justify-content:space-between;
        display:flex;
        width:100%;
        box-sizing:border-box;
    }
    .banner{
        align-items:flex-start;
        align-self:auto;
        flex-wrap:nowrap;
        justify-content:flex-start;
        box-sizing:border-box;
    }
    .banner-info{
        flex-direction:column;
        display:flex;
        width:100%;
    }

    .banner-row{
        flex-direction:row;
    }
    .info-title{
        display:flex;
        width:100%;
    }
    .title-title{
        font-size:30px;
        font-weight:700
    }
    .info-title>span{
        display:flex;

    }
    .info-title>span>svg{
        width:160px;
        height:31px;
        margin-top:4px;
        margin-right:4px;
        flex-shrink:0;
        display:inline-block;
    }
    p{
        color:#333;
        font-size:14px;
        line-height:1.42857143;
    }
    .banner-button{
        width:260px;
        margin-top:25px;
        height:50px;
        font-size:16px;
        color:#fff;
        background-color:#36f;
        border:none;
        position:relative;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        padding:0 27px;
        border-radius:25px;
        font-weight:700;
    }

    .btn-label{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .btn-icon{
        margin-top:3px;
        margin-right:2px;
        margin-left:-1px
    }
    .btn-icon>span{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .btn-icon>span>svg{
        width:1em;
        height:1em;
        display:inline-block;
        flex-shrink:0;
    }
`

const HireBannerHeader=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:30px;
    grid-gap:8px;
    gap:8px;
    justify-content:center;
    .header-title{
        text-align:center;
    }
    .title-wrapper{
        display:flex;
        align-items:center;
        justify-content:center;

    }
    h2{
        font-size:22px;
        line-height:1.33;
        font-weight:700;
        color:#333;
        margin-left:4px;
    }
`
const HireBannerContent=styled.div`
    border:1px solid #ececec;
    border-radius:4px;
    color:#333;
    align-self:auto;
    flex-wrap:wrap;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:row;
    display:flex;
    width:100%
`
