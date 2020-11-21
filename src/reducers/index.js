import { combineReducers } from "redux";

import { reducer as configReducer } from "./config";

const rootReducer = combineReducers({
  config: configReducer,
});

export default rootReducer;
