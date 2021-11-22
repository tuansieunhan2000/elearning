import axios from "axios";
import { API_LOGIN_USER, API_REGISTER_USER, API_USER_INFO } from "../constants/api";
import * as yup from "yup";

export const signUpUserSchema = yup.object().shape({
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

export const signInUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
    matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});
export default function UserService() {}
UserService.prototype = {
    SignUp(value) {
        return axios.post(API_REGISTER_USER, value);
    },
    SignIn(value) {
        return axios.post(API_LOGIN_USER, value);
    },
    GetUserInfo(token, taiKhoan) {
        return axios.post(
            API_USER_INFO,
            { taiKhoan: taiKhoan },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    },
};
