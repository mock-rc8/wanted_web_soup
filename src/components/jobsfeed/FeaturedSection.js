import React, { useState } from"react";
import { SectionWrapper} from "../styled";
import HeaderWrapper from "./HeaderWrapper";
import dummy from "./db/list.json";
import ListContainer from "../common/ListContainer";


export default function FeaturedSection(){
    const list=dummy["요즘 뜨는 포지션"];

    return(
        <SectionWrapper style={style}>
            <HeaderWrapper title="요즘 뜨는 포지션" type="featured"></HeaderWrapper>
            <ListContainer list={list}></ListContainer>
        </SectionWrapper>
    )
}
const style={
    padding:"70px 0 50px",
    position:"relative"
}




