import { Formik, FastField, Form } from "formik";
import InputField from "../../components/form/custom-field/InputField";
import * as yup from 'yup';

import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const initialValues = {
        username: '',
        password: ''
    };

    const validationSchema = yup.object().shape({
        // username: yup.string().required('vui lòng nhập tài khoản'),
        // password: yup.string().required('vui lòng nhập mật khẩu')
    });

    const onSubmit = () => {
        navigate('/admin');
    };

    return (
        <section className="bg-gradient-to-t from-[#141e30] to-[#243b55] min-h-[100vh] p-8 flex items-center justify-center">
            <div className="md:min-w-[450px] max-w-full min-w-full bg-[rgba(0,0,0,.5)] rounded-lg py-8 px-6">
                <h1 className="pb-4 text-white px-4 text-center font-bold lg:text-[25px] text-[20px]  border-solid border-gray-300">Login</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {formikProps => {
                        const { values } = formikProps;
                        return (
                            <Form>
                                <FastField
                                    label="username"
                                    name="username"
                                    type="text"
                                    className="w-full border-b border-solid border-white py-2 pr-4 bg-transparent text-white"
                                    classNameContainer="mt-4 form-group"
                                    placeholder="Username"

                                    // value={''}
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    label="password"
                                    name="password"
                                    type="text"
                                    className="w-full border-b border-solid border-white py-2 pr-4 bg-transparent text-white"
                                    classNameContainer="mt-4 form-group"
                                    placeholder="Password"

                                    // value={''}
                                    component={InputField}
                                >
                                </FastField>

                                <a className="text-blue-500 text-right block underline">Forgot Password?</a>
                                <div className="mt-6">
                                    <button className="font-medium py-2 lg:text-[18px] w-full bg-blue-500 rounded-full text-white">
                                        <NavLink to="/admin">
                                            Submit
                                        </NavLink>
                                    </button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </section>
    );
};

export default Login;