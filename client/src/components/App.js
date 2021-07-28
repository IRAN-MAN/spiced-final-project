import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import axios from "../axios";

import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

// components
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default function App() {
    //useSelectors here:

    const dispatch = useDispatch();

    //useEffects here:

    return (
        <BrowserRouter>
            <p>App Component</p>
            <Header />
            <Navigation />
            <main>
                <Switch>
                    <Route exact path="/" render={() => <p>Route 1</p>} />
                    {/* <Route path="/" component={} /> */}

                    {/* This catches all the weird ones: */}
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
