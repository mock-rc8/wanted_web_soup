import React from"react";
import styled from "styled-components";
import SliderBanner from "../common/SliderBanner";
import BannerBtn from "../common/bannerBtn";
import MatchedList from "./MatchedList";
import ContentBanner from "./ContentBanner";
import LinkNav from "./LinkNav";
import CaompanyTagSection from "./CompanyTagSection";
import ThemeSection from "./ThemeSection";
import SectionDivider from "../common/divider";
import FeaturedSection from "./FeaturedSection";

export default function wdListMain(){
    return(
        <MainPageWrapper>

            <SliderBanner></SliderBanner>


        </MainPageWrapper>
    )
}

const MainPageWrapper=styled.section`

    padding-top:25px;
    background-color:#fff;

`