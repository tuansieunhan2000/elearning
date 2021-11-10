import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { courseService } from "../../Services";

export default function DetailScreen() {
    const dispatch = useDispatch();
    const detailCourse = useSelector((state) => state.course.courseDetail);
    console.log(detailCourse);
    useEffect(() => {
        courseService.DetailCourse.then((res) => {
            dispatch({
                type: "FETCH_DETAIL_COURCE",
                payload: res.data,
            });
        }).catch((err) => console.log(err));
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
