import React from 'react';
import Footer from '../components/common/Footer';
import '../css/myPage.css'

import alarm from '../images/myPage/alarm.png'
import level from '../images/myPage/level.png'
import setting from '../images/myPage/setting.png'

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
                {/* <div className = "myPage_main_menu">
                    <img src={alarm} className= "myPage_main_menu_alarm"/>
                    <img src={setting} className= "myPage_main_menu_setting"/>
                </div> */}
                
                <div className ="myPage_main_profile">
                    <div className = "myPage_main_profile_me">
                        <img src={level} className= "myPage_main_profile_me_level"/>
                        <div className = "myPage_main_profile_me_myPhoto">
                            {/* <img /> */}
                        </div>
                    </div>
                    <div className = "myPage_main_char">
                        <h1 className = "myPage_main_char_nickname">홍자전거</h1>
                        <h3 className = "myPage_main_char_class">초보따릉러</h3>
                    </div>
                </div>
                <div className = "myPage_main_info">
                    
                </div>
            </div>

            <div className = "myPage_footer">
                <Footer />
            </div>
        </div>
    );
}

