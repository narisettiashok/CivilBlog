import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ConstructionImage from "../../components/ConstructionImage";

import FormContainer from "../../components/FormContainer";
import FormControl from "../../components/Form/FormControl";
import { PASSWORD_REGEX } from "../../constants";
import Button from "../../components/Form/Button";

function ResetPasswordPage(props) {
    const formikInitialValues = {
        newPassword: "",
        confirmPassword: ""
    };
    const formikValidationSchema = Yup.object({
        newPassword: Yup.string()
            .matches(PASSWORD_REGEX.regex, PASSWORD_REGEX.statement)
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), ""], "Password much match")
            .required("Required")
    });
    const onSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            props.history.push("/auth/login");
        }, 1000);
    };


    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility() {
        setShowPassword(showPassword => !showPassword);
    }

    return (
        <>
            <ConstructionImage />
            {/* Reset Password Form */}
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
                                            Reset Password
                                        </h1>
                                        <p className="text-xs text-center pb-5">
                                            Please enter new password to reset your password
                                        </p>
                                    </div>

                                    <FormControl
                                        control="input"
                                        type={showPassword ? "text" : "password"}
                                        label="New Password"
                                        id="newPassword"
                                        name="newPassword"
                                        placeholder="New password"
                                        passwordVisible={showPassword ? <EyeIcon className="w-5 h-6" /> : <EyeOffIcon className="w-5 h-6" />}
                                        togglePasswordVisibility={togglePasswordVisibility}
                                    />

                                    <FormControl
                                        control="input"
                                        type="password"
                                        label="Confirm Password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
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
    )
}

export default ResetPasswordPage;