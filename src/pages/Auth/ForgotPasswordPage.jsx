import {Form, Formik} from 'formik';
import * as Yup from 'yup';

import FormContainer from '../../components/FormContainer';
import FormControl from '../../components/Form/FormControl';
import LoadingSpinner from '../../components/LoadingSpinner';
import ConstructionImage from "../../components/ConstructionImage";

function ForgotPasswordPage(props) {
    const formikInitialValues = {
        email: ""
    };
    const formikValidationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Address').required('Required')
    });
    const onSubmit = (values, onSubmitProps) => {
        setTimeout(()=> {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            props.history.push('/auth/reset-password')
        },1000)
        console.log('Form data', values)
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
                            formik =>
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
                                    control='input'
                                    type='email'
                                    label='Email'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
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
    );
}

export default ForgotPasswordPage;