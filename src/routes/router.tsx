import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Navigate, createHashRouter, type RouteObject, Outlet,
} from 'react-router-dom';
import App from '../App';
import {Error404} from '../components/pages/Error404';
import {Adidas} from '../components/pages/Adidas';
import {Puma} from '../components/pages/Puma';
import {Abibas} from '../components/pages/Abibas';
import {Prices} from '../components/pages/Prices';
import {Crosses} from '../components/pages/Crosses';
import {Model} from '../components/Model';
import ProtectedPage from '../components/pages/ProtectedPage';
import ProtectedRoute from './ProtectedRoute';
import Login from '../components/pages/Login';

const PATH = {
    PAGE:'/',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    ERROR404: '/error404',
    MODEL:'/:module/:id',
    MODULE_ADIDAS:'/adidas/:id/:module',
    MODULE_PUMA:'/puma/:id/:module',
    PROTECTEDPAGE:'/protectedPage',
    ERROR:'/error',
    LOGIN:'/login'
} as const;

export const PrivateRoutes = () => {
    const [isAuth,setIsAuth] = React.useState<boolean>(false);
    return isAuth ? <Outlet/>:<Navigate to={'/login'}/>
};
const publicRoutes: RouteObject[] = [
    {
        path:PATH.ADIDAS,
        element: <Adidas/>,

    },
    {
        path: PATH.PUMA,
        element: <Puma/>,

    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,

    },
    {
        path: PATH.PRICES,
        element: <Prices/>,

    },
    {
        path: PATH.MODEL,
        element: <Model />,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path:PATH.PROTECTEDPAGE,
        element: (
            <ProtectedRoute>
                <ProtectedPage />
            </ProtectedRoute>
        ),
    },
    {
        path:PATH.ERROR,
        element: (<Error404/>)
    },
    {
        path:PATH.LOGIN,
        element:<Login/>,
    }
]
const privateRoutes: RouteObject[] = [
    {
        path:PATH.PROTECTEDPAGE,
        element: <ProtectedPage />,
    },

]
export const router = createBrowserRouter([
    {
        path: PATH.PAGE,
        element: (
            <App/>
        ),

        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element:<PrivateRoutes/>,
                children:privateRoutes
            },
            ...publicRoutes
        ]
    },

]);

//----------------------------------------------------------------------------------------------------
// export const router = createBrowserRouter([
//     {
//         path: PATH.PAGE,
//         element: (
//             <App/>
//         ),
//
//         errorElement: <Navigate to={PATH.ERROR}/>,
//         children: [
//             {
//                 path:PATH.ADIDAS,
//                 element: <Adidas/>,
//
//             },
//             {
//                 path: PATH.PUMA,
//                 element: <Puma/>,
//
//             },
//             {
//                 path: PATH.ABIBAS,
//                 element: <Abibas/>,
//
//             },
//             {
//                 path: PATH.PRICES,
//                 element: <Prices/>,
//
//             },
//             {
//                 path: PATH.MODEL,
//                 element: <Model />,
//             },
//             {
//                 path: PATH.MODEL,
//                 element: <Model/>,
//             },
//             {
//                 path:PATH.PROTECTEDPAGE,
//                 element: (
//                     <ProtectedRoute>
//                         <ProtectedPage />
//                     </ProtectedRoute>
//                 ),
//             },
//             {
//                 path:PATH.ERROR,
//                 element: (<Error404/>)
//             },
//             {
//                 path:PATH.LOGIN,
//                 element:<Login/>,
//             }
//         ]
//     },
//
// ]);