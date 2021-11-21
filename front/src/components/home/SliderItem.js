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
    width: 100%;
    height: 500px;

    text-align: center;

    background: #FFFFFF;
    border-radius: 20px;
`