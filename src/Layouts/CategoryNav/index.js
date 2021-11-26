import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import ListCourseInCategoryList from "./ListCourseInCategoryList";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./main.scss";
import { fetchCourseByTypeDefaul } from "../../Redux/Actions/courseAction";
export default function CourseTabList({ maDanhMucKhoahoc }) {
    const dispatch = useDispatch();
    const categoies = useSelector((state) => state.category.category);
    const course = useSelector((state) => state.course.courseListHome);

    useEffect(() => {
        dispatch(fetchCourseByTypeDefaul(maDanhMucKhoahoc));
    }, [dispatch, maDanhMucKhoahoc]);

    const renderCategory = () => {
        return categoies.map((item, index) => {
            return <CategoryList item={item} index={index} key={index} />;
        });
    };
    const renderCategoryList = () => {
        return course.map((item, index) => {
            return <ListCourseInCategoryList item={item} index={index} key={index} />;
        });
    };

    const ref = useRef({});
    const responsive = [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
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
    return (
        <div className="container course p-4 mb-4">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center text-center flex-colum align-items-center">
                    <div className="courses__intro w-100">
                        <h3>The world’s largest selection of courses</h3>
                    </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <ul
                        className="nav nav-pills mb-3 d-flex justify-content-center align-items-center"
                        id="pills-tab"
                        role="tablist"
                    >
                        {renderCategory()}
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <Slider ref={ref} {...settings}>
                            {renderCategoryList()}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
