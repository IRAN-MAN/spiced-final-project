import ReactDOM from "react-dom";
import reducer from "./redux/reducer";

// redux & redux devtools
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

//components
import Welcome from "./components";
import App from "./components";

const loggedIn = true;

if (loggedIn) {
    //logged-in
    ReactDOM.render(<App />, document.querySelector("main"));
} else {
    // logged-out
    ReactDOM.render(<Welcome />, document.querySelector("main"));
}
function HelloWorld() {
    return <div>Hello, World!</div>;
}
