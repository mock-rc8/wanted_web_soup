import React from "react";
import MainHeader from "../../components/common/header";
import HomeMain from "../../components/home/Main";
import { useRecoilValue } from 'recoil';
import LoginModal from "../../components/login/LoginModal";
import { popupRecoilState } from "../../atoms/Popup";
import $ from 'jquery';

export default function Home(){
    const popup=useRecoilValue(popupRecoilState);

    {popup?$('body').removeClass('fixed'):$('body').addClass('fixed')}

    return(
        <div>

            <MainHeader></MainHeader>
            <div style={{height:"50px"}}></div>
            <HomeMain></HomeMain>

            {popup?"":<LoginModal></LoginModal>}
            
        </div>
    )
}


