import {
    FETCH_COURSE,
    FETCH_COURSE_LIST_BY_CATEGORY,
    FETCH_COURSE_LIST_BY_CATEGORY_DEFAULT,
    FETCH_COURSE_LIST_PER_PAGE,
    FETCH_DETAIL_COURCE,
} from "../Types";

let initialState = {
    course: [],
    courseDetail: null,
    courseListByCategory: [],
    courseListHome: [],
    coursePerPage: [],
};

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE:
            state.course = action.payload;

            return { ...state };
        case FETCH_DETAIL_COURCE:
            console.log(1);
            state.courseDetail = action.payload;
            return { ...state };
        case FETCH_COURSE_LIST_BY_CATEGORY:
            state.courseListByCategory = action.payload;
            return { ...state };
        case FETCH_COURSE_LIST_BY_CATEGORY_DEFAULT:
            console.log("FETCH_COURSE_LIST_BY_CATEGORY_DEFAULT");
            state.courseListHome = action.payload;
            return { ...state };
        case FETCH_COURSE_LIST_PER_PAGE:
            console.log("FETCH_COURSE_LIST_PER_PAGE");
            state.coursePerPage = action.payload;
            return { ...state };
        default:
            return state;
    }
};
export default CourseReducer;
