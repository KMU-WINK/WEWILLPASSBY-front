/*global Kakao*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authService, firebaseInstance } from "../fbase";

import fbase from "../fbase";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';

import title from '../images/start/title.svg';
import main from '../images/start/main.png';

const onSocialCilck = async(event) => {
    let provider;
    provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
};

export default function Start(props) {
    // const [kakaoUser, setKakaoUser] = useState({
    //     token: "cannot fetched token",
    //     email: "",
    //     nickname: "",
    // })
    localStorage.setItem('token', "cannot fetched token");

    useEffect(() => {
        console.log(Kakao.isInitialized())
    })

    const loginWithKakao = async() => {
        await Kakao.Auth.login({
            throughTalk: false,
            success: function(authObj) {
                console.log(authObj.access_token)
                // console.log(JSON.stringify(authObj));
                localStorage.setItem('token', authObj.access_token);

                Kakao.API.request({
                    url: "/v2/user/me",
                    success: function({ kakao_account }) {
                        console.log(kakao_account);
                        const { email, profile } = kakao_account;
                        const nickname = profile.nickname;
                        // const token = authObj.access_token;

                        // console.log(email);
                        // console.log(nickname);
                        // console.log(token);
                        // setKakaoUser({ token: token, email: email, nickname: nickname});
                        localStorage.setItem('email', email);
                        localStorage.setItem('nickname', nickname);

                        setKakaoLogin();
                    },
                    fail: function(err) {
                        console.log(JSON.stringify(err));
                    },
                })
            },
            fail: function(err) {
                console.log(JSON.stringify(err));
            },
        })
    }

    const setKakaoLogin = async(e) => {
        const db = getFirestore(fbase);

        const userCol = collection(db, 'users');
        const userSnap = await getDocs(userCol);
        const userList = userSnap.docs.map(doc => doc.data());
        console.log(userList);

        // console.log(kakaoUser);
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('nickname'));
        await setDoc(doc(db, 'users', localStorage.getItem('token')), {
            token: localStorage.getItem('token'),
            email: localStorage.getItem('email'),
            nickname: localStorage.getItem('nickname')
        });
    }

    return (
        <Wrap>
            <TitleWrap>
                <Title/>
            </TitleWrap>
            <MainImage/>

            <BottomWrap>
                <KakaoButton onClick={loginWithKakao}>카카오 로그인</KakaoButton>
                <EmailButton onClick={onSocialCilck}>이메일 로그인</EmailButton>
            </BottomWrap>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 100%;    

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background: #E8F6FF;
`

const TitleWrap = styled.div`
    margin: 70px 0 50px 40px;
`;

const Title = styled.div`
    width: 80%;
    height: 100px; 

    background: url(${title});
    background-size: contain;
    background-repeat: no-repeat;
`

const MainImage = styled.div`
    height: 620px;
    
    background: url(${main});
    background-size: cover;
`

const BottomWrap = styled.div`
    width: 100%;
    height: 120px;   
    
    position: absolute;
    bottom: 7%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const KakaoButton = styled.div`
    width: 80%;
    height: 50px;
    margin-bottom: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: medium;
    font-size: 1.3em;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #000000;

    background: #FEE500;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }
`

const EmailButton = styled.div`
    width: 80%;
    height: 50px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: medium;
    font-size: 1.3em;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #000000;

    background: #C4C4C4;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }
`
