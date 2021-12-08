import Swal from "sweetalert2";
import { createAction } from ".";
import { userManagerService, userService } from "../../Services";
import {
    FETCH_MA_LOAI_NGUOI_DUNG,
    GET_COURSE_REGISTED,
    GET_USER_INFO,
    GET_USER_LOGIN,
    UPDATE_COURSE,
    UPDATE_USER_BY_USER,
} from "../Types";

export const register = (value) => {
    return (dispatch) => {
        return userService
            .SignUp(value)
            .then((res) => {
                Swal.fire({
                    title: "Success!",
                    text: "Tạo tài khoản mới thành công!!!!",
                    type: "success",
                    confirmButtonText: "OK",
                });
                return Promise.resolve();
            })
            .catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: err.response.data,
                    type: "error",
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
                    type: "error",
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
export const GetMaNguoiDung = () => {
    return (dispatch) => {
        return userManagerService
            .fetchMaNguoiDung()
            .then((res) => {
                dispatch(createAction(FETCH_MA_LOAI_NGUOI_DUNG, res.data));
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
                        type: "success",

                        confirmButtonText: "OK",
                    });
                    return Promise.resolve();
                })
                .catch((err) => {
                    Swal.fire({
                        title: "Ghi danh thất bại!",
                        text: err.response.data,
                        type: "error",
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
                    title: "Bạn có chắc chắn không?",
                    text: "Bạn sẽ không thể hoàn tác được!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#ec5252",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Tồi chắc!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire("Đã xoá!", "Khoá học đã được xoá.");
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
export const updateUserByUser = (data) => {
    return (dispatch) => {
        return userService
            .UpdateUser(data)

            .then((res) => {
                console.log(res.data);
                Swal.fire("Success", res.data);
                dispatch(createAction(UPDATE_USER_BY_USER, data));
            })
            .catch((err) => {
                console.log(err);
                Swal.fire("Error", err.response);
            });
    };
};
