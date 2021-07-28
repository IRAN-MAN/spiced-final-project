import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUser, receiveUserInfo } from "../redux/actions";

import axios from "../axios";

import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

// components
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

export default function App() {
    //useSelectors here:

    const dispatch = useDispatch();

    //useEffects here:
    useEffect(async () => {
        const user_id = await axios.get("/api/users/checkLogin");
        console.log("...(App) user_id: ", user_id);
        dispatch(receiveUserInfo(user_id));
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <div>
                <p>App Component!</p>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <p>HELLO YOU ARE LOGGED IN!</p>}
                    />
                    {/* <Route path="/friends/list" component={Friends} /> */}

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
