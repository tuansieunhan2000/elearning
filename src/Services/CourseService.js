import axios from "axios";
import {
    API_COURSES,
    API_COURSES_PER_PAGE,
    API_DETAIL_COURSES,
    API_GET_COURSE_LIST_BY_TYPE,
    API_SEARCH_COURSE,
    API_SEARCH_COURSES,
} from "../constants/api";

export default function CourseService() {}

CourseService.prototype = {
    DetailCourse(id) {
        return axios.get(`${API_DETAIL_COURSES}${id}`);
    },
    AllCourse() {
        return axios.get(API_COURSES);
    },
    SearchCourse(tenKhoaHoc) {
        return axios.get(`${API_SEARCH_COURSE}${tenKhoaHoc}`);
    },
    GetCourseListByType(maDanhMuc) {
        return axios.get(`${API_GET_COURSE_LIST_BY_TYPE}${maDanhMuc}`);
    },
    GetCourseListByTypeDeFault(maDanhMuc) {
        return axios.get(`${API_GET_COURSE_LIST_BY_TYPE}${maDanhMuc}`);
    },
    GetCourseListPerPage(param) {
        return axios.get(`${API_COURSES_PER_PAGE}${param}`);
    },
    GetCourseListSameType(maDanhMuc) {
        return axios.get(`${API_GET_COURSE_LIST_BY_TYPE}${maDanhMuc}`);
    },
    SearchCourses(tenKhoaHoc) {
        return axios.get(`${API_SEARCH_COURSES}${tenKhoaHoc}`);
    },
};
