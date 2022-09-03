import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SectionCategory from "../common/SectionCategory";
import CommunityItem from "./CommunityItem";
import dummy from "./db/topPicklist.json";
import PostItem from "./PostItem";
import axios from "axios";
import postlist from './db/postitemlist.json';

export default function CommunityList(){
    const category=[
        "추천","전체","개발","MD","커리어고민","콘텐츠 제작","노무","서비스기획","라이프스타일",
        "디자인","회사생활","인간관계","UX/UI","CS/CX","HR","조직문화","리더십","마케팅","취업/이직",
        "브랜딩","데이터","경영/전략","IT/기술"
    ]

    const tag=[
        "개발","MD","커리어고민","콘텐츠 제작","노무","서비스기획","라이프스타일"
    ]

    const url=`http://www.pangmin.shop/app/communities`
    const [content,setContents]=useState([]);

    const search=async()=>{
        try{
            const data=await axios({
                method:'get',
                url:url,
            })
            setContents(data.data.result);

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        search()
    },[])


    const handleClick=(e)=>{
        window.location.replace('./write')
    }

    return(

        <ListContent>
            <div className="categories-wrapper">
                <SectionCategory list={category} className="category"></SectionCategory>
            </div>

            <div className="listContent-body">
                <section className="topPick-view">
                    <div className="view-header">
                        <div className="header-title">
                            <h2>
                                주간 인기 글 🏆
                            </h2>
                        </div>
                        <nav className="header-nav">
                            <span className="span1">1</span>
                            <span className="span2">/</span>
                            <span className="span3">5</span>
                        </nav>
                    </div>

                    <div className="view-postList">
                        {
                            dummy.map((list)=>{
                                return(
                                    <CommunityItem 
                                    title={list.title} category={list.category} bgColor={list.bgColor}
                                    author={list.author} src={list.src}
                                    ></CommunityItem>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="postWrite-btn">
                    <button onClick={handleClick}>
                        커리어와 라이프스타일에 대해 자유롭게 이야기 해주세요!
                        <svg width="24" height="24">
                            <path d="M17.21 2.23a.75.75 0 0 1 1.07-.01l3.5 3.5a.75.75 0 0 1 .011 1.05l-12 12.5a.75.75 0 1 1-1.082-1.04l8.062-8.398-2.451-2.451L4.5 17.553V20h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .21-.52zm.55 1.59-2.397 2.482 2.447 2.447 2.39-2.488-2.44-2.441z"></path>
                        </svg>
                    </button>
                </section>

                <RecommendPostView>
                    <div className="rocommendPost-header">
                        <h2>추천 커뮤니티글 💘</h2>
                        <div className="post-tagList">
                            <ul>
                                {
                                    tag.map((list)=>{
                                        return(
                                            <li className="recommendTag-list">#{list}</li>
                                        )
                                    })
                                }
                            </ul>
                            <span className="arrow-btn">
                                <svg viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                </svg>
                            </span>
                        </div>

                        <Divider></Divider>
                    </div>
                    {
                        postlist.map((list)=>{
                            return(
                                <PostItem 
                                name={list.name} career={list.career} jobGroup={list.jobGroupIdx} tag1={list.tag1} tag2={list.tag2}
                                title={list.title} text={list.content} src={list.profileUrl} date={list.date}
                                likeNum={list.likeNum} commentNum={list.commentNum} url={list.imgUrl}
                                ></PostItem>
                            )
                        })
                    }
                </RecommendPostView>

            </div>
        </ListContent>
    )
}

const ListContent=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

    .categories-wrapper{
        background-color:#f8f8f8;
        position:fixed;
        top:50px;
        z-index:1;
        padding-top:60px;
    }
    .categories-wrapper>.c{
        width:790px;
        position:relative;
        top:auto;
        padding:19px 30px;
        border-radius:5px 5px 0 0;
        margin:0;
        display:flex;
        background-color:#fff;
        z-index:1;
        border:1px solid #e1e2e3;
    }


    .listContent-body{
        margin-top:149px;
        width:790px;
        contain-intrinsic-size: 1px 5000px;
        content-visibility: auto;
    }
    .topPick-view{
        padding:30px;
        border-color:#e1e2e3;
        border-style:solid;
        border-width:0 1px;
        width:100%;
        background-color:#fff;
    }
    .view-header{
        display:flex;
        justify-content:space-between;
        width:100%;
        margin-bottom:20px;
    }
    .header-title{
        display:flex;
        font-size:20px;
        font-weight:700;
        line-height:24px;
        color:#000;
    }
    .header-nav>.span1{
        margin-right:4px;
        color:#333;
        font-size:12px;
    }
    .header-nav>.span2{
        margin-right:4px;
        color:#888;
        font-size:12px;
    }
    .header-nav>.span3{
        margin-right:15px;
        color:#888;
        font-size:12px;
    }

    .view-postList{
        display:flex;
    }

    .postWrite-btn{
        padding:29px 29px 31px;
        border:1px solid #e1e2e3;
        background-color:#fff;
        display:flex;
        align-items:center;
    }
    .postWrite-btn>button{
        flex:1 1;
        height:56px;
        padding:0 19px;
        border-radius:4px;
        border:1px solid #e1e2e3;
        background-color:#fff;
        cursor:pointer;
        color:#333;
        font-size:16px;
        line-height:1.6;
        text-align:left;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
`

const RecommendPostView=styled.section`
    border:1px solid #e1e2e3;
    border-top:0;
    width:100%;
    background-color:#fff;
    
    .rocommendPost-header{
        height:107px;
        padding:30px 29px 0;
        margin-top:0;
        position:relative;
        cursor:pointer;
    }
    h2{
        margin-bottom:11px;
        font-size:20px;
        font-weight:700;
        color:#333;
    }
    .post-tagList{
        display:flex;
        align-items:center;
    }
    ul{
        width:auto;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:elllipsis;
        color:#767676;
    }
    .recommendTag-list{
        display:inline;
        margin-right:6px;
        font-size:14px;
        font-weight:500;
    }
    .arrow-btn{
        margin-left:6px;
        width:auto;
        color:#888;
        display:flex;
        align-items:center;
    }
    svg{
        width:1em;
        height:1em;
        flex-shrink:0;
        display:inline-block;
        fill:#888;
    }
`
export const Divider=styled.div`
    height:1px;
    background-color:#ececec;
    position:absolute;
    bottom:0;
    width:730px;
`