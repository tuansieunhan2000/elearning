import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../../Components/CourseItem";

import queryString from "query-string";
import { fetchCoursePerPage } from "../../Redux/Actions/courseAction";
import "./main.scss";
export default function AllCourseList() {
    const dispatch = useDispatch();
    const coursePerPage = useSelector((state) => state.course.coursePerPage);
    const course = coursePerPage.items;
    const [filters, setFilters] = useState({
        course,
        page: 1,
        pageSize: 12,
    });

    useEffect(() => {
        const paramsString = queryString.stringify(filters);
        dispatch(fetchCoursePerPage(paramsString));
    }, [dispatch, filters]);

    function onPageChange(newPage) {
        setFilters({
            ...filters,
            page: newPage,
        });
    }
    const renderCourseList = () => {
        return course.map((courseItem, index) => {
            return <CourseItem courseItem={courseItem} key={index} />;
        });
    };

    return (
        <div>
            {!coursePerPage.items ? (
                <>Still loading...</>
            ) : (
                <div className="container  pb-4">
                    <div className="row">
                        <h4 className="header_course_list p-0 pb-3">List Course</h4>
                        <div className="container pt-3">
                            <div className="row">{renderCourseList()} </div>
                            <div className="text-center">
                                <button
                                    className="btn-prev"
                                    disabled={coursePerPage.currentPage <= 1}
                                    onClick={() => {
                                        console.log("current page", coursePerPage.currentPage);
                                        onPageChange(filters.page - 1);
                                    }}
                                >
                                    Prev
                                </button>
                                <button
                                    className="btn-prev"
                                    disabled={coursePerPage.currentPage >= coursePerPage.totalPages}
                                    onClick={() => onPageChange(filters.page + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
