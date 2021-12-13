import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingLazy from "../../../Components/LazyLoad";
import { fetchCategory } from "../../../Redux/Actions/categoryAction";
import { editCourse, searchCourse } from "../../../Redux/Actions/courseListAdmin";
import { EditCourseSchema } from "../../../Services/CourseManagerService";
export default function EditCourseByAdmin() {
    const dispatch = useDispatch();
    const { maKhoaHoc } = useParams();
    const category = useSelector((state) => state.category.category);
    const course = useSelector((state) => state.manageUserByAdminReducer.dataCourseEdit);
    useEffect(() => {
        dispatch(fetchCategory());
        dispatch(searchCourse(maKhoaHoc));
    }, [dispatch, maKhoaHoc]);

    const mapOptionCategory = () => {
        return category.map((item, index) => {
            return (
                <option value={item.maDanhMuc} key={index}>
                    {item.tenDanhMuc}
                </option>
            );
        });
    };

    const handleEditCourse = (value) => {
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
                dispatch(editCourse(value));
            }
        });
    };

    return (
        <>
            {course &&
            Object.keys(course).length !== 0 &&
            Object.getPrototypeOf(course) === Object.prototype &&
            category ? (
                <>
                    <div className="w-100  mx-auto container">
                        <h4 className="header_course_list  mt-5 mb-3">
                            <Link to="/admin">
                                <i className="fas fa-home"></i>
                            </Link>
                            <i class="fas fa-chevron-right"></i>
                            <Link to="/admin/coursemanager" className="pr-3">
                                Quản lý khoá học
                            </Link>
                            <i class="fas fa-chevron-right"></i>
                            Cập nhật thông tin khoá học
                        </h4>
                        <Formik
                            initialValues={
                                {
                                    maKhoaHoc: course.maKhoaHoc || "",
                                    biDanh: course.biDanh || "",
                                    tenKhoaHoc: course.tenKhoaHoc || "",
                                    moTa: course.moTa || "",
                                    luotXem: course.luotXem || "",
                                    danhGia: course.moTa || "",
                                    hinhAnh: course.hinhAnh || "",
                                    maNhom: course.maNhom || "",
                                    ngayTao: course.ngayTao || "",
                                    maDanhMucKhoaHoc: course.danhMucKhoaHoc.maDanhMucKhoahoc || "",
                                    taiKhoanNguoiTao: course.nguoiTao.taiKhoan || "",
                                } || ""
                            }
                            validationSchema={EditCourseSchema}
                            onSubmit={(value) => handleEditCourse(value)}
                        >
                            {({ handleChange, handleReset }) => (
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
                                                        onClick={handleChange}
                                                        disabled
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
                                                        onClick={handleChange}
                                                        defaultValue={
                                                            course.danhMucKhoaHoc.maDanhMucKhoahoc
                                                        }
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
                                                        onClick={handleChange}
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
                                                        onClick={handleChange}
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
                                                        onClick={handleChange}
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
                                                        onClick={handleChange}
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
                                                        onClick={handleChange}
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
                                                        type="text"
                                                        className="form-control"
                                                        name="ngayTao"
                                                        onClick={handleChange}
                                                        locate="pt-br"
                                                        format="dd-MM-yyyy"
                                                        disabled
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
                                                        <label>Mô tả</label>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            name="moTa"
                                                            onChange={handleChange}
                                                        />
                                                        <ErrorMessage name="moTa">
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
                                                        onClick={handleChange}
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

                                    {/* <div className="form-group pb-3">
                                        <label>Hình Ảnh</label>

                                        <img src={course.hinhAnh} alt="" />
                                    </div> */}

                                    <div className="text-center ">
                                        <button className="btn-prev " type="submit">
                                            Submit
                                        </button>

                                        <button className="btn-prev " onClick={handleReset}>
                                            ĐẶT LẠI
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </>
            ) : (
                <>
                    <LoadingLazy />
                </>
            )}
        </>
    );
}
