import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "../../Components/CourseItem";
import Banner from "../../Layouts/Banner";
import CourseTabList from "../../Layouts/CategoryNav";
import Footer from "../../Layouts/Footer";
import FeedBackFromUser from "../../Layouts/StudentFeedBack";

export default function HomeScreen() {
    const course = useSelector((state) => state.course.course);

    //Use for all the dispatch actions

    return (
        <div>
            <Banner />
            <h4 className="display-4 text-center">List Course</h4>
            <div className="container">
                <div className="row">
                    {course.map((courseItem) => {
                        return (
                            <div className="col-3" key={courseItem.maKhoaHoc}>
                                <CourseItem courseItem={courseItem} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <CourseTabList />
            <FeedBackFromUser />
            <Footer />
        </div>
    );
}
