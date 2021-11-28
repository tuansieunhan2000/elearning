import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import { GetInfoUser, UserRegisterCourse } from "../../Redux/Actions/userAction";
import "./main.scss";

export default function DetailCourse({ detailCourse }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.user.info) || {};
    console.log("user", user);
    const handleRegisterCourse = () => {
        if (localStorage.getItem("userItem")) {
            let taiKhoan = JSON.parse(localStorage.getItem("userItem")).taiKhoan;
            console.log("taiKhoan", taiKhoan);
            let data = {
                taiKhoan: taiKhoan,
                maKhoaHoc: detailCourse.maKhoaHoc,
            };

            dispatch(UserRegisterCourse(data));
            dispatch(GetInfoUser(taiKhoan));
        } else {
            Swal.fire({
                title: "Bạn hiên chưa đăng nhập!",
                text: "Bạn có muốn di chuyển tới trang đăng nhập không!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đăng nhập!",
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/signin");
                }
            });
        }
    };

    return (
        <div className="container detail-course">
            <div className="row">
                <div className="address-link">
                    <Link to={`/`}> Trang chủ </Link>
                    <i className="fas fa-angle-right"></i>
                    <Link to={`/courselist/${detailCourse.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                        {detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                    </Link>
                    <i className="fas fa-angle-right"></i> {detailCourse.tenKhoaHoc}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <img
                        className="card-img-top"
                        src={detailCourse.hinhAnh}
                        alt={detailCourse.hinhAnh}
                    />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <table className="table borderless">
                        <tbody>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Tên khóa học
                                </th>
                                <td>{detailCourse.tenKhoaHoc}</td>
                            </tr>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Ngày Tạo
                                </th>
                                <td>{detailCourse.ngayTao}</td>
                            </tr>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Danh mục
                                </th>
                                <td>{detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}</td>
                            </tr>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Mô tả
                                </th>
                                <td>{detailCourse.moTa}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn-prev p-2" onClick={handleRegisterCourse}>
                        Đăng kí
                    </button>
                </div>
            </div>
        </div>
    );
}
