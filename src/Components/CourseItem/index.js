import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";
export default function CourseItem({ courseItem }) {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 course-item p-3" key={courseItem.maKhoaHoc}>
            <div className="item">
                <div className="img position-relative overflow-hidden content-hover">
                    <img
                        className="w-100"
                        style={{ height: "180px" }}
                        src={courseItem.hinhAnh}
                        alt=""
                    />
                    <div className="info d-flex justify-content-center align-items-center flex-column position-absolute text-white">
                        <Link
                            to={`/detail/${courseItem.maKhoaHoc}`}
                            className="d-block mt-3 mb-2 text-white text-decoration-none"
                        >
                            Chi tiết
                        </Link>
                        <p>Released: {courseItem.ngayTao}</p>
                    </div>
                </div>
                <h4 className="text-center">{courseItem.tenKhoaHoc}</h4>
            </div>
        </div>
    );
}
