import Swal from "sweetalert2";
import { createAction } from ".";
import { userManagerService } from "../../Services";
import {
    DELETE_USER_BY_ADMIN,
    FETCH_USER_LIST_PER_PAGE,
    FETCH_USER_LIST_PER_PAGE_DATA,
    GET_ALL_USER_BY_ADMIN,
    GET_DATA_USER_BY_ADMIN,
    UPDATE_USER_BY_ADMIN,
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
export const getAllUserByAdminAction = () => {
    return (dispatch) => {
        userManagerService
            .getAllUserByAdmin()
            .then((res) => {
                dispatch(createAction(GET_ALL_USER_BY_ADMIN, res.data));
            })
            .catch((err) => console.log(err));
    };
};
export const getDataUserByAdmin = (data) => {
    return (dispatch) => {
        dispatch(createAction(GET_DATA_USER_BY_ADMIN, data));
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

export const updateUserByAdmin = (data) => {
    return (dispatch) => {
        userManagerService
            .updateUser(data)
            .then((res) => {
                console.log(res.data);
                Swal.fire("Success", res.data);
                dispatch(createAction(UPDATE_USER_BY_ADMIN, data));
            })
            .catch((err) => {
                console.log(err);
                Swal.fire("Error", err.response);
            });
    };
};
