import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
                    <div className="container mt-5">
                        <div className="layout mt-5 ">
                            <input
                                name="nav"
                                type="radio"
                                className="nav home-radio"
                                id="home"
                                defaultChecked="checked"
                            />
                            <div className="page home-page">
                                <div className="page-contents">
                                    <ListUserPerPage maLoaiNguoiDung={maLoaiNguoiDung} />
                                </div>
                            </div>
                            <label className="nav " htmlFor="home">
                                <span>
                                    <i class="fas fa-users-cog"></i>
                                    Quản lý người dùng
                                </span>
                            </label>
                            <input name="nav" type="radio" className="about-radio" id="about" />
                            <div className="page about-page">
                                <div className="page-contents">
                                    <AddUser maLoaiNguoiDung={maLoaiNguoiDung} />
                                </div>
                            </div>
                            <label className="nav" htmlFor="about">
                                <span>
                                    <i class="fas fa-user-plus"></i>
                                    Thêm người dùng
                                </span>
                            </label>
                        </div>
                    </div>
                </>
            ) : (
                <>Loading</>
            )}
        </>
    );
}
