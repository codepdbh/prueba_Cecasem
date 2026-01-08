import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
const getMarkerIcon = (riesgo) => {
    let color = 'blue';
    switch (riesgo) {
        case 'Alto': color = 'red'; break;
        case 'Medio': color = 'orange'; break;
        case 'Bajo': color = 'green'; break;
        default: color = 'blue';
    }

    return new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
};

const MapComponent = ({ focos }) => {
    // Default center (Bolivia roughly)
    const position = [-16.2902, -63.5887];

    return (
        <div className="map-container">
            <MapContainer center={position} zoom={5} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {focos.map((foco) => (
                    <Marker
                        key={foco.id}
                        position={[foco.latitud, foco.longitud]}
                        icon={getMarkerIcon(foco.riesgo)}
                    >
                        <Popup>
                            <strong>Departamento:</strong> {foco.departamento}<br />
                            <strong>Riesgo:</strong> {foco.riesgo}<br />
                            <strong>Fecha:</strong> {new Date(foco.fecha).toLocaleDateString()}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
