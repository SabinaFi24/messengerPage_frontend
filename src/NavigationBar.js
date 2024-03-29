import './App.css';
import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import Cookies from "universal-cookie";

class NavigationBar extends React.Component {
    state = {
        links: [{title: "Profile", path: "/profile"},
            {title: "Messages", path: "/messages"}
            , {title: "Send Messages", path: "/send"}

        ]
    }

    logout = () => {
        const cookies = new Cookies();
        cookies.remove("token");
        window.location.reload();
    }

    render() {
        return (
            <div style={{marginRight: "20px", marginLeft: "20px", borderRight: "1px solid", paddingRight: "20px"}}>
                <ul>
                    {
                        this.state.links.map(link => {
                            return (
                                <NavLink to={link.path} className={"link"} activeClassName={"active"}>
                                    <li style={{marginBottom: "10px"}}>
                                        <i>
                                            {link.title}
                                        </i>
                                    </li>
                                </NavLink>
                            )
                        })
                    }

                    <button onClick={this.logout}>
                        Logout
                    </button>
                </ul>
            </div>
        )
    }
}
export default NavigationBar;
