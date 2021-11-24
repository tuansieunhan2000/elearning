import {
    FETCH_COURSE,
    FETCH_COURSE_LIST_BY_CATEGORY,
    FETCH_COURSE_LIST_BY_CATEGORY_DEFAULT,
    FETCH_COURSE_LIST_PER_PAGE,
    FETCH_COURSE_LIST_SAME_CATEGORY,
    FETCH_DETAIL_COURCE,
    FETCH_SEARCH_COURSE,
} from "../Types";

let initialState = {
    course: [],
    courseDetail: null,
    courseListByCategory: [],
    courseListHome: [],
    coursePerPage: [],
    courseListDetail: [],
    searchCourse: [],
};

const CourseReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_COURSE:
            state.course = payload;
            return { ...state };

        case FETCH_DETAIL_COURCE:
            return { ...state, courseDetail: payload };

        case FETCH_COURSE_LIST_BY_CATEGORY:
            state.courseListByCategory = payload;
            return { ...state };

        case FETCH_COURSE_LIST_BY_CATEGORY_DEFAULT:
            return { ...state, courseListHome: payload };

        case FETCH_COURSE_LIST_PER_PAGE:
            state.coursePerPage = payload;
            return { ...state };

        case FETCH_COURSE_LIST_SAME_CATEGORY:
            console.log(payload);
            return { ...state, courseListDetail: payload };

        case FETCH_SEARCH_COURSE:
            return { ...state, searchCourse: payload };

        default:
            return state;
    }
};
export default CourseReducer;
