import React from 'react';
import search_icon from "../images/community/search_icon.svg"
import '../css/community.css'
import Footer from '../components/common/Footer';
import PostList from '../components/community/PostList';

export default function Community(props) {
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
            <div className="third_div">
                <PostList title="글의 제목입니닷" />
            </div>
            <Footer />
        </div>
    );
}
