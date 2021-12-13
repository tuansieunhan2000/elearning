import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingLazy from "../../Components/LazyLoad";
import { STATUS_ICON_WARNING } from "../../constants/status";
import { deleteCourse, fetchCoursePerPageAdmin } from "../../Redux/Actions/courseListAdmin";

export default function ListCoursePerPage() {
    const dispatch = useDispatch();
    const courseListPerPage = useSelector(
        (state) => state.manageUserByAdminReducer.listCoursePerPage
    );
    const course = useSelector((state) => state.manageUserByAdminReducer.listCoursePerPageData);
    console.log("courseListPerPage", courseListPerPage);
    const [search, setsearch] = useState("");
    const [filters, setFilters] = useState({
        course,
        page: 1,
        pageSize: 12,
        MaNhom: "GP01",
    });

    useEffect(() => {
        const paramsString = queryString.stringify(filters);
        dispatch(fetchCoursePerPageAdmin(paramsString));
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
                tenKhoaHoc: search,
            });
        } else {
            setFilters({
                course,
                page: 1,
                pageSize: 12,
                MaNhom: "GP01",
            });
        }
    };
    const handleDeleteUser = (taikhoan) => {
        console.log(taikhoan);
        // console.log("allEmojiShotcut", allEmojiShotcut[1]);
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
                dispatch(deleteCourse(taikhoan));
            }
        });
    };

    const renderCourseList = () => {
        let counters = 0;
        for (const obj in course) {
            counters = obj;
        }
        if (counters === 0) {
            return (
                <tr>
                    <td colSpan="7">Không tìm thây kết quả phù hợp</td>
                </tr>
            );
        } else {
            return course.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.maKhoaHoc}</td>
                        <td>{item.tenKhoaHoc}</td>
                        <td>
                            <img
                                src={item.hinhAnh}
                                alt=""
                                style={{ width: "50px", height: "50px" }}
                            />
                        </td>

                        <td>{item.ngayTao}</td>
                        <td>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</td>
                        <td>{item.danhMucKhoaHoc.maDanhMucKhoahoc}</td>
                        <td>
                            <Link to={`/admin/coursemanager/${item.maKhoaHoc}`}>
                                <i className="fas fa-edit" style={{ color: "black" }}></i>
                            </Link>
                        </td>
                        <td>
                            <i
                                className="fas fa-trash-alt"
                                onClick={() => handleDeleteUser(item.maKhoaHoc)}
                            ></i>
                        </td>
                    </tr>
                );
            });
        }
    };

    return (
        <div>
            {!courseListPerPage ? (
                <>
                    <LoadingLazy />
                </>
            ) : (
                <div className="container mt-4">
                    <div className="row">
                        <div className="d-flex justify-content-between mt-4">
                            <div className="col-6 ">
                                <h4 className="header_course_list p-0  pb-3">Danh sách khoá học</h4>
                            </div>
                            <div className="col-6">
                                <div className="input-group rounded">
                                    <input
                                        type="search"
                                        className="form-control rounded"
                                        placeholder="Nhập vào tên khoá học"
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
                                            <th scope="col">Mã khoá học</th>
                                            <th scope="col">Tên khoá học</th>
                                            <th scope="col">Hình Ảnh</th>
                                            <th scope="col">Ngày tạo</th>

                                            <th scope="col">Mã danh mục</th>
                                            <th scope="col">Tên danh mục</th>
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
                                    disabled={courseListPerPage.currentPage <= 1}
                                    onClick={() => {
                                        console.log("current page", courseListPerPage.currentPage);
                                        onPageChange(filters.page - 1);
                                    }}
                                >
                                    Prev
                                </button>
                                <button
                                    className="btn-prev"
                                    disabled={
                                        courseListPerPage.currentPage >=
                                        courseListPerPage.totalPages
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
