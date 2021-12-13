import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { STATUS_ICON_WARNING } from "../../constants/status";
import { deleteUserByAdmin, fetchUserPerPage } from "../../Redux/Actions/UserAdminAction";

// import "./main.scss";
export default function ListUserPerPage({ maLoaiNguoiDung }) {
    const dispatch = useDispatch();
    const userListPerPage = useSelector((state) => state.maLoaiNguoiDung.userListPerPage);
    const user = useSelector((state) => state.maLoaiNguoiDung.userListPerPageData);

    const [search, setsearch] = useState("");
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
    function handleSearchTermChange(e) {
        setsearch(e.target.value);
    }
    const handleSearch = () => {
        console.log(search);
        if (search) {
            setFilters({
                ...filters,
                page: 1,
                tuKhoa: search,
            });
        } else {
            setFilters({
                user,
                page: 1,
                pageSize: 12,
                MaNhom: "GP01",
            });
        }
    };
    const handleDeleteUser = (taikhoan) => {
        Swal.fire({
            title: "Bạn có chắc chắn xoá không?",
            iconHtml: STATUS_ICON_WARNING,
            text: "Bạn sẽ không thể phục hồi được",
            customClass: {
                icon: "no-border",
            },
            showCancelButton: true,
            confirmButtonText: "Chắc chắn",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUserByAdmin(taikhoan));
            }
        });
    };

    const renderCourseList = () => {
        let counter = 0;
        for (const obj of user) {
            if (obj) counter++;
        }

        if (counter === 0) {
            return (
                <tr>
                    <td colSpan="7">Không tìm thây kết quả phù hợp</td>
                </tr>
            );
        } else {
            return user.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.taiKhoan}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.soDT}</td>
                        <td>
                            {item.email.lenght < 20
                                ? item.email
                                : item.email.substring(0, 20) + "..."}
                        </td>
                        <td>{item.maLoaiNguoiDung}</td>
                        <td>
                            {/* <ModalEdituser maLoaiNguoiDung={maLoaiNguoiDung} item={item.taiKhoan} /> */}
                            <Link to={`/admin/usermanager/${item.taiKhoan}`}>
                                <i className="fas fa-edit" style={{ color: "black" }}></i>
                            </Link>
                        </td>
                        <td>
                            <i
                                className="fas fa-trash-alt"
                                onClick={() => handleDeleteUser(item.taiKhoan)}
                            ></i>
                        </td>
                    </tr>
                );
            });
        }
    };

    return (
        <div>
            {!userListPerPage.items ? (
                <>Still loading...</>
            ) : (
                <div className="container mt-4">
                    <div className="row">
                        <div className="d-flex justify-content-between mt-4">
                            <div className="col-6 ">
                                <h4 className="header_course_list p-0  pb-3">
                                    Danh sách người dùng
                                </h4>
                            </div>
                            <div className="col-6">
                                <div className="input-group rounded">
                                    <input
                                        type="search"
                                        className="form-control rounded"
                                        placeholder="Nhập vào tên hoặc tài khoản"
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                        value={search}
                                        onChange={handleSearchTermChange}
                                    />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fas fa-search" onClick={handleSearch} />
                                    </span>
                                </div>
                            </div>
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
