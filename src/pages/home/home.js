import React from "react";
import MainHeader from "../../components/common/header";
import HomeMain from "../../components/home/Main";

export default function Home(){
    return(
        <div>

            <MainHeader></MainHeader>
            <div style={{height:"50px"}}></div>
            <HomeMain></HomeMain>

        </div>
    )
}


