import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddUserSchema } from "../../../Services/UserManagerService";
import { actAddUserApi } from "./modules/action";

export default function AddUser({ maLoaiNguoiDung }) {
    const dispatch = useDispatch();
    const mapOptionTypeUser = () => {
        return maLoaiNguoiDung.map((item, index) => {
            return (
                <option value={item.maLoaiNguoiDung} key={index}>
                    {item.tenLoaiNguoiDung}
                </option>
            );
        });
    };

    const handleAddUser = (value) => {
        dispatch(actAddUserApi(value));
    };
    return (
        <div className="w-100  mx-auto ">
            <h4 className="header_course_list p-0 mt-4 mb-3 pb-3">Thêm người dùng</h4>
            <Formik
                initialValues={
                    {
                        taiKhoan: "",
                        matKhau: "",
                        hoTen: "",
                        soDT: "",
                        maNhom: "GP01",
                        email: "",
                        maLoaiNguoiDung: "GV",
                    } || ""
                }
                validationSchema={AddUserSchema}
                onSubmit={(value) => handleAddUser(value)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-group pb-3">
                            <label>Tài khoản</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="taiKhoan"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="taiKhoan">
                                {(msg) => <div className="text-danger">*{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                            <label>Mật Khẩu</label>
                            <Field
                                type="password"
                                className="form-control"
                                name="matKhau"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="matKhau">
                                {(msg) => <div className="text-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                            <label>Họ tên</label>

                            <Field
                                type="text"
                                className="form-control"
                                name="hoTen"
                                onChange={formikProps.handleChange}
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
                                onChange={formikProps.handleChange}
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
                                onChange={formikProps.handleChange}
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
                                onChange={formikProps.handleChange}
                            >
                                <option>GP01</option>
                                <option>GP02</option>
                                <option>GP03</option>
                            </select>
                        </div>
                        <div className="form-group pb-3">
                            <label>Mã loại người dùng</label>
                            <Field className="form-control" name="maLoaiNguoiDung" as="select">
                                {mapOptionTypeUser()}
                            </Field>
                        </div>

                        <div className="text-center ">
                            <button className="btn-prev " type="submit">
                                Submit
                            </button>
                            <button className="btn-prev " onClick={(e) => formikProps.resetForm()}>
                                Reset Form
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
