import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModalEditByUser from "../../../Components/Modal/ModalEditUserByUser";
import { GetInfoUser, GetMaNguoiDung, UserCancelCourse } from "../../../Redux/Actions/userAction";

export default function ProfileScreen() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.info);
    const chiTietCacKhoaHocDaDangKi = useSelector((state) => state.chiTietCacKhoaHocDaDangKi) || [];

    useEffect(() => {
        dispatch(GetMaNguoiDung());
        dispatch(GetInfoUser());
    }, [dispatch]);

    const maLoaiNguoiDung = useSelector((state) => state.maLoaiNguoiDung.maLoaiNguoiDung);
    const handleDelete = (maKhoaHoc) => {
        if (user) {
            let taiKhoan = user.taiKhoan;
            let data = {
                taiKhoan: taiKhoan,
                maKhoaHoc: maKhoaHoc,
            };
            dispatch(UserCancelCourse(data));
        }
    };

    const mapCourseRegisted = () => {
        return chiTietCacKhoaHocDaDangKi?.map((course, index) => {
            return (
                <div className="col-3 mb-4" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <h4
                                className="card-title"
                                style={{ height: "50px", overflow: "hidden" }}
                            >
                                {course.tenKhoaHoc}
                            </h4>
                            <p className="card-text">{course.maKhoaHoc}</p>
                        </div>
                        <button className="btn-prev" onClick={() => handleDelete(course.maKhoaHoc)}>
                            Huỷ Khoá học
                        </button>
                    </div>
                </div>
            );
        });
    };
    return (
        <>
            {maLoaiNguoiDung ? (
                <>
                    {!user ? (
                        <>Still loading...</>
                    ) : (
                        <div>
                            <section className="same-category mb-lg-5 mt-lg-4 ">
                                <div className="container">
                                    <h1 className="header_course_list pb-3">
                                        THÔNG TIN NGƯỜI DÙNG
                                    </h1>
                                    <div className="have_content">
                                        <table className="table borderless">
                                            <tbody>
                                                <tr>
                                                    <th className="title-tablle" width="30%">
                                                        Họ tên
                                                    </th>
                                                    <td> {user.hoTen}</td>
                                                </tr>
                                                <tr>
                                                    <th className="title-tablle" width="30%">
                                                        Số điện thoại
                                                    </th>
                                                    <td>{user.soDT}</td>
                                                </tr>
                                                <tr>
                                                    <th className="title-tablle" width="30%">
                                                        Email
                                                    </th>
                                                    <td>{user.email}</td>
                                                </tr>
                                                <tr>
                                                    <th className="title-tablle" width="30%">
                                                        Tài khoản
                                                    </th>
                                                    <td>{user.taiKhoan}</td>
                                                </tr>
                                                <tr>
                                                    <th className="title-tablle" width="30%">
                                                        Mã nhóm
                                                    </th>
                                                    <td>{user.maNhom}</td>
                                                </tr>
                                                <tr>
                                                    <th className="title-tablle" width="30%">
                                                        Mã Loại người dùng
                                                    </th>
                                                    <td>{user.maLoaiNguoiDung}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="text-center mt-2 d-flex flex-row justify-content-center">
                                            <Link to="/" className="btn-prev p-2 text-white m-2">
                                                Quay Lại
                                            </Link>
                                            <ModalEditByUser
                                                item={user}
                                                maLoaiNguoiDung={maLoaiNguoiDung}
                                            />
                                        </div>
                                        <h3>Khoá học đã đăng kí</h3>
                                        <div className="row">
                                            {!user.chiTietKhoaHocGhiDanh ? (
                                                <>Bạn chưa đăng kí khoá học nào</>
                                            ) : (
                                                <>{mapCourseRegisted()}</>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </>
            ) : (
                <>Loading</>
            )}
        </>
    );
}
