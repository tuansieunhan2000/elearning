import axios from "axios";
import { API_CATEGORY } from "../constants/api";

export default function CategoryService() {}
CategoryService.prototype = {
    FetchCategory() {
        return axios.get(API_CATEGORY);
    },
};
