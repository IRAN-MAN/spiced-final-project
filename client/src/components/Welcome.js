//components
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

export default function Welcome() {
    return (
        <BrowserRouter>
            <div>
                Welcome Component
                <Switch>
                    <Route exact path="/" render={() => <Registration />} />
                    <Route path="/login" component={Login} />

                    {/* This one should catch all the weird ones */}
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
