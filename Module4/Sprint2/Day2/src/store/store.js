// create a store
import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import { themeReducer } from "./reducers/themeReducer";
import { rootReducer } from "./reducers/rootReducer";

// export const store = createStore(themeReducer);
export const store = createStore(rootReducer);
