import { combineReducers } from "redux";
import CategoryReducer from "./category";
import CourseReducer from "./course";
import UserReducer from "./user";
import chiTietCacKhoaHocDaDangKiReducer from "./chiTietKhoaHocGhiDanh";
const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer,
    category: CategoryReducer,
    chiTietCacKhoaHocDaDangKi: chiTietCacKhoaHocDaDangKiReducer,
});

export default RootReducer;
