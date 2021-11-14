import React from "react";
import "./main.scss";
import logoFooter from "../../assets/img/logo-coral.svg";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-6">
                        <p>
                            <b>Udemy for Business</b>
                            <br />
                            <b>Teach on Udemy</b>
                            <br />
                            Udemy app
                            <br />
                            About us
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-6">
                        <p>
                            Contact
                            <br />
                            Careers
                            <br />
                            Blog
                            <br />
                            Help and Support
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12">
                        <p>
                            Udemy for Business
                            <br />
                            Teach on Udemy
                            <br />
                            Udemy app
                            <br />
                            About us
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
                </div>
            </div>
            <div className="row">
                <div className="footer_flex col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center  align-items-center">
                    <img src={logoFooter} alt="" />
                    <p>Copyright © 2020 Udemy, Inc.</p>
                </div>
            </div>
        </footer>
    );
}
