import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import SliderList from './SliderList'

export default function SliderBanner(){
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
        <BannerWrapper>
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
        </BannerWrapper>
    )
}

const BannerWrapper=styled.div`
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