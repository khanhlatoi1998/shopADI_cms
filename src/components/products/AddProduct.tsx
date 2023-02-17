import { FastField, Form, Formik } from "formik";
import * as yup from 'yup';
import uuid from 'react-uuid';
import { ref, getDownloadURL, uploadBytesResumable, uploadString } from "firebase/storage";
import storage from "../../config/firebase/firebase";

import InputFieldSearchProduct from "../form/custom-field/InputFieldSearchProducts";
import SelectFieldSearchProducts from "../form/custom-field/SelectFieldSearchProducts";
import TextAreaField from "../form/custom-field/TextAreaField";
import { CATEGORY_OPTIONS } from "../../common/select";
import InputField from "../form/custom-field/InputField";
import InputFilesField from "../form/custom-field/InputFilesField";
import productsApi from "../../api/productsApi";
import InputFieldColor from "../form/custom-field/InputFieldColor";
import { SIZE_OPTION } from "../../common/size";
import { ProductType } from "../../contant";

const AddProduct = () => {
    const initialValues: ProductType = {
        image: '',
        subImage: [],
        name: '',
        category: '',
        color_group: [],
        size_group: SIZE_OPTION,
        color: '',
        size: '',
        slug: '',
        price: '',
        oldPrice: '',
        quantity: 1,
        rating: '',
        type: '',
        like: 0,
        view: 0,
        share: 0,
        comment: [],
        description: '',
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required('vui lòng nhập thông tin'),
        category: yup.string().required('vui lòng nhập thông tin'),
        slug: yup.string().required('vui lòng nhập thông tin'),
        price: yup.number().typeError('vui lòng nhập số').required('vui lòng nhập thông tin'),
        oldPrice: yup.number().typeError('vui lòng nhập số').required('vui lòng nhập thông tin'),
        color: yup.string().required('vui lòng nhập thông tin'),
        image: yup.string().required('vui lòng nhập thông tin'),
        description: yup.string(),
    });

    const onSubmit = (value: ProductType, setFieldValue: any) => {
        value.slug += `-${Math.floor(Math.random() * 10000000)}`;
        const handleListImage = [...value.subImage];
        // value.subImage = [];
        console.log(handleListImage);
        if (true) {
            const handleListImage = () => {
                const newListImage = value.subImage.map(async (item, idx) => {
                    const name = uuid();
                    const storageRef = ref(storage, `Products-Image/${name}`) // path save in firebase
                    await uploadString(storageRef, item, 'data_url').then(async (snapshot: any) => {
                        await getDownloadURL(snapshot.ref).then((url) => {
                            value.subImage[idx] = url;
                            if (idx === 0) {
                                value.image = url;
                            }
                        });
                    });
                    return value;
                });
                return Promise.all(newListImage);
            };
            handleListImage().then((result: any) => {
                console.log(value); 
                productsApi.createItem(value);
                // value.subImage = [];
            }).catch((err) => {console.log(err)})
        }
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
                    const { values } = formikProps;
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
                                            name="name"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Category"
                                            name="category"
                                            className="border border-gray-300 flex-1 max-w-[500px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            options={CATEGORY_OPTIONS}
                                            component={SelectFieldSearchProducts}
                                        ></FastField>
                                        <FastField
                                            label="Slug"
                                            name="slug"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Price"
                                            name="price"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Old price"
                                            name="oldPrice"
                                            className="border border-gray-300 flex-1 py-1 px-3 max-w-[352px] min-w-[452px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right mt-1"
                                            type="text"
                                            component={InputField}
                                        ></FastField>
                                        <FastField
                                            label="Color"
                                            name="color"
                                            className="border border-gray-300 flex-1 max-w-[352px] min-w-[452px] h-[40px]"
                                            classNameContainer="flex justify-center gap-4 mx-auto"
                                            classNameLabel="min-w-[150px] text-right"
                                            type="color"
                                            component={InputFieldColor}
                                        ></FastField>
                                        <FastField
                                            label="Image"
                                            name="imageFile"
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
                                            name="description"
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