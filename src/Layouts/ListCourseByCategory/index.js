import React from "react";
import "./main.scss";
export default function ListCourseByCategory({ courseListByCategory }) {
    console.log("courseListByCategory", courseListByCategory);
    const mapItem = () => {
        return courseListByCategory.map((item, index) => {
            return (
                <div class="col-md-3 col-sm-6 col-xs-12" key={index}>
                    <div class="item">
                        <div class="img position-relative overflow-hidden content-hover">
                            <img class="w-100" src={item.hinhAnh} />
                            <div class="info d-flex justify-content-center align-items-center flex-column position-absolute text-white">
                                <a class="d-block mt-3 mb-2 text-white text-decoration-none">
                                    READ MORE
                                </a>
                                <p>Released: {item.ngayTao}</p>
                            </div>
                        </div>
                        <h4 class="text-center">{item.tenKhoaHoc}</h4>
                       
                    </div>
                </div>
            );
        });
    };
    return (
        <div>
            {courseListByCategory == "" ? (
                <>Still loading...</>
            ) : (
                <section class="new">
                    <div class="container">
                        <h1>NEW IN</h1>
                        <div class="row">{mapItem()}</div>
                    </div>
                </section>
            )}
        </div>
    );
}
