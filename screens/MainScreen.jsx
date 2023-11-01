import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import MapContainer from "../components/MapContainer";
import Autocomplete from "../components/Autocomplete";

const HomeScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 3.1470984, // Location
    longitude: 101.6990835, // Location
  });
  const mapRef = useRef(null);

  const updateLocation = (data, details) => {
    const { lat, lng } = details.geometry.location;
    const newLocation = {
      latitude: lat,
      longitude: lng,
    };
    setSelectedLocation(newLocation);
    mapRef.current.animateToRegion({
      ...newLocation,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      <MapContainer selectedLocation={selectedLocation} mapRef={mapRef} />
      <Autocomplete onUpdateLocation={updateLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
});

export default HomeScreen;
