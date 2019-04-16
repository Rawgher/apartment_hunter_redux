import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { apiMiddleware, reducer } from "./redux";
import Apartments from "./src/Apartments.js";
import Confirmation from "./src/Confirmation.js";

// Create Redux store
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// Fetch movie data
store.dispatch({ type: "GET_APARTMENT_DATA" });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />;
      </Provider>
    );
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
