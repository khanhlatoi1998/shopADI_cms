import { FastField, Form, Formik } from "formik";
import { CATEGORY_OPTIONS, PRICE_OPTIONS } from "../../../common/select";
import ListProduct from "../../products/ListProduct";
import InputFieldSearchProduct from "../custom-field/InputFieldSearchProducts";
import SelectFieldSearchProducts from "../custom-field/SelectFieldSearchProducts";

const SearchProducts = () => {

    const initialValues = {
        product: '',
        product_category: '',
        product_createdDate: '',
        product_price: '',
    };

    const onSubmit = (value: any) => {
        console.log(value);
    };


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
                >
                    {formikProps => {
                        const { values } = formikProps;
                        return (
                            <Form className="">
                                <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-y-2">
                                    <FastField
                                        label="Product name"
                                        name="product"
                                        className="border border-gray-300 flex-1 py-1 px-3 max-w-[300px]"
                                        classNameContainer="flex items-center gap-4"
                                        type="text"
                                        component={InputFieldSearchProduct}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Category"
                                        name="product_category"
                                        className="border border-gray-300 flex-1 max-w-[300px]"
                                        classNameContainer="flex items-center gap-4"
                                        placeholder="All"

                                        options={CATEGORY_OPTIONS}
                                        component={SelectFieldSearchProducts}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Price"
                                        name="product_price"
                                        className="border border-gray-300 flex-1 max-w-[300px]"
                                        classNameContainer="flex items-center gap-4"
                                        placeholder="All"

                                        options={PRICE_OPTIONS}
                                        component={SelectFieldSearchProducts}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Created Date"
                                        name="product_createdDate"
                                        className="border border-gray-300 flex-1 py-1 px-3 max-w-[300px]"
                                        classNameContainer="flex items-center gap-4"
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