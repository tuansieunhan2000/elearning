import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { courseService } from "../../Services";
import { FETCH_DETAIL_COURCE } from "../../Redux/Types";
import { fetchDetailCourse } from "../../Redux/Actions/courseAction";

export default function DetailScreen() {
    const dispatch = useDispatch();
    const detailCourse = useSelector((state) => state.course.courseDetail) || {
        hinhAnh:"",
        ngayTao:""
    };
    console.log(detailCourse);
    useEffect(() => {
        dispatch(fetchDetailCourse());
    }, []);
    return (
        <div className="card border-primary">
            <img
                className="card-img-top"
                style={{ width: "300px", height: "250px" }}
                src={detailCourse.hinhAnh}
            />
            <div className="card-body">
                <h4 className="card-title">Ngay tao: {detailCourse.ngayTao}</h4>
                <p className="card-text">Text</p>
            </div>
        </div>
    );
}
