import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ApartmentModal from "./ApartmentModal";
import ApartmentPhoto from "./ApartmentPhoto";
import { apartments } from "./data.js";

export default class Apartments extends Component {
  state = {
    popupIsOpen: false,
    chosenDay: 0,
    chosenTime: null
  };

  openApartment = apartment => {
    this.setState({
      popupIsOpen: true,
      apartment
    });
  };

  closeApartment = () => {
    this.setState({
      popupIsOpen: false,
      chosenDay: 0,
      chosenTime: null
    });
  };

  chooseDay = day => {
    this.setState({
      chosenDay: day
    });
  };

  chooseTime = time => {
    this.setState({
      chosenTime: time
    });
  };

  bookAppointment = () => {
    if (!this.state.chosenTime) {
      alert("Please select a view time");
    } else {
      this.closeApartment();
      this.props.navigation.navigate("Confirmation");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {apartments.map((apartment, index) => (
            <ApartmentPhoto
              apartment={apartment}
              onOpen={this.openApartment}
              key={index}
            />
          ))}
        </ScrollView>

        <ApartmentModal
          apartment={this.state.apartment}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeApartment}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
          onBook={this.bookAppointment}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  scrollContent: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
