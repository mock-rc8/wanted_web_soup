import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../styled";
import FilterList from "./FilterList";
import TagFilter from "./TagFilter";


export default function JobListContent(){
    return(
        <JobListContentWrapper>
            <div>
                <div>
                    <FilterListWrapper>
                        <FilterList></FilterList>
                        <Divider></Divider>
                        <TagFilter></TagFilter>
                    </FilterListWrapper>

                </div>

                <DividerStyle></DividerStyle>

                <BookmarkSection>
                    <button>
                        <svg width="13" height="17" viewBox="0 0 13 17" className="icon">
                            <path fill="#36f" d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"></path>
                        </svg>
                        <span>북마크 모아보기</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" className="arrowicon">
                            <path fill="#36f" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path>
                        </svg>
                    </button>
                </BookmarkSection>

                <h3>적극 채용 중인 회사</h3>

                
            </div>
            
        </JobListContentWrapper>
    )
}
const FilterListWrapper=styled.div`
    top:50px;
    margin-bottom:25px;
    padding-top:10px;
`

const JobListContentWrapper=styled.div`
    margin:0 auto;
    padding:20px 0 80px;
    width:87.72%;
    position:relative;
    max-width:1060px;

    h3{
        font-size:22px;
        font-weight:600;
        letter-spacing:-.3px;
        color:#333;
        margin:20px 0 14px;
    }
`
const Divider=styled.hr`
    max-width:1060px;
    margin:25px auto;
    background-color:rgba(236,236,236,.7);
    height:1px;
    border:none;
    flex-shrink:0
`
const DividerStyle=styled.hr`
    width:100vw;
    margin-bottom:38px;
    margin-left:calc(-50vw + 50%);
    background-color:#e1e2e3;
    height:1px;
    border:none;
    flex-shrink:0;

`
const BookmarkSection=styled.div`
    margin-bottom:12px;
    button{
        display:flex;
        align-items:center;
        line-height:24px;
        color:#36f;
    }
    .icon{
        width:11px;
        height:16px;
        margin-right:8px;
        color:grb(51,102,255);
    }
    span{
        font-size:15px;
        font-weight:600;
        line-height:24px;
    }
    .arrowicon{
        width:10px;
        margin:0 0 0 2px;
        height:16px;
    }
`