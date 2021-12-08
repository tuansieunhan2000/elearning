import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateUserByAdmin } from "../../Redux/Actions/UserAdminAction";
import { EditUserSchema } from "../../Services/UserManagerService";

const ModalEdituser = ({ item, maLoaiNguoiDung }) => {
    const dispatch = useDispatch();

    const [popup, setpopup] = useState(false);
    const modalOpen = () => setpopup(true);
    const modalClose = () => setpopup(false);
    let user = item;

    const handleEditUser = (value) => {
        console.log(value);
        Swal.fire({
            title: "Bạn có chắc chắn sửa không?",
            text: "Bạn sẽ không thể phục hồi được",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
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

    const [data, setdata] = useState({
        taiKhoan: user.taiKhoan || "",
        matKhau: user.matKhau || "",
        hoTen: user.hoTen || "",
        soDT: user.soDT || "",
        maNhom: user.maNhom || "GP01",
        email: user.email || "",
        maLoaiNguoiDung: user.maLoaiNguoiDung || "",
    });

    return (
        <div>
            <i className="fas fa-edit" onClick={modalOpen}></i>
            <Modal show={popup} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sửa thông tin ngừoi dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={data || ""}
                        onSubmit={(value) => {
                            handleEditUser(value);
                        }}
                        validator={() => ({})}
                        validationSchema={EditUserSchema}
                        s
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
                                        disabled
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
                                        Submit
                                    </button>
                                    <button
                                        className="btn-prev "
                                        type="button"
                                        onClick={(e) => resetForm()}
                                    >
                                        Reset Form
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalEdituser;
