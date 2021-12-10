import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUserSchema } from "../../../Services/UserManagerService";
import * as moment from "moment";
import { fetchCategory } from "../../../Redux/Actions/categoryAction";
import { formatDate, getDateCurrent, getDateNow } from "../../../constants/getDate";
import { AddCourseSchema } from "../../../Services/CourseManagerService";
export default function AddCourse() {
    const dispatch = useDispatch();
    let user = "";
    const category = useSelector((state) => state.category.category);
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);
    if (localStorage.getItem("userItem")) {
        user = JSON.parse(localStorage.getItem("userItem"));
        console.log(user);
    }

    const mapOptionCategory = () => {
        return category.map((item, index) => {
            return (
                <option value={item.maDanhMuc} key={index}>
                    {item.tenDanhMuc}
                </option>
            );
        });
    };

    const handleAddUser = (value) => {
        value.ngayTao = formatDate(value.ngayTao);

        console.log(value);
    };

    return (
        <>
            {category ? (
                <>
                    <div className="w-100  mx-auto ">
                        <h4 className="header_course_list p-0 mt-4 mb-3 pb-3">Thêm khoá học</h4>
                        <Formik
                            initialValues={
                                {
                                    maKhoaHoc: "",
                                    biDanh: "",
                                    tenKhoaHoc: "",
                                    moTa: "",
                                    luotXem: 0,
                                    danhGia: 0,
                                    hinhAnh: "",
                                    maNhom: "GP01",
                                    ngayTao: "",
                                    maDanhMucKhoaHoc: "BackEnd",
                                    taiKhoanNguoiTao: user.taiKhoan,
                                } || ""
                            }
                            validationSchema={AddCourseSchema}
                            onSubmit={(value) => handleAddUser(value)}
                        >
                            {(formikProps) => (
                                <Form>
                                    <div className="form-group pb-3">
                                        <div className="container p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Mã Khoá học</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="maKhoaHoc"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                    <ErrorMessage name="maKhoaHoc">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="col-md-6 col-sm-12">
                                                    <label>Mã danh mục khoá học</label>
                                                    <select
                                                        id=""
                                                        className="form-control"
                                                        name="maDanhMucKhoaHoc"
                                                        component="select"
                                                        onChange={formikProps.handleChange}
                                                    >
                                                        {mapOptionCategory()}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group pb-3">
                                        <div className="container p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Tên Khoá học</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="tenKhoaHoc"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                    <ErrorMessage name="tenKhoaHoc">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="col-md-6 col-sm-12">
                                                    <label>Bí danh</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="biDanh"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                    <ErrorMessage name="biDanh">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group pb-3">
                                        <div className="container p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Lượt xem</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="luotXem"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                    <ErrorMessage name="luotXem">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Đánh giá</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="danhGia"
                                                        onChange={formikProps.handleChange}
                                                    />
                                                    <ErrorMessage name="danhGia">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group pb-3">
                                        <div className="container p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Mã nhóm</label>
                                                    <select
                                                        id=""
                                                        className="form-control"
                                                        name="maNhom"
                                                        component="select"
                                                        onChange={formikProps.handleChange}
                                                    >
                                                        <option value="GP01">GP01</option>
                                                        <option value="GP02">GP02</option>
                                                        <option value="GP03">GP03</option>
                                                        <option value="GP04">GP04</option>
                                                        <option value="GP05">GP05</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Ngày taọ</label>
                                                    <Field
                                                        type="date"
                                                        className="form-control"
                                                        name="ngayTao"
                                                        onChange={formikProps.handleChange}
                                                        locate="pt-br"
                                                        format="dd-MM-yyyy"
                                                    />
                                                    <ErrorMessage name="ngayTao">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="container p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group pb-3">
                                                        <label>Hình Ảnh</label>

                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name="hinhAnh"
                                                            onChange={formikProps.handleChange}
                                                        />
                                                        <ErrorMessage name="hinhAnh">
                                                            {(msg) => (
                                                                <div className="text-danger">
                                                                    {msg}
                                                                </div>
                                                            )}
                                                        </ErrorMessage>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Tài khoản người tạo</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="taiKhoanNguoiTao"
                                                        onChange={formikProps.handleChange}
                                                        disabled
                                                    />
                                                    <ErrorMessage name="taiKhoanNguoiTao">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
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

                                    <div className="text-center ">
                                        <button className="btn-prev " type="submit">
                                            Submit
                                        </button>
                                        <button
                                            className="btn-prev "
                                            onClick={(e) => formikProps.resetForm()}
                                        >
                                            Reset Form
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </>
            ) : (
                <>Loading</>
            )}
        </>
    );
}
