import React from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [63.4305, 10.3951];

const TrondheimMap: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "80vh", width: "80vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Trondheim, Norway</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TrondheimMap;
