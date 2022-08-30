import React from "react";
import styled from "styled-components";
import MoreBtn from "../common/MoreBtn";
import { SectionWrapper } from "../styled";

export default function JobListNav(){
    return(
        <NavWrapper>
            <SectionWrapper className="nav-body">
                <div>
                    <button className="jobGroup-btn">
                        <span className="btn-text">개발</span>
                        <MoreBtn></MoreBtn>
                    </button>
                </div>

                <div className="job-category">
                    <div className="divider">|</div>
                    <button className="category-btn">
                        <span className="btn-text category-text">개발 전체</span>
                        <MoreBtn></MoreBtn>
                    </button>
                </div>
            </SectionWrapper>
        </NavWrapper>
    )
}

const NavWrapper=styled.div`
    background:#fff;
    padding-top:40px;

    .nav-body{
        position:relative;
        display:flex;
        align-items:center;
    }
    .jobGroup-btn{
        display:flex;
        align-items:center;
        white-space:nowrap;
    }
    .btn-text{
        padding-top:3px;
        margin-right:15.5px;
        font-size:24px;
        line-height:29px;
        font-weight:700;
        color:#333;
    }

    .divider{
        font-size:28px;
        line-height:29px;
        padding:3px 24px 0;
        color:#ececec;
    }

    .job-category{
        display:flex;
        overflow:hidden;
    }
    .category-btn{
        display:flex;
        align-items:center;
        overflow:hidden;
    }
    .category-text{
        font-weight:400;

    }
`