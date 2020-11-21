/* istanbul ignore file */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "@reducers/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["config"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
