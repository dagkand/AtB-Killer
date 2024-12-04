import React, { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [63.4305, 10.3951];

const TrondheimMap: React.FC = () => {
  const [circleColor, setCircleColor] = useState<string>("green");

  useEffect(() => {
    const lastSpottedTime = new Date().getTime() - 45 * 60 * 1000; 

    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastSpottedTime;

    if (timeDifference <= 30 * 60 * 1000) {
      setCircleColor("green"); 
    } else if (timeDifference <= 60 * 60 * 1000) {
      setCircleColor("yellow"); 
    } else {
      setCircleColor("red"); 
    }
  }, []);

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
        <Circle
          center={position}
          radius={100} 
          pathOptions={{ color: circleColor, fillColor: circleColor, fillOpacity: 0.5 }}
        >
          <Popup>
            {`Trondheim, Norway - Status: ${circleColor.charAt(0).toUpperCase() + circleColor.slice(1)} since last spotted`}
          </Popup>
        </Circle>
      </MapContainer>
    </div>
  );
};

export default TrondheimMap;
