import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingLazy from "../../../Components/LazyLoad";
import { STATUS_ICON_WARNING } from "../../../constants/status";
import { GetMaNguoiDung } from "../../../Redux/Actions/userAction";
import { getAllUserByAdminAction, updateUserByAdmin } from "../../../Redux/Actions/UserAdminAction";
export default function EditUserByAdmin() {
    const dispatch = useDispatch();
    const { taiKhoan } = useParams();

    useEffect(() => {
        dispatch(GetMaNguoiDung());
        dispatch(getAllUserByAdminAction());
    }, [dispatch]);
    const maLoaiNguoiDung = useSelector((state) => state.maLoaiNguoiDung.maLoaiNguoiDung);
    const AllProduct = useSelector((state) => state.maLoaiNguoiDung.allUser);
    let user = {};

    if (AllProduct) {
        for (const obj of AllProduct) {
            if (obj.taiKhoan === taiKhoan) {
                user = obj;
            }
        }
    }

    const handleEditUser = (value) => {
        console.log(value);
        Swal.fire({
            title: "Bạn có chắc chắn sửa không?",
            iconHtml: STATUS_ICON_WARNING,
            text: "Bạn sẽ không thể phục hồi được",
            customClass: {
                icon: "no-border",
            },
            showCancelButton: true,
            confirmButtonText: "Chắc chắn",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(updateUserByAdmin(value));
            }
        });
    };
    const mapOptionTypeUser = () => {
        return maLoaiNguoiDung.map((item, index) => {
            return (
                <option value={item.maLoaiNguoiDung} key={index}>
                    {item.tenLoaiNguoiDung}
                </option>
            );
        });
    };
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <>
            {user &&
            Object.keys(user).length !== 0 &&
            Object.getPrototypeOf(user) === Object.prototype ? (
                <>
                    <div className="w-75  mx-auto ">
                        <h4 className="header_course_list  mt-5 mb-3">
                            <Link to="/admin">
                                <i className="fas fa-home"></i>
                            </Link>
                            <i class="fas fa-chevron-right"></i>
                            <Link to="/admin/usermanager" className="pr-3">
                                Quản lý người dùng
                            </Link>
                            <i class="fas fa-chevron-right"></i>
                            Cập nhật thông tin người dùng
                        </h4>

                        <div className="row">
                            <Formik
                                initialValues={{
                                    taiKhoan: user.taiKhoan || "",
                                    matKhau: user.matKhau || "",
                                    hoTen: user.hoTen || "",
                                    soDt: user.soDt || "",
                                    maNhom: user.maNhom || "GP01",
                                    email: user.email || "",
                                    maLoaiNguoiDung: user.maLoaiNguoiDung || "",
                                }}
                                onSubmit={(value) => {
                                    handleEditUser(value);
                                }}
                                validator={() => ({})}
                                // validationSchema={EditUserSchema}
                            >
                                {({ handleChange, handleSubmit, handleReset }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <label>Tài khoản</label>
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="taiKhoan"
                                                    onChange={handleChange}
                                                    disabled
                                                />
                                                <ErrorMessage name="taiKhoan">
                                                    {(msg) => (
                                                        <div className="text-danger">*{msg}</div>
                                                    )}
                                                </ErrorMessage>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <label>Mật Khẩu</label>
                                                <Field
                                                    type={passwordShown ? "text" : "password"}
                                                    className="form-control "
                                                    id="positionInput"
                                                    name="matKhau"
                                                    onChange={handleChange}
                                                />

                                                {passwordShown ? (
                                                    <i
                                                        className="fas fa-eye field-icon"
                                                        onClick={togglePassword}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        className="far fa-eye-slash field-icon"
                                                        onClick={togglePassword}
                                                    ></i>
                                                )}

                                                <ErrorMessage name="matKhau">
                                                    {(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <label>Họ tên</label>

                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="hoTen"
                                                    onChange={handleChange}
                                                />
                                                <ErrorMessage name="hoTen">
                                                    {(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                </ErrorMessage>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <label>Số điện thoại</label>
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="soDt"
                                                    onChange={handleChange}
                                                />
                                                <ErrorMessage name="soDt">
                                                    {(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <label>Mã loại người dùng</label>
                                                <Field
                                                    className="form-control"
                                                    name="maLoaiNguoiDung"
                                                    as="select"
                                                >
                                                    {mapOptionTypeUser()}
                                                </Field>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <label>Mã lớp học</label>

                                                <select
                                                    id=""
                                                    className="form-control"
                                                    name="maNhom"
                                                    component="select"
                                                    onChange={handleChange}
                                                >
                                                    <option>GP01</option>
                                                    <option>GP02</option>
                                                    <option>GP03</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group pb-3">
                                            <label>Email</label>

                                            <Field
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                onChange={handleChange}
                                                disabled
                                            />
                                            <ErrorMessage name="email">
                                                {(msg) => <div className="text-danger">{msg}</div>}
                                            </ErrorMessage>
                                        </div>

                                        <div className="text-center ">
                                            <button className="btn-prev " type="submit">
                                                Submit
                                            </button>

                                            <button className="btn-prev " onClick={handleReset}>
                                                ĐẶT LẠI
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <LoadingLazy />
                </>
            )}
        </>
    );
}
