import Swal from "sweetalert2";
import { createAction } from ".";
import { STATUS_ICON_ERROR, STATUS_ICON_SUCCESS } from "../../constants/status";
import { courseManagerService } from "../../Services";
import { FETCH_COURSE_LIST_PER_PAGE_ADMIN } from "../Types";

export const fetchCoursePerPageAdmin = (paranms) => {
    return (dispatch) => {
        courseManagerService
            .GetCourseListPerPage(paranms)
            .then((res) => {
                console.log(res.data);
                dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, res.data));
            })
            .catch((err) => {
                dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, err.response.data));

                console.log(err.response.data);
            });
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

                console.log(res.data);
                // dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, res.data));
            })
            .catch((err) => {
                // dispatch(createAction(FETCH_COURSE_LIST_PER_PAGE_ADMIN, err.response.data));
                Swal.fire({
                    title: "err",
                    iconHtml: STATUS_ICON_ERROR,
                    text: "Khóa học đã ghi danh học viên không thể xóa!",
                    customClass: {
                        icon: "no-border",
                    },
                });
            });
    };
};
