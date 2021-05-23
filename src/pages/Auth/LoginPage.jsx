import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormContainer from '../../components/FormContainer';
import InputField from '../../components/Form/InputField';
import Checkbox from '../../components/Form/Checkbox';
import LoadingSpinner from '../../components/LoadingSpinner';

function LoginPage(props) {
    const formikInitialValues = {
        email: '',
        password: '',
        rememberMe: false
    };
    const formikValidationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Must be 8 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        rememberMe: Yup.boolean()
    });

    function formikOnSubmit(values, { setSubmitting }) {
        setTimeout(() => {
            setSubmitting(false);
            props.history.push('/home')
        }, 1000);
    }

    return (
        <>
            {/* Construction Image */}
            <div className="w-full lg:w-3/6 px-4 hidden md:block">
                <img src={require("../../assets/images/construction.svg").default} alt="Construction"></img>
            </div>

            {/* Login Form */}
            <div className="w-full lg:w-2/6">
                <FormContainer>
                    <Formik
                        initialValues={formikInitialValues}
                        validationSchema={formikValidationSchema}
                        onSubmit={formikOnSubmit}
                    >
                        {
                            formik => (
                                <Form>
                                    <InputField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />

                                    <InputField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />

                                    <Checkbox name="rememberMe">
                                        <span className="ml-2 text-sm font-semibold">
                                            Remember me
                                        </span>
                                    </Checkbox>

                                    <button type="submit"
                                        className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow
                                        hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 disabled:opacity-50"
                                        disabled={formik.isSubmitting}>
                                        Login {formik.isSubmitting && <LoadingSpinner />}
                                    </button>
                                </Form>
                            )
                        }
                    </Formik>
                </FormContainer>

                <div className="flex flex-wrap mt-6 relative justify-between">
                    <Link to="/auth/forgot-password">
                        <small>Forgot password?</small>
                    </Link>
                    <Link to="/auth/sign-up">
                        <small>Create new account</small>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
