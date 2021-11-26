import axios from "axios";

export const headersAxios = () => {
    const userInfo = localStorage.getItem("userItem");

    if (userInfo) {
        axios.interceptors.request.use(function (config) {
            const token = JSON.parse(userInfo).accessToken;
            config.headers.Authorization = token ? `Bearer ${token}` : "";
            console.log(config);
            return config;
        });
    }
};
