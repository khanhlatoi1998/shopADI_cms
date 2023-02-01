import { FastField, Form, Formik } from "formik";
import * as yup from 'yup';

import { CATEGORY_OPTIONS, PRICE_OPTIONS } from "../../../common/select";
import ListProduct from "../../products/ListProduct";
import InputFieldSearchProduct from "../custom-field/InputFieldSearchProducts";
import SelectFieldSearchProducts from "../custom-field/SelectFieldSearchProducts";

const SearchProducts = () => {

    const initialValues = {
        searchProduct_name: '',
        product_category: '',
        product_createdDate: '',
        product_price: '',
    };

    const onSubmit = (value: any) => {
        console.log(value);
    };

    const validationSchema = yup.object().shape({
        searchProduct_name: yup.string().required('vui lòng nhập thông tin'),
    });

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white py-4 px-6 shadow-main mt-6">
                <div>
                    <span>
                        <i className="fa-solid fa-magnifying-glass mr-4"></i>
                    </span>
                    <span>Search</span>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(value) => onSubmit(value)}
                    validationSchema={validationSchema}
                >
                    {formikProps => {
                        const { values } = formikProps;
                        return (
                            <Form className="">
                                <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-y-1">
                                    <FastField
                                        label="Product name"
                                        name="searchProduct_name"
                                        className="border border-gray-300 flex-1 py-1 px-3 w-full"
                                        classNameContainer="flex gap-4"
                                        type="text"
                                        component={InputFieldSearchProduct}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Category"
                                        name="searchProduct_category"
                                        className="border border-gray-300 flex-1 w-full"
                                        classNameContainer="flex gap-4"
                                        placeholder="All"

                                        options={CATEGORY_OPTIONS}
                                        component={SelectFieldSearchProducts}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Price"
                                        name="searchProduct_price"
                                        className="border border-gray-300 flex-1 w-full"
                                        classNameContainer="flex gap-4"
                                        placeholder="All"

                                        options={PRICE_OPTIONS}
                                        component={SelectFieldSearchProducts}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Created Date"
                                        name="searchProduct_createDate"
                                        className="border border-gray-300 flex-1 py-1 px-3 w-full"
                                        classNameContainer="flex gap-4"
                                        type="text"
                                        component={InputFieldSearchProduct}
                                    >
                                    </FastField>
                                </div>
                                <div className="text-center mt-8">
                                    <button type="submit" className="px-4 py-2 bg-color_02 text-white rounded">
                                        <i className="fa-solid fa-magnifying-glass mr-4"></i>
                                        Search
                                    </button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
            <div className="bg-white py-4 px-6 shadow-main">
                <ListProduct />
            </div>
        </div>
    );
};

export default SearchProducts;