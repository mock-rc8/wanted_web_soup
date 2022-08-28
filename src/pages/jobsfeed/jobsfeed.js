import React from "react";
import MainHeader from "../../components/common/header/header";
import { useRecoilValue } from 'recoil';
import LoginModal from "../../components/login/LoginModal";
import { popupRecoilState } from "../../atoms/Popup";
import $ from 'jquery';
import JobsfeedMain from "../../components/jobsfeed/Main";
import Footer from "../../components/common/footer";

export default function Jobsfeed(){
    const popup=useRecoilValue(popupRecoilState);

    {popup?$('body').removeClass('fixed'):$('body').addClass('fixed')}

    return(
        <div>
            <MainHeader></MainHeader>
            <div style={{height:"50px"}}></div>

            <JobsfeedMain></JobsfeedMain>

            <Footer></Footer>

            {popup?"":<LoginModal></LoginModal>}
            
        </div>
    )
}


