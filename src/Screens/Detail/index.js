import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import DetailCourse from "../../Layouts/DetailCourse";
import Footer from "../../Layouts/Footer";
import SameCategory from "../../Layouts/SameCategory";
import { fetchDetailCourse } from "../../Redux/Actions/courseAction";

export default function DetailScreen() {
    const dispatch = useDispatch();
    const detailCourse = useSelector((state) => state.course.courseDetail) || {
        hinhAnh: "",
        ngayTao: "",
        danhMucKhoaHoc: {
            tenDanhMucKhoaHoc: "",
        },
    };

    let { id } = useParams();
    useEffect(() => {
        dispatch(fetchDetailCourse(id));
    }, [dispatch, id]);
    return (
        <div>
            <DetailCourse detailCourse={detailCourse} />
            <SameCategory DanhMucKhoahoc={detailCourse.danhMucKhoaHoc} />
            <Footer />
        </div>
    );
}
