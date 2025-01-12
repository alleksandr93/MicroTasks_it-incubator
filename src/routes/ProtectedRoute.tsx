import React from 'react';
import ProtectedPage from '../components/pages/ProtectedPage';
import {Error404} from '../components/pages/Error404';
import {Navigate} from 'react-router-dom';
type Props={
    children: React.ReactNode;
}
export const ProtectedRoute = ({children}:Props) => {
    const [logget,setLogget] = React.useState<boolean>(false);
   return logget ? <>{children}</> :<Navigate to={'/login'}/>
};

export default ProtectedRoute;