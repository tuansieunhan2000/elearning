const API = "https://elearning0706.cybersoft.edu.vn/api/";

const API_COURSE = "QuanLyKhoaHoc/";
const API_USER = "QuanLyNguoiDung/";

export const API_COURSES = API + API_COURSE + "LayDanhSachKhoaHoc";
export const API_CATEGORY = API + API_COURSE + "LayDanhMucKhoaHoc";
export const API_GET_COURSE_LIST_BY_TYPE = API + API_COURSE + "LayKhoaHocTheoDanhMuc?maDanhMuc=";
export const API_DETAIL_COURSES = API + API_COURSE + "LayThongTinKhoaHoc?maKhoaHoc=";
export const API_COURSES_PER_PAGE = API + API_COURSE + "LayDanhSachKhoaHoc_PhanTrang?";

export const API_REGISTER_USER = API + API_USER + "DangKy";
export const API_LOGIN_USER = API + API_USER + "DangNhap";
export const API_USER_INFO = API + API_USER + "ThongTinNguoiDung";

export const API_REGISTER_COURSE = API + API_COURSE + "DangKyKhoaHoc";
export const API_UNREGISTER_COURSE = API + API_COURSE + "HuyGhiDanh";
export const API_SEARCH_COURSE = "LayDanhSachKhoaHoc?MaNhom=GP01&tenKhoaHoc=";

export const API_ADD_USER = API + API_USER + "ThemNguoiDung";

export const API_LAY_MA_NGUOI_DUNG = API + API_USER + "LayDanhSachLoaiNguoiDung";

export const API_GET_LIST_USER_PER_PAGE = API + API_USER + "LayDanhSachNguoiDung_PhanTrang?";
export const API_DELETE_USER = API + API_USER + "XoaNguoiDung?TaiKhoan=";

export const API_UPDATE_USER = API + API_USER + "CapNhatThongTinNguoiDung";
export const API_GET_ALL_USER_BY_ADMIN = API + API_USER + "TimKiemNguoiDung";

//COURSE ADMIN
export const API_DELETE_COURSE_BY_ADMIN = API + API_COURSE + "XoaKhoaHoc";
