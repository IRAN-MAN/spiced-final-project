import ReactDOM from "react-dom";
import axios from "./axios";

// redux & redux devtools
import { Provider } from "react-redux";
import store from "./redux/store";
// import { getInviteLink } from "./redux/action-creators";

//components
import Welcome from "./components/Welcome";
import App from "./components/App";

const isLoggedIn = async () => {
    // const dispatch = useDispatch();
    const { data } = await axios.get("/api/users/checklogin");
    // console.log("...(start.js) user_id: ", data.user_id);
    // if (data.inviteURL) {
    //     dispatch(getInviteLink(data.inviteURL));
    // }
    if (data.user_id) {
        //logged-in
        ReactDOM.render(
            <Provider store={store}>
                <App invite={data.inviteURL} />
            </Provider>,
            document.querySelector("main")
        );
    } else {
        // logged-out
        ReactDOM.render(<Welcome />, document.querySelector("main"));
    }
};

isLoggedIn();
