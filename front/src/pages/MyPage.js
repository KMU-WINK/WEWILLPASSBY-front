import React, { useState } from 'react';
import Footer from '../components/common/Footer';
import '../css/myPage.css'

import alarm from '../images/myPage/alarm.png'
import level from '../images/myPage/level.png'
import setting from '../images/myPage/setting.png'


const Profile = {
    userNickname : "홍자전거",
    userClass : "초보따릉러",
    userImage : null,
    }

export default function MyPage(props) {
    return (
        <div className = "myPage">
            <div>

            </div>

            <div className = "myPage_main">
                <div className = "test">
                    <div className = "myPage_main_menu">
                        <img src={alarm} className= "myPage_main_menu_alarm"/>
                        <img src={setting} className= "myPage_main_menu_setting"/>
                    </div>
                </div>
                
                <div className ="myPage_main_profile">
                    <div className = "myPage_main_profile_me">
                        <img src={level} className= "myPage_main_profile_me_level"/>
                        <div className = "myPage_main_profile_me_myPhoto">
                            {Profile.userImage}
                        </div>
                    </div>
                    <div className = "myPage_main_char">
                        <h1 className = "myPage_main_char_nickname">{Profile.userNickname}</h1>
                        <h3 className = "myPage_main_char_class">{Profile.userClass}</h3>
                    </div>
                </div>
                <div className = "myPage_main_info">
                    <div className = "myPage_main_info_service">
                        이용약관
                    </div >

                    <div className = "myPage_main_info_service">
                        개인정보 처리방침
                    </div>

                    <div className = "myPage_main_info_service">
                        버전 정보
                    </div>

                    <div className = "myPage_main_info_service">
                        개발에 참여하고 싶어요!
                    </div>

                    <div className = "myPage_main_info_service">
                        FAQ
                    </div>
                    
                </div>
            </div>

            <div className = "myPage_footer">
                <Footer />
            </div>
        </div>
    );
    
}

