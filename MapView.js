import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
​
mapboxgl.accessToken = 'pk.eyJ1IjoiaWJyYS1oaW1hIiwiYSI6ImNrdzB3bnVzZ2RreW4yeHBnNmp5cTV6eDIifQ.GrAgcRoLUnXBoLZ7hCWTTg';
​
​
function MapView() {
​
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-303.0);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(2);
​
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/ibra-hima/ckw2fbydp0tfv14p96iejkkdd',
            center: [lng, lat],
            zoom: zoom
        });
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });
    /* 
Add an event listener that runs
  when a user clicks on the map element.
*/
 const handlePopUp = (e) => {
  const features = map.queryRenderedFeatures(e.point, {
    layers: ['dravus'] 
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
  )
  .addTo(map);
​
};
​
​
​
    return (
​
        <div className="App">
            <div>
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} onClick = {handlePopUp} className="map-container" /></div>
        </div>
​
    )
​
​
}
​
​
export default MapView