import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { defaultStyles } from "./styles";

const { width, height } = Dimensions.get("window");

const cols = 3,
  rows = 3;

export default class ApartmentPhoto extends Component {
  static propTypes = {
    apartment: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired
  };

  render() {
    const {
      apartment,
      apartment: { name, city, photo },
      onOpen
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onOpen(apartment)}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: photo }} style={styles.image} />
        </View>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.city} numberOfLines={1}>
          {city}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10
  },
  imageContainer: {
    flex: 1
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  name: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4
  },
  city: {
    ...defaultStyles.text,
    color: "#BBB",
    fontSize: 12,
    lineHeight: 14
  }
});
