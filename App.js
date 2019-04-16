import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Apartments from "./src/Apartments.js";
import Confirmation from "./src/Confirmation.js";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Apartments,
    Confirmation: Confirmation
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      title: "Apartment Hunter"
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
