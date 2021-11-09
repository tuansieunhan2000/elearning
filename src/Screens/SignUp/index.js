import React from "react";
import { Formik, Form, Field } from "formik";
export default function SignUpScreen() {
    const handleSubmit = (value) => {
        console.log(value);
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
                    maNhom: "",
                    email: "",
                }}
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
                        </div>
                        <div className="form-group">
                            <label>Mật Khẩu</label>
                            <Field
                                type="password"
                                className="form-control"
                                name="matKhau"
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Họ tên</label>

                            <Field
                                type="text"
                                className="form-control"
                                name="hoTen"
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>

                            <Field
                                type="text"
                                className="form-control"
                                name="soDT"
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>

                            <Field
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={formikProps.handleChange}
                            />
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
