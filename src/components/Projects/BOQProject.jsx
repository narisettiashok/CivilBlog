import { Form, Formik } from "formik";
import * as Yup from "yup";

import FormControl from "../Form/FormControl";
import LoadingSpinner from "../LoadingSpinner";


function BOQProject(props) {

    const formikInitialValues = {
        projectName: "",
        projectCost: "",
        ProjectAgreementDate: "",
        ProjectStartDate: "",
        ProjectCompletionDate: "",
        ProjectCompletionPeriod: "",


    };
    const formikValidationSchema = Yup.object({
        projectName: Yup.string().required('Required'),
        projectCost: Yup.number().positive().required('Required Integer'),
        ProjectAgreementDate: Yup.date().required('Required'),
        ProjectStartDate: Yup.date().required('Required').nullable(),
        ProjectCompletionDate: Yup.date().required('Required').nullable(),
        ProjectCompletionPeriod: Yup.number().positive().required('Required Integer')
    });
    const onSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            props.history.push("/auth/login");
        }, 1000);
        console.log('Form Data', values);
    };


    return (
        <div className="w-full max-h-full flex flex-col">
            <div className="w-1/2 items-left text-blue-900 cursor-pointer m-2 mb-10 font-bold lg:text-2xl sm:text-xl">
                Enter <abbr className="text-black" title="Bill of Quantities">BOQ</abbr> Project Details
            </div>
            <div className="w-full flex justify-start items-center">
                <Formik
                    initialValues={formikInitialValues}
                    validationSchema={formikValidationSchema}
                    onSubmit={onSubmit}
                >
                    {
                        formik =>
                            <Form className="w-full">
                                <div className="w-full h-full flex flex-col justify-between items-center">
                                    <FormControl
                                        control="dataInput"
                                        type="text"
                                        label="Project Name"
                                        id="projectName"
                                        name="projectName"
                                        placeholder="Enter Project Name"
                                    />
                                    <FormControl
                                        control="dataInput"
                                        type="text"
                                        label="Project Cost"
                                        id="projectCost"
                                        name="projectCost"
                                        placeholder="Enter Project Cost in 'Rupees'"
                                    />
                                    <FormControl
                                        control="date"
                                        label="Project Agreement Date"
                                        name="projectAgreementDate"
                                    />
                                    <FormControl
                                        control="date"
                                        label="Project Start Date"
                                        name="projectStartDate"
                                    />
                                    <FormControl
                                        control="date"
                                        label="Project Completion Date"
                                        name="projectCompletionDate"
                                    />
                                    <FormControl
                                        control="dataInput"
                                        type="text"
                                        label="Project Completion Period"
                                        id="ProjectCompletionPeriod"
                                        name="ProjectCompletionPeriod"
                                        placeholder="Project Completion Period 'Months'"
                                    />

                                    <div className="text-center mt-6">
                                        <button className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                                            Submit Data Here {formik.isSubmitting && <LoadingSpinner />}
                                        </button>
                                    </div>
                                </div>
                            </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}

export default BOQProject;
