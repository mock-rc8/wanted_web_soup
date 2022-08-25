import styled from "styled-components";

export const SectionPrev=()=>{
    return(
        <ArrowBtn>
            <span>
                <svg viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                </svg>

            </span>

        </ArrowBtn>
    )
    

}
export const SectionNext=()=>{
    return(
        <ArrowBtn>
            <span>
                <svg viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
            </span>

        </ArrowBtn>
    )
}

const ArrowBtn=styled.button`
    position:relative;
    width:36px;
    height:36px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    border:1px solid #e1e2e3;
    border-radius:50%;
    background-color:#fff;
    box-shadow:0 2px 2px 0 rgb(0 0 0 / 5%);
    font-size:16px;
    color:#767676 ;  
    span{
        margin-left:0;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    svg{
        fill:currentColor;
        width:1em;
        height:1em;
        flex-shrink:0;
        display:inline-block;
    }
`
