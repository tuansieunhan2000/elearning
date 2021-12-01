import Swal from "sweetalert2";
import { createAction } from ".";
import { userService } from "../../Services";
import { GET_COURSE_REGISTED, GET_USER_INFO, GET_USER_LOGIN, UPDATE_COURSE } from "../Types";

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

export const GetInfoUser = () => {
    return (dispatch) => {
        return userService
            .GetUserInfo()
            .then((res) => {
                dispatch(createAction(GET_USER_INFO, res.data));
                dispatch(createAction(GET_COURSE_REGISTED, res.data.chiTietKhoaHocGhiDanh));
                return Promise.resolve();
            })
            .catch((err) => {
                console.log(err.response);
                return Promise.reject();
            });
    };
};

export const UserRegisterCourse = (taiKhoan) => {
    return (dispatch) => {
        return (
            userService
                .RegisterCourse(taiKhoan)
                .then((res) => {
                    console.log(res);
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
                        confirmButtonColor: "#ec5252",

                        confirmButtonText: "OK",
                    });

                    return Promise.reject();
                }),
            GetInfoUser()
        );
    };
};

export const UserCancelCourse = (data) => {
    return (dispatch) => {
        return userService
            .CancelCourse(data)
            .then((res) => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#ec5252",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        dispatch(createAction(UPDATE_COURSE, data.maKhoaHoc));
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
