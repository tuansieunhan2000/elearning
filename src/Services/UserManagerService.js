import axios from "axios";

import { API_ADD_USER, API_LAY_MA_NGUOI_DUNG } from "../constants/api";

import * as yup from "yup";

export const AddUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
    matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
    hoTen: yup.string().required("Vui lòng nhập nhập họ tên"),
    soDT: yup
        .string()
        .matches(/^(84|0[3|5|7|8|9])+([0-9]{8})\b/)
        .required("Vui lòng nhập số điện thoại"),
    maNhom: yup.string(),
    email: yup.string().required("Vui lòng nhập tài khoản").email("Email Không hợp lệ"),
});

export default function UserManagerService() {}

UserManagerService.prototype = {
    AddUser(data) {
        return axios.post(API_ADD_USER, data);
    },
    fetchMaNguoiDung() {
        return axios.get(API_LAY_MA_NGUOI_DUNG);
    },
};
