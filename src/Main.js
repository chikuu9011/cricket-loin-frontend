import React from 'react'
import{RouterProvider} from 'react-router-dom'
import Routes from "./Routes"

const Main = () => {
  return (
    <>
    <RouterProvider router={Routes}/>
    </>
  )
}

export default Main
