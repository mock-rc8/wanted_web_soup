import React from"react";
import styled from "styled-components";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SliderBanner from "../common/SliderBanner";
import BannerBtn from "../common/bannerBtn";
import MatchedList from "./MatchedList";
import ContentBanner from "./ContentBanner";
import LinkNav from "./LinkNav";
import SectionDiv from "../home/SectionDiv";
import CaompanyTagSection from "./CompanyTagSection";

export default function JobsfeedMain(){
    return(
        <MainPageWrapper>

            <SliderBanner></SliderBanner>

            <BannerBtn page="job"></BannerBtn>

            <MatchedList></MatchedList>

            <ContentBanner></ContentBanner>

            <LinkNav></LinkNav>

            <CaompanyTagSection></CaompanyTagSection>


        </MainPageWrapper>
    )
}

const MainPageWrapper=styled.section`

    padding-top:25px;
    background-color:#fff;

`
