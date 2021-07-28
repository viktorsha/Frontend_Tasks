import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Navigation} from "./pages/myNotes/Navigation";
import {SharedNotes} from "./pages/myNotes/SharedNotes";
import {About} from "./pages/myNotes/About";
import {NoMatch} from "./pages/myNotes/NoMatch";
import {PersonalNotes} from "./pages/myNotes/PersonalNotes";

const App = () => {
    return (
        <div>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/Frontend_Tasks/shared-notes">
                        <SharedNotes/>
                    </Route>
                    <Route path="/Frontend_Tasks/about">
                        <About/>
                    </Route>
                    <Route path="/Frontend_Tasks/my-notes">
                        <PersonalNotes/>
                    </Route>
                    <Route exact path="/Frontend_Tasks/">
                        <About/>
                    </Route>
                    <Route path="/Frontend_Tasks/not-found">
                        <NoMatch/>
                    </Route>
                    <Redirect from="/" to="/Frontend_tasks/not-found"/>
                </Switch>
            </Router>
        </div>
    );
}
export default App;
