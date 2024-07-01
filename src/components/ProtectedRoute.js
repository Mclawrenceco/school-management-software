import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../store';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const auth = useRecoilValue(authState);

    return (
        <Route
            {...rest}
            render={(props) =>
                auth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default ProtectedRoute;
