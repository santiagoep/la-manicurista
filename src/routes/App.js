import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "nprogress/nprogress.css";

/** Containers */
import Home from "../pages/Home/Home";
import configureStore from "@config/store";

import ConfigWrapper from "@components/ConfigWrapper/ConfigWrapper";

const App = () => {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigWrapper>
          <HashRouter>
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
                Layout={({ children }) => <>{children}</>}
              />
            </Switch>
          </HashRouter>
        </ConfigWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
