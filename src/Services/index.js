import CategoryService from "./CategoryService";
import CourseManagerService from "./CourseManagerService";
import CourseService from "./CourseService";
import UserManagerService from "./UserManagerService";
import UserService from "./UserService";

export const userService = new UserService();
export const courseService = new CourseService();
export const categoryService = new CategoryService();
export const userManagerService = new UserManagerService();
export const courseManagerService = new CourseManagerService();
