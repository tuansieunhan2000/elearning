import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailCourse } from "../../Redux/Actions/courseAction";
import "./main.scss";
export default function DetailScreen() {
    const dispatch = useDispatch();
    const detailCourse = useSelector((state) => state.course.courseDetail) || {
        hinhAnh: "",
        ngayTao: "",
    };

    let { id } = useParams();
    useEffect(() => {
        dispatch(fetchDetailCourse(id));
    }, [dispatch, id]);
    return (
        <div className="container detail-course">
            <div className="row">
                <div className="address-link">
                    Trang chu <i class="fas fa-angle-right"></i>
                    {/* {detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc} */}
                    <i class="fas fa-angle-right"></i> {detailCourse.tenKhoaHoc}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img
                        className="card-img-top"
                        style={{ width: "300px", height: "250px" }}
                        src={detailCourse.hinhAnh}
                        alt={detailCourse.hinhAnh}
                    />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">Ngay tao: {detailCourse.ngayTao}</div>
            </div>
        </div>
        // <div className="card border-primary">
        //     <img
        //         className="card-img-top"
        //         style={{ width: "300px", height: "250px" }}
        //         src={detailCourse.hinhAnh}
        //         alt={detailCourse.hinhAnh}
        //     />
        //     <div className="card-body">
        //         <h4 className="card-title">Ngay tao: {detailCourse.ngayTao}</h4>
        //         <p className="card-text">Text</p>
        //     </div>
        // </div>
    );
}
