import React, { useState, useEffect , useRef} from 'react';
import Footer from '../components/common/Footer';
import '../css/myPage.css'

import alarm from '../images/myPage/alarm.png'
import level from '../images/myPage/level.png'
import setting from '../images/myPage/setting.png'

import fbase from "../fbase";
import { getFirestore, getDoc, doc} from 'firebase/firestore';
import {useHistory} from "react-router-dom";


export default function MyPage(props) {
    const [profile, setProfile] = useState({
        userNickname : "홍자전거",
        userClass : "초보따릉러",
        userEmail : "",
        userImage : null,
    })

    useEffect(async() => {
        const token = localStorage.getItem('token');
        console.log(token);

        const db = getFirestore(fbase);

        // 전체 데이터 get
        // const userCol = collection(db, 'users');
        // const userSnap = await getDocs(userCol);
        // const userList = userSnap.docs.map(doc => doc.data());
        // console.log(userList);
        //
        // const docRef = doc(db, 'users', token);
        // const docSnap = await getDoc(docRef);
        //
        // if(docSnap.exists()){
        //     console.log(docSnap.data());
        //     setProfile({
        //         ...profile,
        //         userNickname: docSnap.data().nickname,
        //         userEmail: docSnap.data().email,
        //         userImage: docSnap.data().image,
        //     });
        // }
        // else{
        //     console.log("No such document!");
        // }
    }, [])

    const history = useHistory();

    return (
        <div className = "myPage">
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
                            {/* {profile.userImage} */}
                            <img src={profile.userImage} style={{width:"100%", height:"100%"}}></img>
                        </div>
                    </div>
                    <div className = "myPage_main_char">
                        <h1 className = "myPage_main_char_nickname">{profile.userNickname}</h1>
                        <h3 className = "myPage_main_char_class">{profile.userEmail}</h3>
                        <div onClick={() => history.push('./changemyprofile')} style={{border: '1px solid gray', marginTop: '20px'}} >프로필 편집</div>
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

