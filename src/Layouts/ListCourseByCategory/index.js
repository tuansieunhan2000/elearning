import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";
export default function ListCourseByCategory({ courseListByCategory }) {
    console.log("courseListByCategory", courseListByCategory);
    const mapItem = () => {
        return courseListByCategory.map((item, index) => {
            return (
                <div className="col-md-3 col-sm-6 col-xs-12 course-item p-3" key={index}>
                    <div className="item">
                        <div className="img position-relative overflow-hidden content-hover">
                            <img
                                className="w-100"
                                style={{ height: "180px" }}
                                src={item.hinhAnh}
                                alt=""
                            />
                            <div className="info d-flex justify-content-center align-items-center flex-column position-absolute text-white">
                                <Link
                                    to={`/detail/${item.maKhoaHoc}`}
                                    className="d-block mt-3 mb-2 text-white text-decoration-none"
                                >
                                    Chi tiết
                                </Link>
                                <p>Released: {item.ngayTao}</p>
                            </div>
                        </div>
                        <h4 className="text-center">{item.tenKhoaHoc}</h4>
                    </div>
                </div>
            );
        });
    };
    return (
        <div>
            {courseListByCategory === "" ? (
                <>Still loading...</>
            ) : (
                <section className="new">
                    <div className="container">
                        <h1>{courseListByCategory[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc} </h1>
                        <div className="row">{mapItem()}</div>
                    </div>
                </section>
            )}
        </div>
    );
}
