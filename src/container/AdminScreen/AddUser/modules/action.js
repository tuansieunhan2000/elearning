import * as ActionType from "./constants";
import axios from "axios";
import { userManagerService } from "../../../../Services";
import Swal from "sweetalert2";

export const actAddUserApi = (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequest());
        userManagerService
            .AddUser(user)
            .then((result) => {
                dispatch(actAddUserSuccess(result.data));
                Swal.fire({
                    type: "success",
                    title: "Thêm thành công",
                });
            })
            .catch((err) => {
                dispatch(actAddUserFailed(err));
                Swal.fire({
                    icon: "error",
                    title: "Thêm thất bại",
                    text: "Tài khoản hoặc email đã tồn tại",
                });
            });
    };
};

const actAddUserRequest = () => {
    return {
        type: ActionType.ADD_USER_REQUEST,
    };
};

const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload: data,
    };
};

const actAddUserFailed = (err) => {
    return {
        type: ActionType.ADD_USER_FAILED,
        payload: err,
    };
};
