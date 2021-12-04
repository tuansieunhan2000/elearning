import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/img/logo-coral.svg";
import "./main.scss";

export default function Header() {
    const userInfo = useSelector((state) => state.user.userInfo) || {};
    const category = useSelector((state) => state.category.category) || {};

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    const fetchCategory = (category) => {
        return category.map((categoryItem) => {
            return (
                <Link
                    className="dropdown-item"
                    to={`/courselist/${categoryItem.maDanhMuc}`}
                    key={categoryItem.maDanhMuc}
                >
                    {categoryItem.tenDanhMuc}
                </Link>
            );
        });
    };

    let textInput = React.createRef(); // React use ref to get input value

    let onOnclickHandler = (e) => {
        console.log(textInput.current.value);
    };

    const fetchCategorySmallSreen = () => {
        return (
            <ul className="dropdown-submenu">
                <li>
                    <i className="fa fa-th iconLogoutDislaySmall ml-3"></i>Hạng mục
                    <ul className="dropdown-submenu">{fetchCategory(category)}</ul>
                </li>
            </ul>
        );
    };
    return (
        <header>
            <nav className="navbar navbar-expand-md d-flex justify-content-between flex-row px-4">
                <div className="col-sm-1 d-md-none ">
                    <div className="nav-item dropdown displayWhenSmallScreen ">
                        <Link
                            className="nav-link "
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            to="#"
                        >
                            <i className="fa fa-bars" />
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {userInfo.taiKhoan ? (
                                <>
                                    <Link className="dropdown-item" to="">
                                        {`Hi, ${
                                            userInfo.hoTen.toString().length > 20
                                                ? userInfo.hoTen.substring(0, 15) + "..."
                                                : userInfo.hoTen
                                        }`}
                                    </Link>
                                    {fetchCategorySmallSreen()}
                                    <Link className="dropdown-item" onClick={logout} to="">
                                        <i className="fas fa-sign-out-alt iconLogoutDislaySmall"></i>
                                        Đăng xuất
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {fetchCategorySmallSreen()}
                                    <Link to="/signin" className="dropdown-item">
                                        <i className="fas fa-sign-in-alt iconLogoutDislaySmall"></i>
                                        Đăng nhập
                                    </Link>
                                    <Link to="/signup" className="dropdown-item ">
                                        <i className="fas fa-user-plus iconLogoutDislaySmall"></i>
                                        Đăng kí
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className=" col-sm-11 col-md-12 col-lg-9 ">
                    <div className="header__left d-flex justify-content-start flex-row align-items-start">
                        <NavLink className="navbar-brand text-center" to="/">
                            <img src={logo1} alt="logo" />
                        </NavLink>
                        <div className="nav-item dropdown Categories ">
                            <Link
                                className="nav-link "
                                to="/"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa fa-th"></i>Category
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {fetchCategory(category)}
                            </div>
                        </div>
                        <form className="form__search ml-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for anything"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    ref={textInput}
                                />
                                <div className="input-group-append">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon2"
                                        onClick={onOnclickHandler}
                                    >
                                        <i className="fa fa-search" />
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className=" col-lg-3 d-none d-md-block d-flex justify-content-between flex-row-reverse">
                    <div className="header__right  d-md-none d-lg-block">
                        <ul className="navbar-nav d-flex align-items-center flex-row-reverse">
                            {userInfo.taiKhoan ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/" className="navlink logout" onClick={logout}>
                                            <i className="fas fa-sign-out-alt"></i>
                                            Đăng xuất
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/profile" className="navlink nameUser">
                                            {`Hi, ${
                                                userInfo.hoTen.toString().length > 20
                                                    ? userInfo.hoTen.substring(0, 15) + "..."
                                                    : userInfo.hoTen
                                            }`}
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/signin" className="navlink signIn">
                                            Đăng nhập
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/signup" className="navlink signUp">
                                            Đăng kí
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
