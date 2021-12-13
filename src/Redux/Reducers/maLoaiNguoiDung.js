import {
    DELETE_USER_BY_ADMIN,
    FETCH_MA_LOAI_NGUOI_DUNG,
    FETCH_USER_LIST_PER_PAGE,
    FETCH_USER_LIST_PER_PAGE_DATA,
    GET_ALL_USER_BY_ADMIN,
    UPDATE_USER_BY_ADMIN,
    GET_DATA_USER_BY_ADMIN,
} from "../Types";

let initialState = {
    maLoaiNguoiDung: [],
    userListPerPage: [],
    userListPerPageData: [],
    allUser: [],
    dataUserEdit: {},
};

const MaLoaiNguoiDungReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_MA_LOAI_NGUOI_DUNG:
            state.maLoaiNguoiDung = payload;
            return { ...state };
        case FETCH_USER_LIST_PER_PAGE:
            state.userListPerPage = payload;
            return { ...state };

        case FETCH_USER_LIST_PER_PAGE_DATA:
            state.userListPerPageData = payload;
            return { ...state };
        case DELETE_USER_BY_ADMIN:
            let newList = [...state.userListPerPageData];
            let index = newList.findIndex((item) => item.taiKhoan === payload);
            newList.splice(index, 1);
            state.userListPerPageData = newList;
            return { ...state };

        case GET_ALL_USER_BY_ADMIN:
            state.allUser = payload;
            return { ...state };

        case GET_DATA_USER_BY_ADMIN:
            state.dataUserEdit = payload;
            return { ...state };

        case UPDATE_USER_BY_ADMIN:
            let newListUpdate = [...state.allUser];
            let indexUpdate = newListUpdate.findIndex((item) => item.taiKhoan === payload.taiKhoan);

            state.allUser = newListUpdate;
            return { ...state };

        default:
            return state;
    }
};
export default MaLoaiNguoiDungReducer;
