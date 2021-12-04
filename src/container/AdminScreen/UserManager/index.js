import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListUserPerPage from "../../../Layouts/UserListPerPage";
import { GetMaNguoiDung } from "../../../Redux/Actions/userAction";
import AddUser from "../AddUser";
import "./main.scss";
export default function UserManager() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetMaNguoiDung());
    }, [dispatch]);
    const maLoaiNguoiDung = useSelector((state) => state.maLoaiNguoiDung.maLoaiNguoiDung);
    return (
        <>
            {maLoaiNguoiDung ? (
                <>
                    <Link to="/admin">Back</Link>
                    <div className="container-fluied pt-5">
                        <div className="row">
                            <div className="col-md-2">
                                {/* Tabs nav */}
                                <div
                                    className="nav flex-column nav-pills nav-pills-custom"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <a
                                        className="nav-link mb-3 p-3 shadow active"
                                        id="v-pills-home-tab"
                                        data-toggle="pill"
                                        href="#v-pills-home"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        <span className="font-weight-bold small text-uppercase">
                                            Thêm tài khoản
                                        </span>
                                    </a>
                                    <a
                                        className="nav-link mb-3 p-3 shadow"
                                        id="v-pills-profile-tab"
                                        data-toggle="pill"
                                        href="#v-pills-profile"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        <i className="fa fa-calendar-minus-o mr-2" />
                                        <span className="font-weight-bold small text-uppercase">
                                            Bookings
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-10">
                                {/* Tabs content */}
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div
                                        className="tab-pane fade shadow rounded bg-white show active p-5"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        <ListUserPerPage />
                                    </div>
                                    <div
                                        className="tab-pane fade shadow rounded bg-white p-5"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                    >
                                        <AddUser maLoaiNguoiDung={maLoaiNguoiDung} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>Loading</>
            )}
        </>
    );
}
