import {
    DELETE_USER_BY_ADMIN,
    FETCH_MA_LOAI_NGUOI_DUNG,
    FETCH_USER_LIST_PER_PAGE,
    FETCH_USER_LIST_PER_PAGE_DATA,
    UPDATE_USER_BY_ADMIN,
} from "../Types";

let initialState = {
    maLoaiNguoiDung: [],
    userListPerPage: [],
    userListPerPageData: [],
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
        case UPDATE_USER_BY_ADMIN:
            console.log(payload);
            let newListUpdate = [...state.userListPerPageData];
            let indexUpdate = newListUpdate.findIndex((item) => item.taiKhoan === payload.taiKhoan);
            if (indexUpdate <= 0) {
                newListUpdate[indexUpdate] = payload;
                console.log("change");
            }
            console.log("newListUpdate", newListUpdate[indexUpdate], "payload", payload);

            state.userListPerPageData = newListUpdate;
            return { ...state };

        default:
            return state;
    }
};
export default MaLoaiNguoiDungReducer;
