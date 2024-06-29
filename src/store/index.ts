//import { applyMiddleware } from "redux"
import { configureStore } from "@reduxjs/toolkit"
//import { composeWithDevTools } from "redux-devtools-extension"
import {thunk} from "redux-thunk"
import { rootReducer } from "./reducers"

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  });

export default store;  