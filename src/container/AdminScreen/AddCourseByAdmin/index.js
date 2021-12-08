import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddUserSchema } from "../../../Services/UserManagerService";

export default function AddCourse() {
    const dispatch = useDispatch();
    //     const mapOptionTypeUser = () => {
    //         return maLoaiNguoiDung.map((item, index) => {
    //             return (
    //                 <option value={item.maLoaiNguoiDung} key={index}>
    //                     {item.tenLoaiNguoiDung}
    //                 </option>
    //             );
    //         });
    //     };

    const handleAddUser = (value) => {
        //    dispatch(actAddUserApi(value));
        console.log(value);
    };
    const d = new Date();

    return (
        <div className="w-100  mx-auto ">
            <h4 className="header_course_list p-0 mt-4 mb-3 pb-3">Thêm người dùng</h4>
            <Formik
                initialValues={
                    {
                        maKhoaHoc: "",
                        tenKhoaHoc: "",
                        moTa: "",
                        luotXem: "",
                        danhGia: "",
                        hinhAnh: "",
                        maNhom: "",
                        ngayTao: d.getDate(),
                        maDanhMucKhoaHoc: "",
                        taiKhoanNguoiTao: "",
                    } || ""
                }
                //  validationSchema={AddUserSchema}
                onSubmit={(value) => handleAddUser(value)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-group pb-3">
                            <label>Mã Khoá học</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="maKhoaHoc"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="maKhoaHoc">
                                {(msg) => <div className="text-danger">*{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                            <label>Tên Khoá học</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="tenKhoaHoc"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="tenKhoaHoc">
                                {(msg) => <div className="text-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                            <label>Mô tả</label>
                            <Field
                                type="text"
                                className="form-control"
                                name="moTa"
                                onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="moTa">
                                {(msg) => <div className="text-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-6">
                                        <label>Lượt xem</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="luotXem"
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name="luotXem">
                                            {(msg) => <div className="text-danger">{msg}</div>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="col-6">
                                        <label>Lượt xem</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="luotXem"
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name="luotXem">
                                            {(msg) => <div className="text-danger">{msg}</div>}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </div>
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
                                {/* {mapOptionTypeUser()} */}
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
