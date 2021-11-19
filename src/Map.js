import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiaWJyYS1oaW1hIiwiYSI6ImNrdzB3bnVzZ2RreW4yeHBnNmp5cTV6eDIifQ.GrAgcRoLUnXBoLZ7hCWTTg';

function Map() {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-90.9484848);
    const [lat, setLat] = useState(42.3944995);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/ibra-hima/ckw2fbydp0tfv14p96iejkkdd',
            center: [lng, lat],
            zoom: zoom
        })

    })
    return (

        <div className = "viewContainer">
            <div ref={mapContainer} className = "map-container"></div>
        </div>
    )

}

export default Map;