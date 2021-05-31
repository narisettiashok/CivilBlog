import { Form, Formik } from "formik";
import * as Yup from "yup";

import FormControl from "../../components/Form/FormControl";
import ConstructionImage from "../../components/ConstructionImage";
import FormContainer from "../../components/FormContainer";
import { PASSWORD_REGEX } from "../../constants";
import Button from "../../components/Form/Button";

function SignUpPage(props) {
    const formikInitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        companyName: ""
    };
    const formikValidationSchema = Yup.object({
        firstName: Yup.string()
            .required("Required"),
        lastName: Yup.string()
            .required("Required"),
        email: Yup.string()
            .email("Invalid Email Address").required("Required"),
        password: Yup.string()
            .matches(PASSWORD_REGEX.regex, PASSWORD_REGEX.statement)
            .max(15, "Must be 15 characters or less").required("Required"),
        companyName: Yup.string()
            .max(100, "Must be 100 characters or less").required("Required")
    });
    const onSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            props.history.push("/auth/login");
        }, 1000);
    }

    return (
        <>
            <ConstructionImage />
            {/* Sign up Form */}
            <div className="w-full lg:w-2/6">
                <FormContainer>
                    <Formik
                        initialValues={formikInitialValues}
                        validationSchema={formikValidationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            formik => (
                                <Form>
                                    <FormControl
                                        control="input"
                                        type="text"
                                        label="First Name"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                    />

                                    <FormControl
                                        control="input"
                                        type="text"
                                        label="Last Name"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                    />

                                    <FormControl
                                        control="input"
                                        type="email"
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
                                        control="input"
                                        type="text"
                                        label="Company Name"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Company Name"
                                    />

                                    <div className="text-center mt-6">
                                        <Button type="submit"
                                            label="Sign Up"
                                            disabled={formik.isSubmitting}
                                            showLoadingSpinner={formik.isSubmitting}
                                        />
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </FormContainer>
            </div>
        </>
    );
}

export default SignUpPage;
