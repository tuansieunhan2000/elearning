import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/sass/main.scss";
import ProfileScreen from "./container/UserScreen/Profile";
import Header from "./Layouts/Header";
import { createAction } from "./Redux/Actions";
import { fetchCategory } from "./Redux/Actions/categoryAction";
import { fetchCourse, fetchCourseByTypeDefaul } from "./Redux/Actions/courseAction";
import { GET_USER_LOGIN } from "./Redux/Types";
import CourseList from "./container/UserScreen/CourseList";
import DetailScreen from "./container/UserScreen/Detail";
import HomeScreen from "./container/UserScreen/Home";
import SignInScreen from "./container/UserScreen/SignIn";
import SignUpScreen from "./container/UserScreen/SignUp";
import axios from "axios";
// import ProfileEditScreen from "./container/UserScreen/ProfileEditScreen";

function App() {
    const dispatch = useDispatch();
    const getUserInfo = () => {
        const userInfo = localStorage.getItem("userItem");
        if (userInfo) {
            dispatch(createAction(GET_USER_LOGIN, JSON.parse(userInfo)));
            axios.interceptors.request.use(function (config) {
                const token = JSON.parse(userInfo).accessToken;
                config.headers.Authorization = token ? `Bearer ${token}` : "";
                // console.log(config);
                return config;
            });
        }
    };

    useEffect(() => {
        getUserInfo();
    });

    useEffect(() => {
        dispatch(fetchCourse());
        dispatch(fetchCategory());
        fetchCourseByTypeDefaul("BackEnd");
    }, [dispatch]);
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/detail/:id" component={DetailScreen} />
                <Route exact path="/courselist/:type" component={CourseList} />
                <Route exact path="/signup" component={SignUpScreen} />
                <Route exact path="/signin" component={SignInScreen} />
                <Route exact path="/profile" component={ProfileScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
