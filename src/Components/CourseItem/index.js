import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";
export default function CourseItem({ courseItem }) {
    const limitDisplayName = (string) => {
        if (string) {
            return string.length > 50 ? string.substr(0, 40) + "..." : string;
        }
        return "";
    };
    return (
        <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img
                className="card-img-top"
                style={{ width: "100%", height: "200px" }}
                src={courseItem.hinhAnh}
                alt={courseItem.hinhAnh}
            />
            <div className="card-body">
                <h4 className="card-title">{limitDisplayName(courseItem.tenKhoaHoc)}</h4>
                <div className="cardContent">
                    <div className="content d-flex justify-content-between py-1 flex-colum align-items-center">
                        <p>{courseItem.ngayTao}</p>
                        <p>Rating : 5.0</p>
                    </div>
                    <div className="d-flex justify-content-center py-1 flex-colum align-items-center">
                        <Link to={`/detail/${courseItem.maKhoaHoc}`} className="btn-detail ">
                            Chi Tiết
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
