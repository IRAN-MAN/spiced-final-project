import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
    getUser,
    receiveUserInfo,
    receiveChapters,
    receiveCookbooks,
} from "../redux/actions";

import axios from "../axios";

import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

// components
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import MyProfile from "./MyProfile";
// import UserProfile from "./UserProfile";

export default function App() {
    //useSelectors here:
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    //useEffects here:
    useEffect(async () => {
        const { data } = await axios.get("/api/users/checkLogin");
        console.log("...(App) user_id: ", data.user_id);
        dispatch(receiveUserInfo(data.user_id));
        dispatch(receiveChapters());
        dispatch(receiveCookbooks(data.user_id));
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <div className="main-content">
                <p>App Component!</p>
                <Switch>
                    {/* <Route
                        exact
                        path="/"
                        render={() => <p>HELLO YOU ARE LOGGED IN!</p>}
                    /> */}
                    <Route path="/" component={MyProfile} />
                    {/* <Route path="/userprofile/:id" component={UserProfile} /> */}

                    {/* This one should catch all the weird ones */}
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
