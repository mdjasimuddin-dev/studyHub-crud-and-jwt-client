import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = (children) => {
    const {user} = useAuth()
    const location = useLocation()
    console.log(location)

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;