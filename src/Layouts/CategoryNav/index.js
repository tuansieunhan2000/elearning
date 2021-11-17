import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import ListCourseInCategoryList from "./ListCourseInCategoryList";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./main.scss";
import { fetchCourseByTypeDefaul } from "../../Redux/Actions/courseAction";
export default function CourseTabList() {
    const dispatch = useDispatch();
    const categoies = useSelector((state) => state.category.category);
    useEffect(() => {
        dispatch(fetchCourseByTypeDefaul("BackEnd"));
    }, [dispatch]);
    const course = useSelector((state) => state.course.courseListHome);

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            550: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    };

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
    return (
        <div className="container course p-4">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-center text-center flex-colum align-items-center">
                    <div className="courses__intro w-100">
                        <h3>The world’s largest selection of courses</h3>
                        <p>
                            Choose from over 100,000 online video courses with new additions
                            published every month
                        </p>
                    </div>
                </div>
                <div className="col-md-12 col-lg-9 col-xl-9">
                    <ul
                        className="nav nav-pills mb-3 d-flex justify-content-center align-items-center"
                        id="pills-tab"
                        role="tablist"
                    >
                        {renderCategory()}
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <OwlCarousel {...options} className="owl-theme" loop nav margin={8}>
                            {renderCategoryList()}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
