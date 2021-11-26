import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createAction } from "../../../Redux/Actions";
import { Login } from "../../../Redux/Actions/userAction";
import { GET_USER_HEADERS } from "../../../Redux/Types";
import { signInUserSchema } from "../../../Services/UserService";

export default function SignInScreen() {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogin = (value) => {
        dispatch(Login(value))
            .then(() => {
                const userInfo = localStorage.getItem("userItem");
                axios.interceptors.request.use(function (config) {
                    const token = JSON.parse(userInfo).accessToken;
                    config.headers.Authorization = token ? `Bearer ${token}` : "";
                    console.log("config when login success ", config);
                    dispatch(createAction(GET_USER_HEADERS, config.headers.Authorization));

                    return config;
                });
                history.push("/");
            })
            .catch(() => {});
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
                onSubmit={(value) => handleLogin(value)}
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
