import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { API_REGISTER_USER } from "../../constants/api";
import { userSer, userService } from "../../Services";

const signUpUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
    matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
    hoTen: yup.string().required("Vui lòng nhập nhập họ tên"),
    soDT: yup
        .string()
        .matches(/^(84|0[3|5|7|8|9])+([0-9]{8})\b/)
        .required("Vui lòng nhập số điện thoại"),
    maNhom: yup.string(),
    email: yup.string().required("Vui lòng nhập tài khoản").email("Email Không hợp lệ"),
});
export default function SignUpScreen() {
    const handleSubmit = (value) => {
        console.log(value);
        userService.SignUp.then((res) => console.log(res)).catch((err) => console.log(err));
    };
    return (
        <div className="w-50 mx-auto">
            <h4 className="text-center display-4">Sign up</h4>
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    hoTen: "",
                    soDT: "",
                    maNhom: "GP01",
                    email: "",
                }}
                validationSchema={signUpUserSchema}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <Form>
                        <div className="form-group">
                            <label>Tài khoản</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="taiKhoan"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="taiKhoan">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Mật Khẩu</label>
                            <Field
                                type="password"
                                className="form-control"
                                name="matKhau"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="matKhau">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Họ tên</label>

                            <Field
                                type="text"
                                className="form-control"
                                name="hoTen"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="hoTen">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="soDT"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="soDT">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Email</label>

                            <Field
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="email">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Mã lớp học</label>

                            <select
                                name=""
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
                        <div className="text-center">
                            <button className="btn btn-success" type="submit">
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            />
        </div>
    );
}
