import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../../Components/CourseItem";

import queryString from "query-string";
import { fetchCoursePerPage } from "../../Redux/Actions/courseAction";
import { fetchUserPerPage } from "../../Redux/Actions/UserAdminAction";
// import "./main.scss";
export default function ListUserPerPage() {
    const dispatch = useDispatch();
    const userListPerPage = useSelector((state) => state.maLoaiNguoiDung.userListPerPage);
    const user = userListPerPage.items;
    const [filters, setFilters] = useState({
        user,
        page: 1,
        pageSize: 12,
        MaNhom: "GP01",
    });

    useEffect(() => {
        const paramsString = queryString.stringify(filters);

        dispatch(fetchUserPerPage(paramsString));
    }, [dispatch, filters]);

    function onPageChange(newPage) {
        setFilters({
            ...filters,
            page: newPage,
        });
    }
    const renderCourseList = () => {
        return user.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.taiKhoan}</td>
                    <td>{item.hoTen}</td>
                    <td>{item.soDT}</td>

                    <td>
                        {item.email.lenght < 20 ? item.email : item.email.substring(0, 20) + "..."}
                    </td>
                    <td>{item.maLoaiNguoiDung}</td>
                    <td>
                        <i class="fas fa-edit"></i>
                    </td>
                    <td>
                        <i class="fas fa-trash-alt"></i>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            {!userListPerPage.items ? (
                <>Still loading...</>
            ) : (
                <div className="container  pb-4">
                    <div className="row">
                        <h4 className="header_course_list p-0 pb-3">Danh sách người dùng</h4>
                        <div class="input-group rounded">
                            <input
                                type="search"
                                class="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>

                        <div className="container pt-3">
                            <div className="row">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Tài Khoản</th>
                                            <th scope="col">Họ tên</th>
                                            <th scope="col">SDT</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">MND</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>{renderCourseList()}</tbody>
                                </table>
                            </div>
                            <div className="text-center">
                                <button
                                    className="btn-prev"
                                    disabled={userListPerPage.currentPage <= 1}
                                    onClick={() => {
                                        console.log("current page", userListPerPage.currentPage);
                                        onPageChange(filters.page - 1);
                                    }}
                                >
                                    Prev
                                </button>
                                <button
                                    className="btn-prev"
                                    disabled={
                                        userListPerPage.currentPage >= userListPerPage.totalPages
                                    }
                                    onClick={() => onPageChange(filters.page + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
