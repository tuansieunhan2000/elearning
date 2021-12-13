import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { STATUS_ICON_WARNING } from "../../constants/status";
import { updateUserByUser } from "../../Redux/Actions/userAction";
import { AddUserSchema } from "../../Services/UserManagerService";
import "./ModalEditUserByUser.scss";
const ModalEditByUser = ({ item, maLoaiNguoiDung }) => {
    const dispatch = useDispatch();
    const [popup, setpopup] = useState(false);
    const modalOpen = () => setpopup(true);
    const modalClose = () => setpopup(false);

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
                dispatch(updateUserByUser(value));
            }
        });
    };
    const [passwordShown, setPasswordShown] = useState(false);
    const mapOptionTypeUser = () => {
        return maLoaiNguoiDung.map((item, index) => {
            return (
                <option value={item.maLoaiNguoiDung} key={index}>
                    {item.tenLoaiNguoiDung}
                </option>
            );
        });
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div>
            <div>
                <button className="btn-prev p-2 text-white m-2" onClick={modalOpen}>
                    <i className="fas fa-edit " onClick={modalOpen}></i>Sửa thông tin
                </button>
            </div>
            <Modal show={popup} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sửa thông tin người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {item ? (
                        <>
                            <Formik
                                initialValues={{
                                    taiKhoan: item.taiKhoan || "",
                                    matKhau: item.matKhau || "",
                                    hoTen: item.hoTen || "",
                                    soDT: item.soDT || "",
                                    maNhom: item.maNhom || "GP01",
                                    email: item.email || "",
                                    maLoaiNguoiDung: item.maLoaiNguoiDung || "",
                                }}
                                onSubmit={(value) => {
                                    handleEditUser(value);
                                }}
                                validator={() => ({})}
                                validationSchema={AddUserSchema}
                            >
                                {({ handleChange, handleSubmit, resetForm }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="form-group pb-3">
                                            <label>Tài khoản</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="taiKhoan"
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="taiKhoan">
                                                {(msg) => <div className="text-danger">*{msg}</div>}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group pb-3">
                                            <label>Họ tên</label>

                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="hoTen"
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="hoTen">
                                                {(msg) => <div className="text-danger">{msg}</div>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="form-group pb-3">
                                            <label>Số điện thoại</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="soDT"
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="soDT">
                                                {(msg) => <div className="text-danger">{msg}</div>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="form-group pb-3">
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
                                                {(msg) => <div className="text-danger">{msg}</div>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="form-group pb-3">
                                            <label>Email</label>

                                            <Field
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="email">
                                                {(msg) => <div className="text-danger">{msg}</div>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="form-group pb-3">
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
                                        <div className="form-group pb-3">
                                            <label>Mã loại người dùng</label>
                                            <Field
                                                className="form-control"
                                                name="maLoaiNguoiDung"
                                                as="select"
                                            >
                                                {mapOptionTypeUser()}
                                            </Field>
                                        </div>

                                        <div className="text-center ">
                                            <button className="btn-prev " type="submit">
                                                Sửa
                                            </button>
                                            <button
                                                className="btn-prev "
                                                type="button"
                                                onClick={(e) => resetForm()}
                                            >
                                               Đặt lại Form
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </>
                    ) : (
                        <>Loading</>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalEditByUser;
