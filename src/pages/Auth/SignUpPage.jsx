import {Form, Formik} from 'formik';
import * as Yup from 'yup';

import FormContainer from '../../components/FormContainer';
import FormControl from '../../components/Form/FormControl';
import LoadingSpinner from '../../components/LoadingSpinner';


function SignUpPage(props) {
    const formikInitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        companyName: ""
    };
    const formikValidationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email Address').required('Required'),
        password: Yup.string().min(8, 'Must be 8 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
        companyName: Yup.string().required('Required')
    });
    const onSubmit = (values, onSubmitProps) => {
        setTimeout(()=> {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            props.history.push('/auth/login')
        },1000)
        console.log('Form data', values)
    }

    return (
        <>
            {/* Construction Image */}
            <div className="w-full lg:w-3/6 px-4 hidden md:block">
                <img src={require("../../assets/images/construction.svg").default} alt="Construction"></img>
            </div>

            {/* Sign up Form */}
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
                                <FormControl 
                                    control='input'
                                    type='text'
                                    label='First Name'
                                    id='firstName'
                                    name='firstName'
                                    placeholder='First Name'
                                />

                                <FormControl 
                                    control='input'
                                    type='text'
                                    label='Last Name'
                                    id='lastName'
                                    name='lastName'
                                    placeholder='Last Name'
                                />

                                <FormControl 
                                    control='input'
                                    type='email'
                                    label='Email'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                />
                                
                                <FormControl 
                                    control='input'
                                    type='password'
                                    label='Password'
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                />

                                <FormControl 
                                    control='input'
                                    type='text'
                                    label='Company Name'
                                    id='companyName'
                                    name='companyName'
                                    placeholder='Company Name'
                                />

                                <div className="text-center mt-6">
                                    <button className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                                        Sign Up {formik.isSubmitting && <LoadingSpinner />}
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

export default SignUpPage;