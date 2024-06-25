import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import{RouterProvider} from 'react-router-dom'
import AppRoutes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes}/>);
