import axios from "axios";
import { API_COURSES, API_DETAIL_COURSES, API_GET_COURSE_LIST_BY_TYPE } from "../constants/api";

export default function CourseService() {}

CourseService.prototype = {
    DetailCourse(id) {
        return axios.get(`${API_DETAIL_COURSES}${id}`);
    },
    AllCourse() {
        return axios.get(API_COURSES);
    },
    GetCourseListByType(maDanhMuc) {
        console.log("GetCourseListByType");
        return axios.get(`${API_GET_COURSE_LIST_BY_TYPE}${maDanhMuc}`);
    },
};
