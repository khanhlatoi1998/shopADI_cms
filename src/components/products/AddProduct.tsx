import { FastField, Form, Formik } from "formik";
import * as yup from 'yup';
import uuid from 'react-uuid';

import InputFieldSearchProduct from "../form/custom-field/InputFieldSearchProducts";
import SelectFieldSearchProducts from "../form/custom-field/SelectFieldSearchProducts";
import TextAreaField from "../form/custom-field/TextAreaField";
import { CATEGORY_OPTIONS } from "../../common/select";
import InputField from "../form/custom-field/InputField";
import InputFilesField from "../form/custom-field/InputFilesField";
import productsApi from "../../api/productsApi";
import InputFieldColor from "../form/custom-field/InputFieldColor";

const AddProduct = () => {
    const initialValues = {
        product_name: "", 
        product_category: "", 
        product_slug: "", 
        product_price: "", 
        product_oldPrice: "", 
        product_color: "", 
        product_listColor: [],
        product_description: "", 
        product_image: "",
        product_listImage: [],
        size: ['S', 'M', 'L', 'X'],
        quanlity: 1,
    };

    const validationSchema = yup.object().shape({
        product_name: yup.string().required('vui lòng nhập thông tin'), 
        product_category: yup.string().required('vui lòng nhập thông tin'), 
        product_slug: yup.string().required('vui lòng nhập thông tin'), 
        product_price: yup.number().typeError('vui lòng nhập số').required('vui lòng nhập thông tin'), 
        product_oldPrice: yup.number().typeError('vui lòng nhập số').required('vui lòng nhập thông tin'), 
        product_color: yup.string().required('vui lòng nhập thông tin'), 
        product_image: yup.string().required('vui lòng nhập thông tin'), 
        // product_subImage: yup.string().required('vui lòng nhập thông tin'), 
        product_description: yup.string(), 
    });

    const onSubmit = (value: any) => {
        delete value.product_image;
        delete value.product_color;
        value.product_slug += `-${Math.floor(Math.random() * 10000000)}`; 
        console.log('submit', value);
        productsApi.createItem(value);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                enableReinitialize
                validationSchema={validationSchema}
            >
                {formikProps => {
                    const {values} = formikProps;
                    console.log(values);
                    return (
                        <Form className="">
                            <div>
                                <div className="text-size-7 flex items-stretch justify-between" >
                                    <p>Add a new product</p>
                                    <div>
                                        <button type="submit" className="bg-color_02 text-white rounded text-size-4 py-1 px-3">Save</button>
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-6 shadow-main mt-6">
                                    <div className="mt-4 flex flex-col gap-2">
                                        <FastField
                                            label="Product name"
                                            name="product_name"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Category"
                                            name="product_category"
                                            className="border border-gray-300 flex-1 max-w-[500px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            options={CATEGORY_OPTIONS}
                                            component={SelectFieldSearchProducts}
                                        ></FastField>
                                        <FastField
                                            label="Slug"
                                            name="product_slug"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Price"
                                            name="product_price"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Old price"
                                            name="product_oldPrice"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Color"
                                            name="product_color"
                                            className="border border-gray-300 flex-1 max-w-[352px] min-w-[452px] h-[40px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right"
                                            type="color"
                                            component={InputFieldColor}
                                        ></FastField>
                                        <FastField
                                            label="Image"
                                            name="product_image"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            
                                            value={undefined}
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            multiple="multiple"
                                            component={InputFilesField}
                                        ></FastField>
                                        <FastField
                                            label="Description"
                                            name="product_description"
                                            className="border border-gray-300 flex-1 px-3 py-1 max-w-[352px] min-w-[452px] min-h-[12px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right"
                                            type="text"
                                            component={TextAreaField}
                                        ></FastField>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default AddProduct;