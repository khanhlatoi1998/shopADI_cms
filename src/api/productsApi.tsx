import axiosClient from "./axiosClient";

const productsApi = {
    createItem: (data: object) => {
        let url = '/products/create';
        console.log('api', data)
        return axiosClient.post(url, {data});

    },
};

export default productsApi;