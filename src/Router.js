import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home-container'
import About from './components/About'
import Car from './containers/Car-container'
import Dashboard from './containers/Dashboard-container'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;