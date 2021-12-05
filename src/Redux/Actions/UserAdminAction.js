import Swal from "sweetalert2";
import { createAction } from ".";
import { userManagerService } from "../../Services";
import {
    DELETE_USER_BY_ADMIN,
    FETCH_USER_LIST_PER_PAGE,
    FETCH_USER_LIST_PER_PAGE_DATA,
} from "../Types";

export const fetchUserPerPage = (paranms) => {
    return (dispatch) => {
        userManagerService
            .fetchListUserPerPage(paranms)
            .then((res) => {
                dispatch(createAction(FETCH_USER_LIST_PER_PAGE, res.data));
                dispatch(createAction(FETCH_USER_LIST_PER_PAGE_DATA, res.data.items));
            })
            .catch((err) => console.log(err));
    };
};
export const deleteUserByAdmin = (data) => {
    return (dispatch) => {
        userManagerService
            .deleteUser(data)
            .then((res) => {
                console.log(res.data);
                Swal.fire("Success", res.data);
                dispatch(createAction(DELETE_USER_BY_ADMIN, data));
            })
            .catch((err) => {
                Swal.fire("Error", err.response.data);
            });
    };
};
