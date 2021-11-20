import React from "react";
import "./main.scss";
export default function DetailCourse({ detailCourse }) {
    return (
        <div className="container detail-course">
            <div className="row">
                <div className="address-link">
                    Trang chủ <i class="fas fa-angle-right"></i>
                    {detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc} 
                    <i class="fas fa-angle-right"></i> {detailCourse.tenKhoaHoc}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <img
                        className="card-img-top"
                        src={detailCourse.hinhAnh}
                        alt={detailCourse.hinhAnh}
                    />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <table class="table borderless">
                        <tbody>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Tên khóa học
                                </th>
                                <td>{detailCourse.tenKhoaHoc}</td>
                            </tr>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Ngày Tạo
                                </th>
                                <td>{detailCourse.ngayTao}</td>
                            </tr>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Danh mục
                                </th>
                                <td>{detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}</td>
                            </tr>
                            <tr>
                                <th className="title-tablle" width="20%">
                                    Mô tả
                                </th>
                                <td>{detailCourse.moTa}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
