import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import "./main.scss";
import { IconContext } from "react-icons/lib";
function Navbar({ token }) {
    const [sidebar, setsidebar] = useState(false);
    const showSidebar = () => setsidebar(!sidebar);

    const logout = () => {
        localStorage.clear();
        window.location.href = "/signin";
    };
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbarss">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <ul className="navbarss-right d-flex justify-content-center flex-row align-items-center m-0 text-white">
                        {token.taiKhoan ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="#" className="navlink nameUser text-white mr-4">
                                        {`Hi, ${
                                            token.hoTen.toString().length > 20
                                                ? token.hoTen.substring(0, 15) + "..."
                                                : token.hoTen
                                        }`}
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>HI</>
                        )}
                    </ul>
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
                        <hr />
                        <li className="nav-text">
                            <Link to="#" onClick={logout}>
                                <FaIcons.FaSignOutAlt />
                                <span>Đăng xuất</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
