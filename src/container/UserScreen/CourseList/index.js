import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "../../../Layouts/Footer";
import ListCourseByCategory from "../../../Layouts/ListCourseByCategory";
import CourseTabList from "../../../Layouts/CategoryNav";
import { fetchCourseByType } from "../../../Redux/Actions/courseAction";

export default function CourseList() {
    const dispatch = useDispatch();
    const courseListByCategory = useSelector((state) => state.course.courseListByCategory) || {};
    let maDanhMuc = useParams();

    useEffect(() => {
        dispatch(fetchCourseByType(maDanhMuc.type));
    }, [maDanhMuc.type, dispatch]);

    return (
        <>
            {!courseListByCategory ? (
                <>Still loading...</>
            ) : (
                <div>
                    <ListCourseByCategory courseListByCategory={courseListByCategory} />
                    <CourseTabList maDanhMucKhoahoc={"backEnd"} />
                    <Footer />
                </div>
            )}
        </>
    );
}
