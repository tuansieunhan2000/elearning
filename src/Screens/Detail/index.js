import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailCourse } from "../../Redux/Actions/courseAction";

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
        <div className="card border-primary">
            <img
                className="card-img-top"
                style={{ width: "300px", height: "250px" }}
                src={detailCourse.hinhAnh}
                alt={detailCourse.hinhAnh}
            />
            <div className="card-body">
                <h4 className="card-title">Ngay tao: {detailCourse.ngayTao}</h4>
                <p className="card-text">Text</p>
            </div>
        </div>
    );
}
