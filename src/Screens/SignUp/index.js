import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { register } from "../../Redux/Actions/userAction";
import { signUpUserSchema } from "../../Services/UserService";

export default function SignUpScreen() {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleRegister = (value) => {
        dispatch(register(value))
            .then(() => {
                console.log(1231);
                history.push("/signin");
            })
            .catch(() => {
                console.log(123124);
            });
    };
    return (
        <div className="w-50 mx-auto">
            <h4 className="text-center display-4">Đăng kí</h4>
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
                onSubmit={(value) => handleRegister(value)}
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
