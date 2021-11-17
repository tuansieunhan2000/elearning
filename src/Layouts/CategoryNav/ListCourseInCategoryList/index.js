import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";
export default function ListCourseInCategoryList({ item }) {
    console.log(item);
    return (
        <div
            className="tab-pane fade show active "
            id={`pills-${item.maDanhMuc}`}
            role="tabpanel"
            aria-labelledby={`pills-${item.maDanhMuc}-tab`}
        >
            <Link to={`/detail/${item.maKhoaHoc}`} className="item-course-category">
                <div className="item-detail" key={item.id}>
                    <div className="item-body">
                        <h4 className="item-img">
                            <img src={item.hinhAnh} alt="" className="w-100" />
                        </h4>
                        <div className="item-title">
                            <div className="name_course">{item.tenKhoaHoc}</div>
                            <div className="item-content d-flex justify-content-between">
                                <div className="ngayTao"> {item.ngayTao}</div>
                                <div className="luotXem">Lượt xem :{item.luotXem}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
