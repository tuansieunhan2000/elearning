import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import LoadingLazy from "../../../Components/LazyLoad";
import { STATUS_ICON_QUESTION } from "../../../constants/status";
import { fetchCategory } from "../../../Redux/Actions/categoryAction";
import { addCourse } from "../../../Redux/Actions/courseListAdmin";
import { AddCourseSchema } from "../../../Services/CourseManagerService";
export default function AddCourse() {
    const dispatch = useDispatch();
    let user = "";
    if (localStorage.getItem("userItem")) {
        user = JSON.parse(localStorage.getItem("userItem"));
    }
    const category = useSelector((state) => state.category.category);
    const [data, setdata] = useState({
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
    });
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    // const [data, setData] = useState();

    const mapOptionCategory = () => {
        return category.map((item, index) => {
            return (
                <option value={item.maDanhMuc} key={index}>
                    {item.tenDanhMuc}
                </option>
            );
        });
    };
    // let formData = new FormData();

    // const handleeChange = (e) => {
    //     let target = e.target;
    //     if (target.name === "hinhAnh") {
    //         setData((data) => ({
    //             ...data,
    //             hinhAnh: e.target.files[0],
    //         }));
    //     } else {
    //         setData((data) => ({
    //             ...data,
    //             [e.target.name]: e.target.value,
    //         }));
    //     }
    // };
    const handleAddUser = (value) => {
        // var formData = new FormData();
        // formData.append("file", data.hinhAnh);
        // formData.append("tenKhoaHoc", data.tenKhoaHoc);

        let form_data = new FormData();
        for (var key in data) {
            form_data.append(key, data[key]);
        }
        Swal.fire({
            title: "B???n c?? ch???c ch???n th??m kho?? h???c kh??ng?",
            iconHtml: STATUS_ICON_QUESTION,
            customClass: {
                icon: "no-border",
            },
            showCancelButton: true,
            confirmButtonText: "Ch???c ch???n",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addCourse(value));
                setdata({
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
                });
                // dispatch(addImgCourse(form_data));

                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    return (
        <>
            {category ? (
                <>
                    <div className="w-100  mx-auto ">
                        <h4 className="header_course_list p-0 mt-4 mb-3 pb-3">Th??m kho?? h???c</h4>
                        <Formik
                            initialValues={data || ""}
                            validationSchema={AddCourseSchema}
                            onSubmit={(value) => handleAddUser(value)}
                        >
                            {({ handleChange, handleReset }) => (
                                <Form>
                                    <div className="form-group pb-3">
                                        <div className="container p-0">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <label>M?? Kho?? h???c</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="maKhoaHoc"
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name="maKhoaHoc">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="col-md-6 col-sm-12">
                                                    <label>M?? danh m???c kho?? h???c</label>
                                                    <select
                                                        id=""
                                                        className="form-control"
                                                        name="maDanhMucKhoaHoc"
                                                        component="select"
                                                        onChange={handleChange}
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
                                                    <label>T??n Kho?? h???c</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="tenKhoaHoc"
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name="tenKhoaHoc">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="col-md-6 col-sm-12">
                                                    <label>B?? danh</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="biDanh"
                                                        onChange={handleChange}
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
                                                    <label>L?????t xem</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="luotXem"
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage name="luotXem">
                                                        {(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <label>????nh gi??</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="danhGia"
                                                        onChange={handleChange}
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
                                                    <label>M?? nh??m</label>
                                                    <select
                                                        id=""
                                                        className="form-control"
                                                        name="maNhom"
                                                        component="select"
                                                        onChange={handleChange}
                                                    >
                                                        <option value="GP01">GP01</option>
                                                        <option value="GP02">GP02</option>
                                                        <option value="GP03">GP03</option>
                                                        <option value="GP04">GP04</option>
                                                        <option value="GP05">GP05</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <label>Ng??y ta???</label>
                                                    <Field
                                                        type="date"
                                                        className="form-control"
                                                        name="ngayTao"
                                                        onChange={handleChange}
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
                                                        <label>H??nh ???nh</label>

                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name="hinhAnh"
                                                            onChange={handleChange}
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
                                                    <label>T??i kho???n ng?????i t???o</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="taiKhoanNguoiTao"
                                                        onChange={handleChange}
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
                                        <label>M?? t???</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="moTa"
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="moTa">
                                            {(msg) => <div className="text-danger">{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className="text-center ">
                                        <button className="btn-prev " type="submit">
                                           Th??m kho?? h???c
                                        </button>

                                        <button className="btn-prev " onClick={handleReset}>
                                           ?????t l???i
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
