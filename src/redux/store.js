import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "./combineReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

