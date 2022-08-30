import React from "react";
import MainHeader from "../../components/common/header/header";
import { useRecoilValue } from 'recoil';
import LoginModal from "../../components/login/LoginModal";
import { popupRecoilState } from "../../atoms/Popup";
import $ from 'jquery';
import Footer from "../../components/common/footer";
import WdListMain from "../../components/wdlist/Main";

export default function WdList(){
    const popup=useRecoilValue(popupRecoilState);

    {popup?$('body').removeClass('fixed'):$('body').addClass('fixed')}

    return(
        <div>
            <MainHeader></MainHeader>
            <div style={{height:"50px"}}></div>

            <WdListMain></WdListMain>

            <Footer></Footer>

            {popup?"":<LoginModal></LoginModal>}
            
        </div>
    )
}