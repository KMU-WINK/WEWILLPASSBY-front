import React from 'react';
import Footer from "../components/common/Footer";

import backIcon from "../images/common/backIcon.png";

const commentBlock = {
    padding: '5%',
}
const backIconImg = {
    width: '25px',
}

export default function Comment(props) {
    return (
        <div>
            <div style={commentBlock}>
                <div>
                    <img style={backIconImg} src={backIcon} alt=""/>
                </div>
                <div>
                    댓글 블럭
                </div>
            </div>
            <Footer/>
        </div>
    );
}
