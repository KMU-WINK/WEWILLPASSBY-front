import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import Footer from "../components/common/Footer";

export default function Map(props) {

    const history = useHistory();
    const { kakao } = window;

    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.609926, 126.996982),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.609926, 126.996982);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, [])


    return (
        <Wrap>
            <WrapMap id="map"></WrapMap>
            <Footer/>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 100%;
`;

const WrapMap = styled.div`
    width: 100%;
    height: calc(100% - 80px);
`;
