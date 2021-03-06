import React from 'react';
import { useHistory } from "react-router-dom";

import Footer from "../components/common/Footer";

import backIcon from "../images/common/backIcon.png";

const commentBlock = {
    backgroundColor: '#E8F6FF',
    height: '100vh',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
}
const popupSecction = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '5%',
    width: '80%',
    height: '80%',
}
const comments = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Noto Sans KR',
    fontWeight: '400',
    height: '50px',
    fontSize: '14px',
    lineHeight: '1.4em',
    borderBottom: '1px solid rgba(128, 128, 128, 0.15)',
}
const backIconCSS = {
    width: '20px',
    marginBottom: '10px',
    cursor: 'pointer',
}

export default function Comment(props) {

    const history = useHistory();

    return (
        <div>
            <div style={commentBlock}>
                <div style={popupSecction}>
                    <img src={backIcon} style={backIconCSS} onClick={() => history.goBack()}/>
                    <div>
                        <div style={comments}>
                            우와 여기는 어디에요 ?
                        </div>
                        <div style={comments}>
                            안그래도 요즘 날씨 너무 추워서 저도 나갔다가 금방 들어왔어요..
                        </div>
                        <div style={comments}>
                            선착순 1명 햄버거
                        </div>
                        <div style={comments}>
                            그래도 나갔다오면 기분 좋아요 ㅋㅋ
                        </div>
                        <div style={comments}>
                            아니 자전거 타고 들어왔는데 헬멧 잃어버림 ㅜㅜ....
                        </div>
                        <div style={comments}>
                            여기 성북구 아닌가요 ??
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
