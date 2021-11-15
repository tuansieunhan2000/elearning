import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/sass/main.scss";
import Header from "./Layouts/Header";
import { createAction } from "./Redux/Actions";
import { fetchCategory } from "./Redux/Actions/categoryAction";
import { fetchCourse, fetchCourseByTypeDefaul } from "./Redux/Actions/courseAction";
import { GET_USER_LOGIN } from "./Redux/Types";
import CourseList from "./Screens/CourseList";
import DetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignInScreen from "./Screens/SignIn";
import SignUpScreen from "./Screens/SignUp";

function App() {
    const dispatch = useDispatch();
    const getUserInfo = () => {
        const userInfo = localStorage.getItem("userItem");
        if (userInfo) {
            dispatch(createAction(GET_USER_LOGIN, JSON.parse(userInfo)));
        }
    };
    useEffect(() => {
        getUserInfo();
    });

    useEffect(() => {
        dispatch(fetchCourse());
        dispatch(fetchCategory());
        dispatch(fetchCourseByTypeDefaul("BackEnd"));
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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
