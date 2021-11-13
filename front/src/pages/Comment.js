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
                            우와 여기는 어디에요 ?
                        </div>
                        <div style={comments}>
                            우와 여기는 어디에요 ?
                        </div>
                        <div style={comments}>
                            우와 여기는 어디에요 ?
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
