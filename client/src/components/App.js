import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
    getUser,
    receiveUserInfo,
    receiveChapters,
    receiveCookbooks,
} from "../redux/action-creators";

import axios from "../axios";

import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

// components
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import MyProfile from "./MyProfile";
import Test from "./Test";
import Cookbook from "./Cookbook";
// import UserProfile from "./UserProfile";

export default function App() {
    //useSelectors here:
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    //useEffects here:
    useEffect(async () => {
        dispatch(receiveUserInfo(-1));
        dispatch(receiveChapters());
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
                    <Route path="/" exact component={MyProfile} />
                    {/* <Route path="/userprofile/:id" component={UserProfile} /> */}
                    <Route path="/cookbook/:id" component={Cookbook} />

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
