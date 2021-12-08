import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCoursePerPage from "../../../Layouts/CourseListPerPage";
import { GetMaNguoiDung } from "../../../Redux/Actions/userAction";
import AddCourse from "../AddCourseByAdmin";
export default function CourseManager() {
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
                                    {/* <ListUserPerPage maLoaiNguoiDung={maLoaiNguoiDung} /> */}
                                    <ListCoursePerPage />
                                </div>
                            </div>
                            <label className="nav " htmlFor="home">
                                <span>
                                    <i class="fas fa-book"></i>
                                    Quản lý khoá học
                                </span>
                            </label>
                            <input name="nav" type="radio" className="about-radio" id="about" />
                            <div className="page about-page">
                                <div className="page-contents">
                                    <AddCourse />
                                    {/* <AddUser maLoaiNguoiDung={maLoaiNguoiDung} /> */}
                                </div>
                            </div>
                            <label className="nav" htmlFor="about">
                                <span>
                                    <i class="fas fa-book-medical"></i>
                                    Thêm khoá học
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
