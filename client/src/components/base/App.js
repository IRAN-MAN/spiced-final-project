import {
    getUser,
    receiveUserInfo,
    receiveChapters,
    receiveCookbooks,
} from "../../redux/action-creators";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

// components
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import MyProfile from "../MyProfile";
import Cookbook from "../Cookbook";
import Recipe from "../Recipe";
import EditProfile from "../EditProfile";
import FadeIn from "../FadeIn";
// import UserProfile from "../UserProfile";

//hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function App(props) {
    //useSelectors here:
    const user = useSelector((state) => state.user);
    const inviteLink = props.invite;
    const dispatch = useDispatch();

    //useEffects here:
    useEffect(async () => {
        dispatch(receiveUserInfo(-1));
        dispatch(receiveChapters());
    }, []);
    useEffect(() => {
        if (user.id) {
            dispatch(receiveCookbooks(user.id));
        }
    }, [user]);

    return (
        <BrowserRouter>
            <FadeIn delay={250} duration={850}>
                <Header />
                <Navigation />
                <div className="main-content">
                    <Switch>
                        <Route path="/" exact>
                            {inviteLink && <Redirect to={`${inviteLink}`} />}
                            <MyProfile />
                        </Route>
                        <Route path="/cookbook/:id" component={Cookbook} />
                        <Route path="/recipe/:id" component={Recipe} />
                        <Route path="/editProfile" component={EditProfile} />

                        {/* This one should catch all the weird ones */}
                        <Route path="/">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </FadeIn>
        </BrowserRouter>
    );
}
