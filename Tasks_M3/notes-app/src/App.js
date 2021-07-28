import './App.css';
import React from "react";
import {MyNotesContainer} from "./pages/myNotes/MyNotesContainer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./pages/myNotes/Navigation";
import {SharedNotes} from "./pages/myNotes/SharedNotes";
import {About} from "./pages/myNotes/About";
import {NoMatch} from "./pages/myNotes/NoMatch";

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
                        <MyNotesContainer/>
                    </Route>
                    <Route path="/Frontend_Tasks">
                        <About/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>


                </Switch>
            </Router>
        </div>
    );
}
export default App;
