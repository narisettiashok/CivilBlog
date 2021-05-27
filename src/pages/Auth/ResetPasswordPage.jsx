import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormContainer from '../../components/FormContainer';
import FormControl from '../../components/Form/FormControl';
import LoadingSpinner from '../../components/LoadingSpinner';

function ResetPasswordPage(props) {
    const formikInitialValues = {
        newPassword: "",
        confirmPassword: ""
    };
    const formikValidationSchema = Yup.object({
        newPassword: Yup.string().min(8, 'Must be 8 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), ''], 'Password much match').required('Required')
    });
    const onSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            props.history.push('/auth/login')
        }, 1000)
        console.log('Form data', values)
    };

    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility() {
        return (
            setShowPassword(showPassword => !showPassword)
        )
    };

    return (
        <>
            {/* Construction Image */}
            <div className="w-full lg:w-3/6 px-4 hidden md:block">
                <img src={require("../../assets/images/construction.svg").default} alt="Construction"></img>
            </div>

            {/* Reset Password Form */}
            <div className="w-full lg:w-2/6">
                <FormContainer>
                    <Formik 
                        initialValues={formikInitialValues}
                        validationSchema={formikValidationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            formik =>
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
                                        control='input'
                                        type='password'
                                        label='Confirm Password'
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        placeholder='Confirm Password'
                                    />

                                    <div className="text-center mt-6">
                                        <button className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                                        Reset Password {formik.isSubmitting && <LoadingSpinner />}
                                        </button>
                                    </div>
                                </Form>
                        }
                    </Formik>                       
                </FormContainer>
            </div>
        </>
    )
}

export default ResetPasswordPage;