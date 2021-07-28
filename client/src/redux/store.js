import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

export default store;
