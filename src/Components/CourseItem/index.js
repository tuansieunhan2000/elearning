import React from "react";

export default function CourseItem({ courseItem }) {
    const limitDisplayName = (string) => {
        if (string) {
            return string.length > 15 ? string.substr(0, 50) + "..." : string;
        }
        return "";
    };
    return (
        <div className="card ">
            <img
                className="card-img-top"
                style={{ width: "100%", height: "250px" }}
                src={courseItem.hinhAnh}
            />
            <div className="card-body">
                <h4 className="card-title">{limitDisplayName(courseItem.tenKhoaHoc)}</h4>
                <p className="card-text">{courseItem.ngayTao}</p>
                <p className="card-text">Rating : 5.0</p>
            </div>
        </div>
    );
}
