import { PencilIcon } from "@heroicons/react/outline";
import { Form, Formik } from "formik";
import profilePic from "../assets/images/profile-pic.png";
import FormControl from "../components/Form/FormControl";
import * as Yup from "yup";
import Button from "../components/Form/Button";

function UserProfilePage(props) {
    const formikInitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: ""
    };
    const formikValidationSchema = Yup.object({
        firstName: Yup.string()
            .required("Required"),
        lastName: Yup.string()
            .required("Required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        contactNumber: Yup.string()
            .required("Required")
    });

    function formikOnSubmit(values, { setSubmitting }) {
        setTimeout(() => {
            setSubmitting(false);
            props.history.push("/app/dashboard");
        }, 1000);
    }
    return (
        <>
            <section className="w-full border-b border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="relative">
                    <img className="h-32 w-32 rounded-lg hover:border-blue-600"
                        src={profilePic} alt="Profile">
                    </img>
                    <span className="h-6 w-6 bg-blue-600 absolute right-0 bottom-0 p-1 rounded hover:bg-blue-800 text-white">
                        <PencilIcon />
                    </span>
                </div>
                <span className="absolute"></span>
                <p className="mt-2 text-xl">{formikInitialValues.firstName}</p>
            </section>

            <div className="mt-12 mx-auto w-11/12">
                {/* <FormContainer> */}
                <Formik
                    initialValues={formikInitialValues}
                    validationSchema={formikValidationSchema}
                    onSubmit={formikOnSubmit}
                    className="flex justify-center"
                >
                    {
                        formik => (
                            <Form className="sm:grid grid-cols-2 gap-2 md:gap-4 md:w-3/4 mx-auto">
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
                                    type="text"
                                    label="Email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <FormControl
                                    control="input"
                                    type="text"
                                    label="Contact Number"
                                    id="contactNumber"
                                    name="contactNumber"
                                    placeholder="Contact Number"
                                />

                                <div className="sm:col-start-2 sm:justify-self-end">
                                    <Button type="button" disabled={formik.isSubmitting} showLoadingSpinner={formik.isSubmitting}>
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </>
    );
}

export default UserProfilePage;
