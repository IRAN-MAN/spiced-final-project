//components
import Login from "./Login";
import Registration from "./Registration";
import AcceptInvite from "./AcceptInvite";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Logo from "./Logo";

export default function Welcome() {
    return (
        <BrowserRouter>
            <div className="flex fcolumn cc">
                <div>
                    <Logo />
                </div>

                <div className="navWrapper">
                    <nav>
                        <ul className="nav-ul flex vcenter">
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/">Sign up</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/" render={() => <Registration />} />
                    <Route path="/login" component={Login} />
                    <Route
                        path="/cookbookinvite/:id"
                        component={AcceptInvite}
                    />

                    {/* This one should catch all the weird ones */}
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
