import { combineReducers } from "redux";
import CategoryReducer from "./category";
import CourseReducer from "./course";
import UserReducer from "./user";
import chiTietCacKhoaHocDaDangKiReducer from "./chiTietKhoaHocGhiDanh";
import MaLoaiNguoiDungReducer from "./maLoaiNguoiDung";
import addUserReducer from "../../container/AdminScreen/AddUser/modules/reducer";
import ManageUserByAdminReducer from "./courseListAdmin";
const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer,
    category: CategoryReducer,
    chiTietCacKhoaHocDaDangKi: chiTietCacKhoaHocDaDangKiReducer,
    maLoaiNguoiDung: MaLoaiNguoiDungReducer,
    addUserReducer,
    manageUserByAdminReducer: ManageUserByAdminReducer,
});

export default RootReducer;
