import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseSameCategory } from "../../Redux/Actions/courseAction";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PropTypes from "prop-types";
SameCategory.propTypes = {
    maDanhMucKhoahoc: PropTypes.string,
};
export default function SameCategory({ DanhMucKhoahoc }) {
     const {tenDanhMucKhoaHoc, maDanhMucKhoahoc} =DanhMucKhoahoc
    const dispatch = useDispatch();

    const course = useSelector((state) => state.course.courseListDetail) || "";

    useEffect(() => {
        dispatch(fetchCourseSameCategory(maDanhMucKhoahoc));
    }, [dispatch,maDanhMucKhoahoc]);

    console.log(maDanhMucKhoahoc);
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
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
                items: 4,
            },
            1200: {
                items: 4,
            },
        },
    };
    const mapFeedBack = () => {
        return course.map((feedBackItem) => {
            return (
                <div className="card" key={feedBackItem.id}>
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={feedBackItem.hinhAnh} alt="" />
                            {/* <p>{feedBackItem.tenKhoaHoc}</p> */}
                        </h4>
                        <p className="card-text">{feedBackItem.tenKhoaHoc}</p>
                    </div>
                </div>
            );
        });
    };
    return (
        <div>
            {course == "" ? (
                <>Still loading...</>
            ) : (
                <div>
                    <section className="">
                         {tenDanhMucKhoaHoc}
                        <div className="container">
                            <div className="have_content">
                                <OwlCarousel {...options} className="owl-theme" loop nav margin={8}>
                                    {mapFeedBack()}
                                </OwlCarousel>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
