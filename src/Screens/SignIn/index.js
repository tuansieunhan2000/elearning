import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signInUserSchema } from "../../Services/UserService";
export default function SignInScreen() {
    const handleSubmit = (value) => {
        console.log(value);
    };
    return (
        <div className="w-50 mx-auto">
            <h4 className="text-center display-4">Đăng nhập</h4>
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                }}
                validationSchema={signInUserSchema}
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
                            <label>Mật khẩu</label>
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
                        <button className="btn btn-success" type="submit">
                            Đăng Nhập
                        </button>
                    </Form>
                )}
            />
        </div>
    );
}
