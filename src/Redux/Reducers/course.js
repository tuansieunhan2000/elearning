import { FETCH_COURSE, FETCH_DETAIL_COURCE } from "../Types";

let initialState = {
    course: [],
    courseDetail: null,
};
const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE:
            state.course = action.payload;
            return { ...state };
        case FETCH_DETAIL_COURCE:
            state.courseDetail = action.payload;
            return { ...state };
        default:
            return state;
    }
};
export default CourseReducer;
