import axios from "axios";
import { API_COURSES, API_DETAIL_COURSES } from "../constants/api";

export default function CourseService() {}

CourseService.prototype = {
    DetailCourse() {
        return axios.get(API_DETAIL_COURSES);
    },
    AllCourse() {
        return axios.get(API_COURSES);
    },
};
