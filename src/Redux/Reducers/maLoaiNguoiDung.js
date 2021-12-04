import { FETCH_MA_LOAI_NGUOI_DUNG } from "../Types";

let initialState = {
    maLoaiNguoiDung: [],
};

const MaLoaiNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MA_LOAI_NGUOI_DUNG:
            state.maLoaiNguoiDung = action.payload;
            return { ...state };

        default:
            return state;
    }
};
export default MaLoaiNguoiDungReducer;
