import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormContainer from "../../components/FormContainer";
import FormControl from "../../components/Form/FormControl";
import ConstructionImage from "../../components/ConstructionImage";
import Button from "../../components/Form/Button";

function LoginPage(props) {
    const formikInitialValues = {
        email: "",
        password: "",
        rememberMe: false
    };
    const formikValidationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        rememberMe: Yup.boolean()
    });

    function formikOnSubmit(values, { setSubmitting }) {
        setTimeout(() => {
            setSubmitting(false);
            props.history.push("/app/dashboard");
        }, 1000);
    };

    return (
        <>
            <ConstructionImage />
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
                                    <FormControl
                                        control="input"
                                        type="text"
                                        label="Email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />

                                    <FormControl
                                        control="input"
                                        type="password"
                                        label="Password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                    />

                                    <FormControl
                                        control="checkbox"
                                        name="rememberMe"
                                    >
                                        <span className="ml-2 text-sm font-semibold">
                                            Remember me
                                        </span>
                                    </FormControl>

                                    <Button type="submit" disabled={formik.isSubmitting} showLoadingSpinner={formik.isSubmitting}>
                                        Login
                                    </Button>
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
