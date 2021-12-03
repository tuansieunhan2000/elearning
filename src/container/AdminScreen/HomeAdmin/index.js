import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./main.scss";
import { Link } from "react-router-dom";
export default function HomeAdmin() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="display-4 text-center">Dashboard Admin</div>
                </div>
                <div className="container h-100">
                    <div className="row align-middle">
                        <div className="col-md-6 col-lg-6 column">
                            <div className="card gr-1">
                                <div className="txt">
                                    <h1>
                                        QUẢN LÝ
                                        <br />
                                        Tài khoản người dùng
                                    </h1>
                                </div>
                                <Link to="/admin/usermanager">more</Link>
                                <div className="ico-card">
                                    <FaIcons.FaUserFriends />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 column">
                            <div className="card gr-2">
                                <div className="txt">
                                    <h1>
                                        QUẢN LÝ
                                        <br />
                                        Khoá học
                                    </h1>
                                </div>
                                <Link to="/admin/coursemanager">more</Link>
                                <div className="ico-card">
                                    <AiIcons.AiFillCodepenCircle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
