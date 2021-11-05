import React from 'react';
import styled from 'styled-components';

export default function SliderItem(props) {
    return (
        <div>
            <Wrap>
                {props.text}
            </Wrap>
        </div>
    );
}

const Wrap = styled.div`    
    width: 80vw;
    height: 60vh;

    margin-bottom: 3vh;
    text-align: center;

    background: #FFFFFF;
    border-radius: 20px;
`