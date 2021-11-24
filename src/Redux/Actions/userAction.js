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

export const GetInfoUser = (token, taiKhoan) => {
    return (dispatch) => {
        return userService
            .GetUserInfo(token, taiKhoan)
            .then((res) => {
                dispatch(createAction(GET_USER_INFO, res.data));
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err.response);
                return Promise.reject();
            });
    };
};

export const UserRegisterCourse = (token, taiKhoan) => {
    return () => {
        return userService
            .RegisterCourse(token, taiKhoan)
            .then((res) => {
                console.log(res.data);
                Swal.fire({
                    title: "Ghi danh thành công!",
                    text: res.data,
                    icon: "success",
                    confirmButtonText: "OK",
                });
            

                return Promise.resolve();
            })
            .catch((err) => {
                Swal.fire({
                    title: "Ghi danh thất bại!",
                    text: err.response.data,
                    icon: "error",
                    confirmButtonText: "OK",
                });
                console.log(err.response.data);
                return Promise.reject();
            });
    };
};
function refreshPage() {
    setTimeout(() => {
        window.location.reload(false);
    }, 500);
    console.log("page to reload");
}
export const UserCancelCourse = (token, taiKhoan) => {
    return () => {
        return userService
            .CancelCourse(token, taiKhoan)
            .then((res) => {
                console.log(res.data);
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        refreshPage();
                    }
                });

                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err.response);
                return Promise.reject();
            });
    };
};
