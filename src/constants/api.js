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
export const API_USER_INFO = API + API_USER + "ThongTinTaiKhoan";
