import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home';
import Films from './films';
import NotFound from './not-found';

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/films" component={Films}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    );
}

export default App;