import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Fees from './components/Fees'
import Sign from './components/Sign'
import Contactus from './components/Contactus'
import Addmatches from './components/Addmatches'
import Unpaid from './components/Unpaid'
import Matches from './components/Matches'


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
            {
                path: "/matches",
                element: <Matches />
            },
            {
                path: "/addmatches",
                element: <Addmatches />
            },
            {
                path: "/feeschange",
                element: < Unpaid />
            },

        ]

    }
])

export default Routes
