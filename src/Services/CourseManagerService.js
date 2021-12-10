import axios from "axios";
import {
    API_COURSES,
    API_COURSES_PER_PAGE,
    API_DELETE_COURSE_BY_ADMIN,
    API_DETAIL_COURSES,
    API_GET_COURSE_LIST_BY_TYPE,
    API_SEARCH_COURSE,
} from "../constants/api";
import * as yup from "yup";
import { getFileExtension, isImage } from "../constants/checkFileType";

// function getFileExtension(filename) {
//     var ext = /^.+\.([^.]+)$/.exec(filename);
//     return ext == null ? "" : ext[1];
// }
export const AddCourseSchema = yup.object().shape({
    maKhoaHoc: yup.string().required("Vui lòng nhập mã khoá học"),
    biDanh: yup.string().required("Vui lòng nhập bí danh cho khoá học"),
    tenKhoaHoc: yup.string().required("Vui lòng nhập tên khoá học"),
    moTa: yup.string().required("Vui lòng nhập mỗ tả"),
    ngayTao: yup.string().required("Vui lòng chọn ngày"),
    luotXem: yup.number().integer().min(0),
    danhGia: yup.number().integer().min(0),
    hinhAnh: yup
        .mixed()
        .required("Vui lòng chọn file")
        .test("type", "Chỉ hỗ trợ được các định dạng: .jpeg, .jpg, .bmp, .png, .png", (value) => {
            let valueCheck = getFileExtension(value);
            switch (valueCheck.toLowerCase()) {
                case "jpg":
                case "gif":
                case "bmp":
                case "png":
                case "jpeg":
                    //etc
                    return true;
            }
            return false;
        }),

    maNhom: yup.string().required("Vui lòng chọn mã nhóm"),
    maDanhMucKhoaHoc: yup.string().required("Vui lòng chọn mã danh mục khoá học"),
});

export default function CourseManagerService() {}

CourseManagerService.prototype = {
    DetailCourse(id) {
        return axios.get(`${API_DETAIL_COURSES}${id}`);
    },
    AllCourse() {
        return axios.get(API_COURSES);
    },
    SearchCourse(tenKhoaHoc) {
        return axios.get(`${API_SEARCH_COURSE}${tenKhoaHoc}`);
    },
    GetCourseListByType(maDanhMuc) {
        return axios.get(`${API_GET_COURSE_LIST_BY_TYPE}${maDanhMuc}`);
    },
    GetCourseListByTypeDeFault(maDanhMuc) {
        return axios.get(`${API_GET_COURSE_LIST_BY_TYPE}${maDanhMuc}`);
    },
    GetCourseListPerPage(param) {
        return axios.get(`${API_COURSES_PER_PAGE}${param}`);
    },
    GetCourseListSameType(maDanhMuc) {
        return axios.get(`${API_GET_COURSE_LIST_BY_TYPE}${maDanhMuc}`);
    },
    DeleteCourseByAmin(maKhoaHoc) {
        return axios.delete(API_DELETE_COURSE_BY_ADMIN, { MaKhoaHoc: maKhoaHoc });
    },
};
