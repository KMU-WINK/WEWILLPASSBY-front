import React from 'react';
import Slider from "react-slick";
import '../css/slick.css';
import '../css/slick-theme.css';
import styled from 'styled-components';

import Footer from "../components/common/Footer";
import SliderItem from "../components/Home/SliderItem";

import name from "../images/home/name.svg";
// import alarm from "../images/home/alarm.svg";
import alarm from "../images/home/alarm.png";

export default function Home(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Wrap>
                <Header>
                    <Title/>
                    <Alarm/>
                </Header>
                
                <Body>
                    <Slider {...settings}>  
                        <SliderItem text={"따릉이 대여소 확인"}/>
                        <SliderItem text={"현재 가장 인기있는 경로"}/>
                        <SliderItem text={"공지사항"}/>
                        <SliderItem text={"이벤트"}/>
                    </Slider>
                </Body>                
            </Wrap>
            <Footer/>
        </div>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: #E8F6FF;
`

const Header = styled.div`
    width: 100vw;
    height: 8vh;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.div`
    width: 50vw;
    height: 8vh;

    background: url(${name});
    background-size: cover;
`;

const Alarm = styled.div`
    width: 8vw;
    height: 4vh;

    margin-top: 15px;

    background: url(${alarm});
    background-size: cover;
`;

const Body = styled.div`
    margin: 5vh;
`;