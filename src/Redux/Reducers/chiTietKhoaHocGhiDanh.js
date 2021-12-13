import { GET_COURSE_REGISTED, UPDATE_COURSE } from "../Types";

let initialState = [];

const chiTietCacKhoaHocDaDangKiReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COURSE:
            let newList = [...state];
            let index = newList.findIndex((item) => item.maKhoaHoc === action.payload);
            newList.splice(index, 1);
            state = newList;
            return [...state];
        case GET_COURSE_REGISTED:
            state = action.payload;
            return [...state];

        default:
            return state;
    }
};
export default chiTietCacKhoaHocDaDangKiReducer;
