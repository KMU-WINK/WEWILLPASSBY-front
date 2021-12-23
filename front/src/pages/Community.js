import React from 'react';
import search_icon from "../images/community/search_icon.svg"
import '../css/community.css'
import Footer from '../components/common/Footer';
import PostList from '../components/community/PostList';
import {useHistory} from "react-router-dom";

export default function Community(props) {

    const history = useHistory();

    return (
        <div className="community">
            <div className="search_bar">
                <img src={search_icon} alt="검색 아이콘" />
                <input type="text" placeholder="검색어를 입력하세요. www"/>
            </div>
            <div className="second_div">
                <div className="sub_div">
                    <b>게시판 준수사항</b>
                </div>
                <div className="sub_div">
                    <b>실시간 인기 글</b>
                </div>
            </div>
            <div className="third_div" onClick={() => history.push('./communitywrite')}>
                <PostList title="오늘 날씨 좋아서 놀러갔다왔는데 기분도 좋고" />
                <PostList title="토요일 한강 라이딩 중간에 내려서 수박주스 마시고" />
                <PostList title="윙크 프로젝트 화이팅 룰루랄라" />
                <PostList title="자전거 수리점 아는 사람있나요 ? 내일 나가려고 하는데" />
                <PostList title="서울에서 경기권까지 자전거로 가면" />
                <PostList title="토요일 한강 라이딩 중간에 내려서 수박주스 마시고" />
                <PostList title="윙크 프로젝트 화이팅 룰루랄라" />
                <PostList title="서울에서 경기권까지 자전거로 가면" />
                <PostList title="토요일 한강 라이딩 중간에 내려서 수박주스 마시고" />
            </div>
            <Footer />
        </div>
    );
}
