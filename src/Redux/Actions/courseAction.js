import { createAction } from ".";
import { courseService } from "../../Services";
import { FETCH_COURSE, FETCH_COURSE_LIST_BY_CATEGORY, FETCH_DETAIL_COURCE } from "../Types";

export const fetchDetailCourse = (id) => {
    console.log(courseService.DetailCourse(""));
    return (dispatch) => {
        courseService
            .DetailCourse(id)
            .then((res) => dispatch(createAction(FETCH_DETAIL_COURCE, res.data)))
            .catch((err) => console.log(err));
    };
};

export const fetchCourse = () => {
    return (dispatch) => {
        courseService
            .AllCourse()
            .then((res) => dispatch(createAction(FETCH_COURSE, res.data)))
            .catch((err) => console.log(err));
    };
};

export const fetchCourseByType = (maKhoaHoc) => {
    return (dispatch) => {
        courseService
            .GetCourseListByType(maKhoaHoc)
            .then((res) => dispatch(createAction(FETCH_COURSE_LIST_BY_CATEGORY, res.data)))
            .catch((err) => console.log(err));
    };
};
