import React from 'react';
import Footer from "../components/common/Footer";
import styled from 'styled-components';

export default function Home(props) {
    return (
        <div>
            <Wrap>

            </Wrap>
            <Footer/>
        </div>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;

    background: #E8F6FF;
`