import { Form, Formik } from "formik";
import * as Yup from "yup";

import FormContainer from "../../components/FormContainer";
import FormControl from "../../components/Form/FormControl";
import ConstructionImage from "../../components/ConstructionImage";
import Button from "../../components/Form/Button";

function ForgotPasswordPage(props) {
    const formikInitialValues = {
        email: ""
    };
    const formikValidationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid Email Address")
            .required("Required")
    });
    const onSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            props.history.push("/auth/reset-password")
        }, 1000);
    }
    return (
        <>
            <ConstructionImage />
            {/* Forgot Password Form */}
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
                                    <div className="form-group">
                                        <h1 className="uppercase font-bold text-xl text-center pb-3">
                                            Forgot Password
                                        </h1>
                                        <p className="text-xs text-center pb-10">
                                            Please enter your registered email ID to reset password
                                        </p>
                                    </div>

                                    <FormControl
                                        control="input"
                                        type="email"
                                        label="Email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />

                                    <div className="text-center mt-6">
                                        <Button type="submit"
                                            label="Reset Password"
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

export default ForgotPasswordPage;