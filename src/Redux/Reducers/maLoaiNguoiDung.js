import { FETCH_MA_LOAI_NGUOI_DUNG, FETCH_USER_LIST_PER_PAGE } from "../Types";

let initialState = {
    maLoaiNguoiDung: [],
    userListPerPage: [],
};

const MaLoaiNguoiDungReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case FETCH_MA_LOAI_NGUOI_DUNG:
            state.maLoaiNguoiDung = payload;
            return { ...state };
        case FETCH_USER_LIST_PER_PAGE:
            state.userListPerPage = payload;

            return { ...state };
        default:
            return state;
    }
};
export default MaLoaiNguoiDungReducer;
