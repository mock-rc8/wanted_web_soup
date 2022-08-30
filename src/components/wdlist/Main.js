import React from"react";
import styled from "styled-components";
import JobList from "./JobList";



export default function WdListMain(){
    return(
        <MainPageWrapper>
            <JobList></JobList>
        </MainPageWrapper>
    )
}

const MainPageWrapper=styled.section`

    padding-top:25px;
    background-color:#fff;

`