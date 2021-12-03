import React, { useEffect } from "react";
import CourseList from "./CourseList";
import DetailScreen from "./Detail";
import HomeScreen from "./Home";
import ProfileScreen from "./Profile";
import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";
import { Route, Switch } from "react-router-dom";
import Header from "../../Layouts/Header";
import { useDispatch } from "react-redux";
import { fetchCourse, fetchCourseByTypeDefaul } from "../../Redux/Actions/courseAction";
import { fetchCategory } from "../../Redux/Actions/categoryAction";
import { createAction } from "../../Redux/Actions";
import { GET_USER_LOGIN } from "../../Redux/Types";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

export default function Customer() {
    const dispatch = useDispatch();
    let match = useRouteMatch();

    const userInfo = localStorage.getItem("userItem");
    useEffect(() => {
        dispatch(fetchCourse());
        dispatch(fetchCategory());
        fetchCourseByTypeDefaul("BackEnd");
        dispatch(createAction(GET_USER_LOGIN, JSON.parse(userInfo)));
    }, [dispatch, userInfo]);
    console.log(`${match.url}detail/:id`);
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path={`${match.url}detail/:id`} component={DetailScreen} />
                <Route exact path={`${match.url}courselist/:type`} component={CourseList} />
                <Route exact path={`${match.url}signup`} component={SignUpScreen} />
                <Route exact path={`${match.url}signin`} component={SignInScreen} />
                <Route exact path={`${match.url}profile`} component={ProfileScreen} />
            </Switch>
        </>
    );
}

// path={`${match.path}/detail/:id`}
