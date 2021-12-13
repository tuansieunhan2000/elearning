import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingLazy from "../../../Components/LazyLoad";
import CourseTabList from "../../../Layouts/CategoryNav";
import Footer from "../../../Layouts/Footer";
import { fetchSearchCourses } from "../../../Redux/Actions/courseAction";

export default function CourseListSearch() {
    const { search } = useParams();
    const dispatch = useDispatch();
    const course = useSelector((state) => state.course.searchCourses);
    console.log("course", course.length);

    useEffect(() => {
        dispatch(fetchSearchCourses(search));
    }, [dispatch, search]);
    const renderCourseList = () => {
        console.log(course.length);
        if (course.length < 1) {
            return <div>Không tìm thây kết quả phù hợp</div>;
        } else {
            return course.map((item, index) => {
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
        }
    };
    return (
        <>
            {course ? (
                <>
                    <div>
                        <div className="container">
                            <h4 className="header_course_list p-0 pb-3 mt-4">Kết quả tìm kiếm</h4>

                            <div className="row">{renderCourseList()}</div>
                        </div>
                        <CourseTabList maDanhMucKhoahoc={"backEnd"} />
                        <Footer />
                    </div>
                </>
            ) : (
                <>
                    <LoadingLazy />
                </>
            )}
        </>
    );
}
