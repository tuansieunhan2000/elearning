import {
    DELETE_COURSE_BY_ADMIN,
    EDIT_COURSE_DETAIL_BY_ADMIN,
    FETCH_ALL_COURSE_BY_ADMIN,
    FETCH_COURSE_LIST_PER_PAGE_ADMIN,
} from "../Types";

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
        case FETCH_ALL_COURSE_BY_ADMIN:
            state.allCourse = payload;
            return { ...state };
        case FETCH_COURSE_LIST_PER_PAGE_ADMIN:
            console.log(state);
            state.listCoursePerPageData = payload.items;
            state.listCoursePerPage = payload;
            return { ...state };
        case EDIT_COURSE_DETAIL_BY_ADMIN:
            state.dataCourseEdit = payload;
            let newListCoursePerPageData = state.listCoursePerPageData;
            let indexNewList = newListCoursePerPageData.findIndex(
                (item) => item.maKhoaHoc === payload.maKhoaHoc
            );
            if (indexNewList >= 0) {
                console.log(1);
            }
            return { ...state };
        case DELETE_COURSE_BY_ADMIN:
            console.log("payload", payload);
            let newList = [...state.listCoursePerPageData];
            let index = newList.findIndex((item) => item.maKhoaHoc === payload);
            newList.splice(index, 1);
            state.listCoursePerPageData = newList;
            return { ...state };
        default:
            return state;
    }
};
export default ManageUserByAdminReducer;
