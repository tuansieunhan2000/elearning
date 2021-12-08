import axios from "axios";
import {
    API_COURSES,
    API_COURSES_PER_PAGE,
    API_DELETE_COURSE_BY_ADMIN,
    API_DETAIL_COURSES,
    API_GET_COURSE_LIST_BY_TYPE,
    API_SEARCH_COURSE,
} from "../constants/api";

export default function CourseManagerService() {}

CourseManagerService.prototype = {
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
    DeleteCourseByAmin(maKhoaHoc) {
        return axios.delete(API_DELETE_COURSE_BY_ADMIN, { MaKhoaHoc: maKhoaHoc });
    },
};
