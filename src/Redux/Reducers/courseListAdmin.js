import { FETCH_COURSE_LIST_PER_PAGE_ADMIN } from "../Types";

let initialState = {
    danhMucKhoaHoc: [],
    listCoursePerPage: [],
    listCoursePerPageData: [],

    allCourse: [],
    dataCourseEdit: {},
};

const ManageUserByAdminReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_COURSE_LIST_PER_PAGE_ADMIN:
            state.listCoursePerPageData = payload.items;
            state.listCoursePerPage = payload;

            return { ...state };

        default:
            return state;
    }
};
export default ManageUserByAdminReducer;
