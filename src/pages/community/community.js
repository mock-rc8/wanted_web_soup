import React from "react";
import MainHeader from "../../components/common/header/header";
import { useRecoilValue } from 'recoil';
import LoginModal from "../../components/login/LoginModal";
import { popupRecoilState } from "../../atoms/Popup";
import CommunityMain from "../../components/community/Main";
import $ from 'jquery';


export default function Community(){
    const popup=useRecoilValue(popupRecoilState);

    {popup?$('body').removeClass('fixed'):$('body').addClass('fixed')}

    return(
        <div>
            <MainHeader></MainHeader>
            <div style={{height:"50px"}}></div>

            <CommunityMain></CommunityMain>

            {popup?"":<LoginModal></LoginModal>}
            
        </div>
    )
}