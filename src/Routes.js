import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Fees from './components/Fees'
import Sign from './components/Sign'
import Contactus from './components/Contactus'


const Routes = createBrowserRouter([
   
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/sign",
                element: <Sign />
            },
            {
                path: "/fees",
                element: <Fees />
            },
            {
                path: "/contact",
                element: <Contactus />
            },


        ]

    }
])

export default Routes
