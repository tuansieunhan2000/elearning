import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import "./main.scss";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { IconContext } from "react-icons/lib";
function Navbar() {
    const [sidebar, setsidebar] = useState(false);
    const showSidebar = () => {
        setsidebar(!sidebar);
        console.log(sidebar);
    };
    let match = useRouteMatch();

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbarss">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars" onClick={showSidebar}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={`/admin${item.path}`} onClick={showSidebar}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
