import Swal from "sweetalert2";
import { STATUS_ICON_ERROR, STATUS_ICON_SUCCESS } from "../../../../constants/status";
import { userManagerService } from "../../../../Services";
import * as ActionType from "./constants";

export const actAddUserApi = (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequest());
        userManagerService
            .AddUser(user)
            .then((result) => {
                dispatch(actAddUserSuccess(result.data));
                Swal.fire({
                    title: "Thêm thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    customClass: {
                        icon: "no-border",
                    },
                });
            })
            .catch((err) => {
                dispatch(actAddUserFailed(err));
                Swal.fire({
                    title: "Thêm thất bại",
                    iconHtml: STATUS_ICON_ERROR,
                    text: "Tài khoản hoặc email đã tồn tại",
                    customClass: {
                        icon: "no-border",
                    },
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
