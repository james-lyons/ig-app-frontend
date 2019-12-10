import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/HomeContainer';

export default withRouter(() => {
    const currentUser = localStorage.getItem('uid');

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render={(props) => (
            currentUser 
                ? <Component { ...props } />
                : <Redirect to='/' />
        )} />
    );

    return (
        <Switch>
            <Route exact path='/' component={ Home } />
        </Switch>
    );
});