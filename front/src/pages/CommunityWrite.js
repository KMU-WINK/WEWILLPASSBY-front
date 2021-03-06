import React from 'react';
import { useHistory } from "react-router-dom";

import Footer from "../components/common/Footer";

import backIcon from "../images/common/backIcon.png";

const commentBlock = {
    backgroundColor: '#E8F6FF',
    height: '90vh',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
}
const popupSecction = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '5%',
    width: '80%',
    height: '85%',
}
const commentScroll = {
    height: '220px',
    overflowY:'scroll',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
        width: 'none',
    }
}
const comments = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Noto Sans KR',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.4em',
    borderBottom: '1px solid rgba(128, 128, 128, 0.15)',
    margin: '20px 0',
    paddingBottom: '20px',
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum maiores nemo rem? Dignissimos, molestiae voluptas? Amet aperiam architecto, asperiores autem dignissimos distinctio et magni officia sed suscipit ullam veniam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum maiores nemo rem? Dignissimos, molestiae voluptas? Amet aperiam architecto, asperiores autem dignissimos distinctio et magni officia sed suscipit ullam veniam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum maiores nemo rem? Dignissimos, molestiae voluptas? Amet aperiam architecto, asperiores autem dignissimos distinctio et magni officia sed suscipit ullam veniam.
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <span>Comments</span>
                        <span style={{fontSize: '12px', cursor: 'pointer'}}  onClick={() => history.push('./comment')} >?????????</span>
                    </div>
                    <div style={commentScroll}>
                        <div style={comments}>
                            ?????? ????????? ???????????? ?
                        </div>
                        <div style={comments}>
                            ???????????? ?????? ?????? ?????? ????????? ?????? ???????????? ?????? ???????????????..
                        </div>
                        <div style={comments}>
                            ????????? 1??? ?????????
                        </div>
                        <div style={comments}>
                            ????????? ??????????????? ?????? ????????? ??????
                        </div>
                        <div style={comments}>
                            ?????? ????????? ?????? ??????????????? ?????? ???????????? ??????....
                        </div>
                        <div style={comments}>
                            ?????? ????????? ???????????? ??
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
