import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar";
import PageNotFound from "../PageNotFound";
import CourseManager from "./CourseManage";
import EditCourseByAdmin from "./EditCourseByAdmin";
import EditUserByAdmin from "./EditUserByAdmin";
import HomeAdmin from "./HomeAdmin";
import UserManager from "./UserManager";

export default function Admin() {
    const history = useHistory();
    const chuyenHuongAdmin = () => {
        Swal.fire({
            title: "Bạn không phải là quản trị!",
            text: "Vui lòng đăng nhập bằng tài khoản quản trị",
            type: "error", //error, success,warning,question
            confirmButtonText: "Đăng nhập",
        });
        localStorage.removeItem("userItem");
        history.replace("/signin");
    };
    const token = JSON.parse(localStorage.getItem("userItem"));

    return (
        <>
            {token && token.maLoaiNguoiDung === "GV" ? (
                <>
                    <Navbar token={token} />
                    <Switch>
                        <Route exact path={`/admin/usermanager`} component={UserManager} />
                        <Route
                            exact
                            path={`/admin/usermanager/:taiKhoan`}
                            component={EditUserByAdmin}
                        />

                        <Route exact path={`/admin/coursemanager`} component={CourseManager} />
                        <Route
                            exact
                            path={`/admin/coursemanager/:maKhoaHoc`}
                            component={EditCourseByAdmin}
                        />
                        <Route exact path="/admin" component={HomeAdmin} />
                        <Route exact path="*" component={PageNotFound} />
                    </Switch>
                </>
            ) : (
                chuyenHuongAdmin()
            )}
        </>
    );
}
