import React from 'react';
import Slider from "react-slick";
import '../css/slick.css';
import '../css/slick-theme.css';
import styled from 'styled-components';

import Footer from "../components/common/Footer";
import SliderItem from "../components/home/SliderItem";

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
        <Background>
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
        </Background>
    );
}

const Background = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Wrap = styled.div`
    width: 100%;
    height: calc(100% - 80px);

    background: #E8F6FF;
`

const Header = styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`;

const Title = styled.div`
    width: 70%;
    height: 60px;

    margin-left: 45px;

    background: url(${name});
    background-size: contain;
    background-repeat: no-repeat;
`;

const Alarm = styled.div`
    width: 20%;
    height: 30px;

    margin-bottom: 10px;

    background: url(${alarm});
    background-size: contain;
    background-repeat: no-repeat;
`;

const Body = styled.div`
    height: 600px;
    margin: 25px 45px;
`;