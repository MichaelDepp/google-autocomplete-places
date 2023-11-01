import React from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_PLACES_API_KEY = "YOUR_API_KEY";

const Autocomplete = ({onUpdateLocation}) => {

  return (
    <View style={styles.googlePlaceContainer}>
      <GooglePlacesAutocomplete
        styles={{
          textInputContainer: textInputContainer,
        }}
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: "en",
        }}
        fetchDetails
        onPress={onUpdateLocation}
        onFail={(error) => console.error(error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: "100%",
  },
  googlePlaceContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 30,
  },
});

export default Autocomplete;
