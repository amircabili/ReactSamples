import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Information from "./pages/Information";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById('app');




ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Information}></IndexRoute>

            <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
    </Router>,
    app);









