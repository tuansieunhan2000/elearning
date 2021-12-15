import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LoadingLazy from "../../Components/LazyLoad";
import { fetchCourseSameCategory } from "../../Redux/Actions/courseAction";

SameCategory.propTypes = {
    maDanhMucKhoahoc: PropTypes.string,
};
export default function SameCategory({ DanhMucKhoahoc }) {
    const { maDanhMucKhoahoc } = DanhMucKhoahoc;
    const dispatch = useDispatch();

    const course = useSelector((state) => state.course.courseListDetail) || "";

    useEffect(() => {
        dispatch(fetchCourseSameCategory(maDanhMucKhoahoc));
    }, [dispatch, DanhMucKhoahoc, maDanhMucKhoahoc]);

    const ref = useRef({});

    const responsive = [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 568,
            settings: {
                rows: 1,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            },
        },

        {
            breakpoint: 456,
            settings: {
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ];
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: responsive,
    };

    const mapCourseList = () => {
        return course.map((courseItem, index) => {
            return (
                <div className="course-item px-3" key={index}>
                    <div className="item">
                        <div className="img position-relative overflow-hidden content-hover">
                            <img
                                className="w-100"
                                style={{ height: "120px" }}
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
        });
    };
    return (
        <div>
            {course === "" ? (
                <>
                    <LoadingLazy />
                </>
            ) : (
                <div>
                    <section className="same-category mb-lg-5 mt-lg-4 ">
                        <div className="container">
                            <h1 className="header_course_list pb-3">Khoá học cùng thể loại</h1>
                            <div className="have_content">
                                <Slider ref={ref} {...settings}>
                                    {mapCourseList()}
                                </Slider>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
