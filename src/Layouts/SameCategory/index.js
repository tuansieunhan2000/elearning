import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { fetchCourseSameCategory } from "../../Redux/Actions/courseAction";

SameCategory.propTypes = {
    maDanhMucKhoahoc: PropTypes.string,
};
export default function SameCategory({ DanhMucKhoahoc }) {
    const { tenDanhMucKhoaHoc, maDanhMucKhoahoc } = DanhMucKhoahoc;
    const dispatch = useDispatch();

    const course = useSelector((state) => state.course.courseListDetail) || "";

    useEffect(() => {
        dispatch(fetchCourseSameCategory(maDanhMucKhoahoc));
    }, [dispatch, DanhMucKhoahoc, maDanhMucKhoahoc]);

    console.log(maDanhMucKhoahoc);

    const ref = useRef({});

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
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
            ,
            {
                breakpoint: 456,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    const mapCourseList = () => {
        return course.map((feedBackItem) => {
            return (
                <Link to={`/detail/${feedBackItem.maKhoaHoc}`} className="item-course-category">
                    <div className="item-detail" key={feedBackItem.id}>
                        <div className="item-body">
                            <h4 className="item-img">
                                <img src={feedBackItem.hinhAnh} alt="" className="w-100" />
                            </h4>
                            <div className="item-title">
                                <div className="name_course">{feedBackItem.tenKhoaHoc}</div>
                                <div className="item-content d-flex justify-content-between">
                                    <div className="ngayTao"> {feedBackItem.ngayTao}</div>
                                    <div className="luotXem">Lượt xem :{feedBackItem.luotXem}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        });
    };
    return (
        <div>
            {course == "" ? (
                <>Still loading...</>
            ) : (
                <div>
                    <section className="same-category mb-lg-5 mt-lg-4 ">
                        <div className="container">
                            <div
                                style={{ textTransform: "uppercase", fontWeight: "bold" }}
                                className="pb-3"
                            >
                                Khoá học cùng thể loại
                            </div>
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
