import { FastField, Form, Formik } from "formik";
import * as yup from 'yup';


import InputFieldSearchProduct from "../form/custom-field/InputFieldSearchProducts";
import SelectFieldSearchProducts from "../form/custom-field/SelectFieldSearchProducts";
import TextAreaField from "../form/custom-field/TextAreaField";
import { CATEGORY_OPTIONS } from "../../common/select";
import InputField from "../form/custom-field/InputField";
import InputFilesField from "../form/custom-field/InputFilesField";
import productsApi from "../../api/productsApi";

const AddProduct = () => {
    const initialValues = {
        addProduct_name: "", 
        addProduct_category: "", 
        addProduct_slug: "", 
        addProduct_price: "", 
        addProduct_oldPrice: "", 
        addProduct_color: "", 
        addProduct_description: "", 
        addProduct_image: "",
        AddProduct_listImage: []
    };

    const validationSchema = yup.object().shape({
        addProduct_name: yup.string().required('vui lòng nhập thông tin'), 
        addProduct_category: yup.string().required('vui lòng nhập thông tin'), 
        addProduct_slug: yup.string().required('vui lòng nhập thông tin'), 
        addProduct_price: yup.string().required('vui lòng nhập thông tin'), 
        addProduct_oldPrice: yup.string().required('vui lòng nhập thông tin'), 
        addProduct_color: yup.string().required('vui lòng nhập thông tin'), 
        addProduct_image: yup.string().required('vui lòng nhập thông tin'), 
        // addProduct_subImage: yup.string().required('vui lòng nhập thông tin'), 
        addProduct_description: yup.string(), 
    });

    const onSubmit = (value: any) => {
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
                                            name="addProduct_name"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Category"
                                            name="addProduct_category"
                                            className="border border-gray-300 flex-1 max-w-[500px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            options={CATEGORY_OPTIONS}
                                            component={SelectFieldSearchProducts}
                                        ></FastField>
                                        <FastField
                                            label="Slug"
                                            name="addProduct_slug"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Price"
                                            name="addProduct_price"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Old price"
                                            name="addProduct_oldPrice"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Color"
                                            name="addProduct_color"
                                            className="border border-gray-300 flex-1 max-w-[352px] min-w-[452px] h-[40px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right"
                                            type="color"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Image"
                                            name="addProduct_image"
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
                                            name="addProduct_description"
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