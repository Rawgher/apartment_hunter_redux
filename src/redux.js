import { Platform } from "react-native";

const API =
  Platform.OS === "android"
    ? "http://10.0.3.2:3000/v1" // works for Genymotion
    : "http://localhost:3000/v1";

export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case "GET_APARTMENT_DATA":
      // Dispatch GET_APARTMENT_DATA_LOADING to update loading state
      store.dispatch({ type: "GET_APARTMENT_DATA_LOADING" });
      // Make API call and dispatch appropriate actions when done
      fetch(`${API}/apartments.json`)
        .then(response => response.json())
        .then(data =>
          next({
            type: "GET_APARTMENT_DATA_RECEIVED",
            data
          })
        )
        .catch(error =>
          next({
            type: "GET_APARTMENT_DATA_ERROR",
            error
          })
        );
      break;
    // Do nothing if the action does not interest us
    default:
      break;
  }
};

export const reducer = (state = { apartments: [], loading: true }, action) => {
  switch (action.type) {
    case "GET_APARTMENT_DATA_LOADING":
      return {
        ...state, // keep the existing state,
        loading: true // but change loading to true
      };
    case "GET_APARTMENT_DATA_RECEIVED":
      return {
        loading: false, // set loading to false
        apartments: action.data.apartments // update apartments array with reponse data
      };
    case "GET_APARTMENT_DATA_ERROR":
      return state;
    default:
      return state;
  }
};
