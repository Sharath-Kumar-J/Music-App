import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/Store/Store";
import NavigationScreen from "./components/Navigation/NavigationScreen";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  )
}

export default App;