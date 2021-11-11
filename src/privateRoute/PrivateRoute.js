import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const user = true
    return (
        <Route {...rest} render={({ location }) => 
            user ? children : <Redirect  to={{ pathname: "/login", state: { from: location }}} ></Redirect>
        } />
    );
};

export default PrivateRoute;