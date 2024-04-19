import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../Components/Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

export default function Map() {
  // get cities from useCities context return function
  const { cities } = useCities();
  const [mappostion, setpostion] = useState([40, 0]);

  // this will give langitude and longitude from custom hook on click
  const {
    isLoading: isLoadingposition,
    position: geolocationposition,
    getPosition,
  } = useGeolocation();

  // this will geive langitude and longitude from custom hook in searchparam
  const [maplat, maplng] = useUrlPosition();

  // on clicking on cities is will go the specific marker
  useEffect(
    function () {
      if (maplat && maplng) setpostion([maplat, maplng]);
    },
    [maplat, maplng]
  );

  // this will by clicking go to current position which use usegeological hook
  useEffect(
    function () {
      if (geolocationposition)
        setpostion([geolocationposition.lat, geolocationposition.lng]);
    },
    [geolocationposition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geolocationposition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingposition ? "Loading.." : "use your postion"}
        </Button>
      )}
      <MapContainer
        center={mappostion}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <Changecenter position={mappostion} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function Changecenter({ position }) {
  const map = useMap();

  map.setView(position);
  return null;
}

// this will help to navigate 
function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
