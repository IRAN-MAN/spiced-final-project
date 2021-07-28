import ReactDOM from "react-dom";
import axios from "./axios";

// redux & redux devtools
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducer";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

//components
import Welcome from "./components/Welcome";
import App from "./components/App";

const loggedIn = true;

const isLoggedIn = async () => {
    const { data } = await axios.get("/api/users/checklogin");
    if (data.user_id) {
        //logged-in
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.querySelector("main")
        );
    } else {
        // logged-out
        ReactDOM.render(<Welcome />, document.querySelector("main"));
    }
};

isLoggedIn();
