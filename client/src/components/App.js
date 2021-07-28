import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

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

    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <div>
                <p>App Component!</p>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
