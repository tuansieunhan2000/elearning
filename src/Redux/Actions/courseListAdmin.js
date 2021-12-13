import Swal from "sweetalert2";
import { createAction } from ".";
import { STATUS_ICON_ERROR, STATUS_ICON_SUCCESS } from "../../constants/status";
import { courseManagerService } from "../../Services";
import {
    ADD_NEW_COURSE_BY_ADMIN,
    DELETE_COURSE_BY_ADMIN,
    EDIT_COURSE_DETAIL_BY_ADMIN,
    FETCH_ALL_COURSE_BY_ADMIN,
    FETCH_COURSE_LIST_PER_PAGE_ADMIN,
} from "../Types";

export const fetchCoursePerPageAdmin = (paranms) => {
    return (dispatch) => {
        courseManagerService
            .GetCourseListPerPage(paranms)
            .then((res) => {
                dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, res.data));
            })
            .catch((err) => {
                dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, err.response.data));
            });
    };
};
export const getAllCourseByAdminAction = () => {
    return (dispatch) => {
        courseManagerService
            .AllCourse()
            .then((res) => {
                dispatch(createAction(FETCH_ALL_COURSE_BY_ADMIN, res.data));
            })
            .catch((err) => {});
    };
};

export const deleteCourse = (paranms) => {
    return (dispatch) => {
        courseManagerService
            .DeleteCourseByAmin(paranms)
            .then((res) => {
                Swal.fire({
                    title: "Thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    text: "Bạn đã xoá thành công khoá học",
                    customClass: {
                        icon: "no-border",
                    },
                });

                dispatch(createAction(DELETE_COURSE_BY_ADMIN, paranms));
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

export const addCourse = (paranms) => {
    return (dispatch) => {
        courseManagerService
            .AddCourseByAmin(paranms)
            .then((res) => {
                Swal.fire({
                    title: "Thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    text: "Bạn đã thêm thành công khoá học",
                    customClass: {
                        icon: "no-border",
                    },
                });
                dispatch(createAction(ADD_NEW_COURSE_BY_ADMIN, res.data));
            })
            .catch((err) => {
                // dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, err.response.data));
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
export const addImgCourse = (formdata) => {
    return (dispatch) => {
        courseManagerService
            .PostImgForCourse(formdata)
            .then(
                console.log("fd", formdata.getAll("hinhAnh")),
                Swal.fire({
                    title: "Thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    text: "Bạn đã thêm thành công khoá học",
                    customClass: {
                        icon: "no-border",
                    },
                })
            )
            .catch(console.log(2));
    };
};
export const searchCourse = (paranms) => {
    return (dispatch) => {
        courseManagerService
            .SearchCourseByMaKhoaHoc(paranms)
            .then((res) => {
                dispatch(createAction(EDIT_COURSE_DETAIL_BY_ADMIN, res.data));
            })
            .catch((err) => {
                console.log(err.response);
                // dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, err.response.data));
            });
    };
};

export const editCourse = (paranms) => {
    return (dispatch) => {
        courseManagerService
            .EditCourseByAdmin(paranms)
            .then((res) => {
                Swal.fire({
                    title: "Thành công",
                    iconHtml: STATUS_ICON_SUCCESS,
                    text: "Bạn đã sửa thành công khoá học",
                    customClass: {
                        icon: "no-border",
                    },
                });
            })
            .catch((err) => {
                Swal.fire({
                    title: "err",
                    iconHtml: STATUS_ICON_ERROR,
                    text: "Sửa khoá học thất bại",
                    customClass: {
                        icon: "no-border",
                    },
                });
            });
    };
};
