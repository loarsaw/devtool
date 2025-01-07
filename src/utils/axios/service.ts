import axiosInstance from "./axiosInstance";

export const getRequest = async (url: string) => {
    try {
        const { data } = await axiosInstance.get(url);
        return data;
    } catch (err) {
        if (err.code == "ERR_BAD_REQUEST") return "User not logged in"
    }
};

export const postRequest = async (url: string, pstData: any) => {
    try {
        const { data } = await axiosInstance.post(url, pstData);
        return data;
    } catch (err) {
        if (err.code == "ERR_BAD_REQUEST") return "User not logged in"
    }
};


