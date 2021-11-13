import React from 'react';
import { useHistory } from "react-router-dom";

import communityIcon from "../../images/footer/communityIcon.png";
import homeIcon from "../../images/footer/homeIcon.png";
import mypageIcon from "../../images/footer/mypageIcon.png";
import mapmarkerIcon from "../../images/footer/mapmarkerIcon.png";

const footerCSS = {
    display:'flex',
    justifyContent:'space-around',
    textAlign:'center',
    width:'100%',
    height: '70px',
    backgroundColor: 'white',
    padding: '5px 0',
    fontFamily: 'Noto Sans KR',
}

export default function Footer(props) {

    const history = useHistory();

    return (
        <div style={footerCSS}>
            <div onClick={() => history.push('./home')}>
                <img src={homeIcon} alt={""}/>
                <p>홈</p>
            </div>
            <div>
                <img src={mapmarkerIcon} alt={""}/>
                <p>지도</p>
            </div>
            <div onClick={() => history.push('./community')}>
                <img src={communityIcon} alt={""}/>
                <p>소통</p>
            </div>
            <div onClick={() => history.push('./mypage')}>
                <img src={mypageIcon} alt={""}/>
                <p>정보</p>
            </div>
        </div>
    );
}
