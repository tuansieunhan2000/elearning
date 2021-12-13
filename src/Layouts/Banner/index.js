import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/img/cover.jpg";
import "./main.scss";
export default function Banner() {
    const [search, setsearch] = useState("");

    return (
        <div className="header__banner ">
            <div className="banner__img">
                <img src={banner} alt={banner} />
                <div className="leanOn__banner">
                    <div className="para__leanOn">
                        <h1>Learn on your schedule</h1>
                        <p>
                            Study any topic, anytime. Choose from thousands
                            <br /> of expert-led courses now.
                        </p>
                    </div>
                    <form className="search__banner">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="What do you want to lean?"
                                onChange={(e) => {
                                    setsearch(e.target.value);
                                }}
                            />
                            <div className="input-group-append">
                                <Link
                                    to={`/courselist/search/${search}`}
                                    className="input-group-text"
                                    id="basic-addon2"
                                    style={{ textDecoration: "none" }}
                                >
                                    <i className="fas fa-search"></i>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg__linear">
                <div className="content_linear">
                    <div className="spread__color row">
                        <div className="col-4 col-md-4 col-lg-4 col-xl-4 drop__item">
                            <div className="icon__header">
                                <i className="fab fa-medrt" />
                            </div>
                            <div className="c para__header">
                                <p>
                                    <span>
                                        <b>100,000 online courses</b>
                                    </span>
                                    <br /> Explore a variety of fresh topics
                                </p>
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4 col-xl-4 drop__item ">
                            <div className="icon__header">
                                <i className="fa fa-check-circle" />
                            </div>
                            <div className="para__header">
                                <p>
                                    <span>
                                        <b>Expert instruction</b>
                                    </span>
                                    <br />
                                    Find the right instructor for you
                                </p>
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4 col-xl-4 drop__item">
                            <div className="icon__header">
                                <i className="fa fa-clock" />
                            </div>
                            <div className="para__header">
                                <p>
                                    <span>
                                        <b>Life time access</b>
                                    </span>
                                    <br />
                                    Learn on your schedule
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
