import axiosClient from "./axiosClient";

const productsApi = {
    createItem: (data: object) => {
        let url = '/products/create';
        return axiosClient.post(url, {data});

    },
};

export default productsApi;