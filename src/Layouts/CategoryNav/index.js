import React from "react";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import ListCourseInCategoryList from "./ListCourseInCategoryList";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./main.scss";
export default function CourseTabList() {
    const categoies = useSelector((state) => state.category.category);
    const course = useSelector((state) => state.course.courseListHome);
    console.log(course, "course");
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
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
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
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="courses__intro">
                        <h3>The world’s largest selection of courses</h3>
                        <p>
                            Choose from over 100,000 online video courses with new additions
                            published every month
                        </p>
                    </div>
                </div>
                <div className="col-md-12 col-lg-8 col-xl-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
