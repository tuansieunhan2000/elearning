import Swal from "sweetalert2";
import { createAction } from ".";
import { userService } from "../../Services";
import { GET_USER_INFO, GET_USER_LOGIN } from "../Types";

export const register = (value) => {
    return (dispatch) => {
        return userService
            .SignUp(value)
            .then((res) => {
                Swal.fire({
                    title: "Success!",
                    text: "Tạo tài khoản mới thành công!!!!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                return Promise.resolve();
            })
            .catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: err.response.data,
                    icon: "error",
                    confirmButtonText: "OK",
                });
                return Promise.reject();
            });
    };
};

export const Login = (value) => {
    return (dispatch) => {
        return userService
            .SignIn(value)
            .then((res) => {
                dispatch(createAction(GET_USER_LOGIN, res.data));
                localStorage.setItem("userItem", JSON.stringify(res.data));
                return Promise.resolve();
            })
            .catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: err.response.data,
                    icon: "error",
                    confirmButtonText: "OK",
                });
                return Promise.reject();
            });
    };
};

export const GetInfoUser = (token) => {
    return (dispatch) => {
        return userService
            .GetUserInfo(token)
            .then((res) => {
                console.log(res.data);
                dispatch(createAction(GET_USER_INFO, res.data));
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err.response);
                return Promise.reject();
            });
    };
};
