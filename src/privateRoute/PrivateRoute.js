import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import Loader from "react-js-loader";
import { Box } from '@mui/system';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth()

    if (isLoading) {
        return<Box sx={{mt:15}}><Loader type="bubble-loop" bgColor={"tomato"} title={"bubble-loop"} color={'#FFFFFF'} size={100} /></Box>
    }
    return (
        <Route {...rest} render={({ location }) => 
            user?.displayName ? children : <Redirect  to={{ pathname: "/login", state: { from: location }}} ></Redirect>
        } />
    );
};

export default PrivateRoute;