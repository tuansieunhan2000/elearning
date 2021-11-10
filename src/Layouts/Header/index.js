import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <NavLink activeStyle={{ color: "red" }} to="/" className="navbar-brand">
                    E-learning
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                                exact
                                to="/"
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/signin" className="nav-link">
                                    Sign In
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
