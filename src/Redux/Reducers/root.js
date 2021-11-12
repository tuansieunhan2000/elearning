import { combineReducers } from "redux";
import CategoryReducer from "./category";
import CourseReducer from "./course";
import UserReducer from "./user";

const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer,
    category: CategoryReducer,
});

export default RootReducer;
