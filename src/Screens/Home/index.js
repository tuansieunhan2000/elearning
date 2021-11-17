import React from "react";
import Banner from "../../Layouts/Banner";
import CourseTabList from "../../Layouts/CategoryNav";
import AllCourseList from "../../Layouts/CoursePerPage";
import Footer from "../../Layouts/Footer";

export default function HomeScreen() {
    return (
        <div>
            <Banner />
            <AllCourseList />
            <CourseTabList />
            {/* <FeedBackFromUser /> */}
            <Footer />
        </div>
    );
}
