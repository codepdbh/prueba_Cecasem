import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

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
                    <Marker key={foco.id} position={[foco.latitud, foco.longitud]}>
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
