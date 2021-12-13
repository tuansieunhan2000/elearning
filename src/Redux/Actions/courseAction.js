import { createAction } from ".";
import { courseService } from "../../Services";
import {
    FETCH_COURSE,
    FETCH_COURSE_LIST_BY_CATEGORY,
    FETCH_COURSE_LIST_BY_CATEGORY_DEFAULT,
    FETCH_COURSE_LIST_PER_PAGE,
    FETCH_COURSE_LIST_SAME_CATEGORY,
    FETCH_DETAIL_COURCE,
    FETCH_SEARCH_COURSE,
    FETCH_SEARCH_COURSES,
} from "../Types";

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
            .then((res) => {
                console.log(res.data);
                dispatch(createAction(FETCH_COURSE_LIST_BY_CATEGORY, res.data));
            })
            .catch((err) => console.log(err));
    };
};

export const fetchCourseByTypeDefaul = (maKhoaHoc) => {
    return (dispatch) => {
        courseService
            .GetCourseListByType(maKhoaHoc)
            .then((res) => {
                dispatch(createAction(FETCH_COURSE_LIST_BY_CATEGORY_DEFAULT, res.data));
            })
            .catch((err) => console.log(err));
    };
};

export const fetchCoursePerPage = (paranms) => {
    return (dispatch) => {
        courseService
            .GetCourseListPerPage(paranms)
            .then((res) => {
                dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE, res.data));
            })
            .catch((err) => console.log(err));
    };
};

export const fetchCourseSameCategory = (maKhoaHoc) => {
    return (dispatch) => {
        courseService
            .GetCourseListSameType(maKhoaHoc)
            .then((res) => {
                dispatch(createAction(FETCH_COURSE_LIST_SAME_CATEGORY, res.data));
            })
            .catch((err) => console.log(err));
    };
};

export const fetchSearchCourse = (tenKhoaHoc) => {
    return (dispatch) => {
        courseService
            .SearchCourse(tenKhoaHoc)
            .then((res) => dispatch(createAction(FETCH_SEARCH_COURSE, res.data)))
            .catch((err) => console.log(err));
    };
};
export const fetchSearchCourses = (tenKhoaHoc) => {
    return (dispatch) => {
        courseService
            .SearchCourses(tenKhoaHoc)
            .then((res) => {
                console.log(res.data);
                dispatch(createAction(FETCH_SEARCH_COURSES, res.data));
            })
            .catch((err) => {
                console.log(err.response.data);
                dispatch(createAction(FETCH_SEARCH_COURSES, []));
            });
    };
};
