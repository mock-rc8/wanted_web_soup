import React from "react";
import styled from "styled-components";

export default function WriteMain(){
    return(
        <WriteMainWrapper>
            <form className="write">
                <Header></Header>
                <Content></Content>
            </form> 
        </WriteMainWrapper>
    )
}

const WriteMainWrapper=styled.div`
    display:flex;
    width:100%;
    overflow:hidden;
    flex-direction:column;
`
const Header=()=>{
    return(
        <WriteHeader>
            <div className="writeHeader-content">
                <div class="write-btn">
                    <button>
                        <span>등록하기</span>
                    </button>
                </div>
            </div>
        </WriteHeader>
    )
}
const WriteHeader=styled.div`
    position:fixed;
    top:50px;
    width:100%;
    z-index:10;
    height:60px;
    background-color:#fff;
    border:1px solid #e1e2e3;
    .writeHeader-content{
        max-width:1060px;
        margin:0 auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:100%;
        padding:10px 0;
    }
    .write-btn{
        display:flex;
        justify-content:center;
        align-items:center;
        width:135px;
        height:40px;
        margin-left:auto;
    }
    button{
        background-color:#f2f4f7;
        color:#ccc;
        width:100%;
        height:100%;
        position:relative;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        min-width:64px;
        padding:0 27px;
        border-radius:25px;
        font-weight:700;
        font-size:15px;
    }
    button>span{
        width:100%
    }
`

const Content=()=>{
    return(
        <WriteContent>
            <div className="content-wrapper">
                <div className="tag-pannel">
                    <div className="tagPannel-title">
                        <span>태그 선택</span>
                        <span style={{color:"#939393"}}>(1~3개)</span>
                        <span style={{color:"#fe415c"}}>*</span>
                    </div>
                    <div className="tagPannel-wrapper">
                        <button className="plusbtn">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path fill="#F2F4F7" d="M0 17C0 7.61116 7.61116 0 17 0V0C26.3888 0 34 7.61116 34 17V17C34 26.3888 26.3888 34 17 34V34C7.61116 34 0 26.3888 0 17V17Z"></path>
                                <path fill="#666" d="M17.7432 10.6482C17.6935 10.2822 17.3797 10 17 10C16.5858 10 16.25 10.3358 16.25 10.75V16.25H10.75L10.6482 16.2568C10.2822 16.3065 10 16.6203 10 17C10 17.4142 10.3358 17.75 10.75 17.75H16.25V23.25L16.2568 23.3518C16.3065 23.7178 16.6203 24 17 24C17.4142 24 17.75 23.6642 17.75 23.25V17.75H23.25L23.3518 17.7432C23.7178 17.6935 24 17.3797 24 17C24 16.5858 23.6642 16.25 23.25 16.25H17.75V10.75L17.7432 10.6482Z"></path>
                            </svg>
                        </button>
                        <button className="tagbtn">
                            <img src="https://static.wanted.co.kr/images/community/tag_empty@3x.png"></img>
                        </button>
                    </div>

                </div>

                <div className="wirte-title">
                    <textarea className="write-textarea"
                        name="title" placeholder="제목을 입력해주세요."></textarea>
                </div>

                <div className="write-content">
                    <div>
                        <textarea className="content-textarea"
                        name="content" placeholder="내용을 작성해주세요"></textarea>
                    </div>
                </div>
            </div>
        </WriteContent>
    )
}
const WriteContent=styled.div`
    position:relative;
    width:100%;
    padding-top:60px;
    .content-wrapper{
        max-width:790px;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        min-height:calc(100vh - 110px);
        padding:39px 40px;
        border:1px solid #e1e2e3;
        border-top:0;
        background-color:#fff;
    }
    .tag-pannel{
        margin-bottom:50px;
    }
    .tagPannel-title{
        color:#666;
        font-weight:700;
        margin-bottom:10px;
    }
    .tagPannel-wrapper{
        display:flex;
    }
    .tagbtn{
        margin-left:10px;
        width:85px;
        height:34px;
    }
    .tagbtn>img{
        width:85px;
    }
    .wirte-title{
        display:flex;
        width:100%;
        padding-bottom:21px;
        border-bottom:2px solid #e1e2e3;
        font-size:28px;
        font-weight:700;
        line-height:38px;
        position:relative;
    }
    .write-textarea{
        height:38px;
        width:100%;
        padding:0;
        border:0;
        color:#333;
        outline:0;
        font-size:28px;
        font-weight:700;
        line-height:38px;
        resize:none;
    }

    .write-content{
        width:100%;
        padding-top:28px;
        font-size:17px;
        font-weight:400;
        line-height:28px;
    }
    .write-content>div{
        position:relative;
    }
    .content-textarea{
        height:56px;
        width:100%;
        padding:0;
        border:0;
        font-size:17px;
        font-weight:400;
        line-height:28px;
        color:#333;
        outline:0;
        resize:none;
    }
`