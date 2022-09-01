import React from "react";
import styled from "styled-components";

export default function SectionCategory(props){
    const list=props.list;

    return(
        <CategoryWrapper className="c">
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
                    {
                        list.map((list)=>{
                            return(
                                <button className="category-btn" value={list}>{list}</button>
                            )
                        })
                    }
                </div>
            </div>
            <button className="category-more-btn">
                <svg width="16" height="3" viewBox="0 0 16 3">
                    <path fillRule="evenodd" d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"></path>
                </svg>
            </button>
        </CategoryWrapper>
    )
}

const CategoryWrapper=styled.div`
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
        font-size:14px;
        scroll-snap-align:start;
        margin-right:10px;
        border-radius:5px;
        white-space:nowrap;
        scroll-margin-left:400px;
        margin-top:7px;
        margin-left:4px;
        cursor:pointer;
        &:first-of-type{
            color:#36f;
            outline:none;
            font-weight:700;
            background-color:#fff;
            border:1px solid #36f;
        }
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