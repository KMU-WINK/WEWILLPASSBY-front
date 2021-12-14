// import React from 'react';
// import KakaoLogin from 'react-kakao-login';
// import styled from 'styled-components';
// import { authService, firebaseInstance } from "../fbase";
// import title from '../images/start/title.svg';
// import main from '../images/start/main.png';

// const onSocialCilck = async(event) => {
//     let provider;
//     provider = new firebaseInstance.auth.GoogleAuthProvider();
//     await authService.signInWithPopup(provider);
// };

// export default function Start(props) {
//     return (
//         <Wrap>
//             <TitleWrap>
//                 <Title/>
//             </TitleWrap>
//             <MainImage/>

//             <BottomWrap>
//                 <KakaoButton>카카오 로그인</KakaoButton>
//                 <EmailButton onClick={onSocialCilck}>이메일 로그인</EmailButton>
//             </BottomWrap>
//         </Wrap>
//     );
// }

// const Wrap = styled.div`
//     width: 100%;
//     height: 100%;    

//     position: relative;

//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;

//     background: #E8F6FF;
// `

// const TitleWrap = styled.div`
//     margin: 70px 0 50px 40px;
// `;

// const Title = styled.div`
//     width: 80%;
//     height: 100px; 

//     background: url(${title});
//     background-size: contain;
//     background-repeat: no-repeat;
// `

// const MainImage = styled.div`
//     height: 620px;
    
//     background: url(${main});
//     background-size: cover;
// `

// const BottomWrap = styled.div`
//     width: 100%;
//     height: 120px;   
    
//     position: absolute;
//     bottom: 7%;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `

// const KakaoButton = styled.div`
//     width: 80%;
//     height: 50px;
//     margin-bottom: 20px;

//     font-family: Roboto;
//     font-style: normal;
//     font-weight: medium;
//     font-size: 1.3em;
//     line-height: 21px;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     color: #000000;

//     background: #FEE500;
//     border-radius: 5px;

//     &:hover {
//         box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
//     }
// `

// const EmailButton = styled.div`
//     width: 80%;
//     height: 50px;
    
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: medium;
//     font-size: 1.3em;
//     line-height: 21px;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     color: #000000;

//     background: #C4C4C4;
//     border-radius: 5px;

//     &:hover {
//         box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
//     }
// `
