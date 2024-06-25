import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Customer from './components/Customer'
import Client from './components/Client'
import Documents from './components/Documents'
import Login from './components/Login'

const Routes = createBrowserRouter([
    {
    path:"/",
    element:<Login/>
    },
    {
        path: '/t',
        element: <App />,
        children: [
            {
                path: "/t",
                element: <Home />
            },
            {
                path: "/t/customer",
                element: <Customer />
            },
            {
                path: "/t/clients",
                element: <Client />
            },
            {
                path: "/t/documents",
                element: <Documents
                />
            }
        ]

    }
])

export default Routes
