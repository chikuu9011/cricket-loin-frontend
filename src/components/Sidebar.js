import React from "react";
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <div className="menu">
                <div className="userinfo">
                    <img src="admin.png" alt="userimg" className="img-fluid admin"/>
                    <h6>username</h6>
                </div>
                <ul>
                    <li><Link className="nav-link" to="/t">dashboard</Link>
                    </li>
                    <li><Link className="nav-link" to="/t/customer">customer</Link>
                    </li>
                    <li><Link className="nav-link" to="/t/clients">clients</Link>
                    </li>
                    <li><Link className="nav-link" to="/t/documents">documents</Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Sidebar