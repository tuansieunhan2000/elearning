import React from "react";
import Banner from "../../Layouts/Banner";
import CourseTabList from "../../Layouts/CategoryNav";
import AllCourseList from "../../Layouts/CoursePerPage";
import Footer from "../../Layouts/Footer";
import FeedBackFromUser from "../../Layouts/StudentFeedBack";

export default function HomeScreen() {
    return (
        <div>
            <Banner />
            <CourseTabList maDanhMucKhoahoc={"backEnd"} />
            <FeedBackFromUser />
            <AllCourseList />
            <Footer />
        </div>
    );
}
