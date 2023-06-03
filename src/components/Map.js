import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

function Map() {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const [currentLocation, setCurrentLocation] = useState(null);
  const [fields, setFields] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log('Error retrieving location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }

    axios.get('/fields/all') // Adjust the API endpoint as per your backend setup
      .then((response) => {
        setFields(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving fields:', error);
      });
  }, []);

  const handleMarkerClick = (field) => {
    // Navigate to the field details page when a marker is clicked
    // Replace '/field/:id' with the actual route path for the field details page
    navigate(`/field/${field.id}`);
  };

  const handleMapClick = (event) => {
    const { lat, lng } = event.latLng;
    setSelectedLocation({ lat, lng });
  };

  const mapOptions = {
    zoomControl: true,
    zoom: 20
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBC7TrnSJ6ZvaNUaspY6zbmOAbrz5PFF04">
      {currentLocation && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation}
          options={mapOptions}
          onClick={handleMapClick}
        >
          {fields.map((field) => (
            <Marker
              key={field.id}
              position={{ lat: field.latitude, lng: field.longitude }}
              title={field.nom}
              onClick={() => handleMarkerClick(field)}
            />
          ))}
          {selectedLocation && (
            <Marker
              position={selectedLocation}
              title={`Selected Location (${selectedLocation.lat}, ${selectedLocation.lng})`}
            />
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default Map;