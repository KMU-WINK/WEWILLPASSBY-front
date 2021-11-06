import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

import title from '../images/start/title.svg';
import main from '../images/start/main.png';

export default function Start(props) {
    return (
        <Wrap>
            <TitleWrap>
                <Title/>
            </TitleWrap>
            <MainImage/>

            <BottomWrap>
                <KakaoButton>카카오 로그인</KakaoButton>
                <EmailButton>이메일 로그인</EmailButton>
            </BottomWrap>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;    

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background: #E8F6FF;
`

const TitleWrap = styled.div`
    margin: 20px;
`;

const Title = styled.div`
    width: 44vw;
    height: 14vh; 

    background: url(${title});
    background-size: cover;
`

const MainImage = styled.div`
    height: 75vh;
    
    background: url(${main});
    background-size: cover;
`

const BottomWrap = styled.div`
    width: 100%;
    height: 21vh;   
    
    position: absolute;
    bottom: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const KakaoButton = styled.div`
    width: 85vw;
    height: 6vh;
    margin-bottom: 2vh;

    font-family: Roboto;
    font-style: normal;
    font-weight: medium;
    font-size: 1.5em;
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
    width: 85vw;
    height: 6vh;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: medium;
    font-size: 1.5em;
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
