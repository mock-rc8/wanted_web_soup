import React from "react";
import MainHeader from "../../components/common/header/header";
import { useRecoilValue } from 'recoil';
import LoginModal from "../../components/login/LoginModal";
import { popupRecoilState } from "../../atoms/Popup";
import $ from 'jquery';
import WriteMain from "../../components/community/write/Main";


export default function Write(){
    const popup=useRecoilValue(popupRecoilState);

    {popup?$('body').removeClass('fixed'):$('body').addClass('fixed')}

    return(
        <div>

            <MainHeader></MainHeader>
            <div style={{height:"50px"}}></div>

            <WriteMain></WriteMain>

            {popup?"":<LoginModal></LoginModal>}

        </div>
    )
}