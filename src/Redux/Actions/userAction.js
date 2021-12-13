import Swal from "sweetalert2";
import { createAction } from ".";
import { STATUS_ICON_ERROR, STATUS_ICON_SUCCESS } from "../../constants/status";
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
                    title: "Tạo tài khoản thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    customClass: {
                        icon: "no-border",
                    },
                });

                return Promise.resolve();
            })
            .catch((err) => {
                Swal.fire({
                    title: "Tạo tài khoản thất bại",
                    iconHtml: STATUS_ICON_ERROR,
                    text: err.response.data,
                    customClass: {
                        icon: "no-border",
                    },
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
                    title: "Đăng nhập thất bại",
                    iconHtml: STATUS_ICON_ERROR,
                    text: err.response.data,
                    customClass: {
                        icon: "no-border",
                    },
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
                    Swal.fire({
                        title: "Thành công",
                        iconHtml: STATUS_ICON_SUCCESS,
                        text: "Ghi danh thành công!!!",
                        customClass: {
                            icon: "no-border",
                        },
                    });
                    return Promise.resolve();
                })
                .catch((err) => {
                    Swal.fire({
                        title: "err",
                        iconHtml: STATUS_ICON_ERROR,
                        text: err.response.data,
                        customClass: {
                            icon: "no-border",
                        },
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
                    title: "Thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    text: "Bạn đã xoá thành công khoá học",
                    customClass: {
                        icon: "no-border",
                    },
                });
                dispatch(createAction(UPDATE_COURSE, data.maKhoaHoc));

                return Promise.resolve();
            })
            .catch((err) => {
                Swal.fire({
                    title: "err",
                    iconHtml: STATUS_ICON_ERROR,
                    text: err.response.data,
                    customClass: {
                        icon: "no-border",
                    },
                });

                return Promise.reject();
            });
    };
};
export const updateUserByUser = (data) => {
    return (dispatch) => {
        return userService
            .UpdateUser(data)
            .then((res) => {
                Swal.fire({
                    title: "Thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    text: "Bạn đã sửa thông tin thành công !!!c",
                    customClass: {
                        icon: "no-border",
                    },
                });
                dispatch(createAction(UPDATE_USER_BY_USER, data));
            })
            .catch((err) => {
                Swal.fire({
                    title: "err",
                    iconHtml: STATUS_ICON_ERROR,
                    text: err.response.data,
                    customClass: {
                        icon: "no-border",
                    },
                });
            });
    };
};
