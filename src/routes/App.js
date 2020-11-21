import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./Routes";
import configureStore from "@config/store";
import ConfigWrapper from "@components/ConfigWrapper/ConfigWrapper";

import "nprogress/nprogress.css";

const App = () => {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigWrapper>
          <Routes />
        </ConfigWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
