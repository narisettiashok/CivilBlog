import { PlusCircleIcon } from "@heroicons/react/outline";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Button from "../Form/Button";
import FormControl from "../Form/FormControl";
import FormGroupContainer from "../Form/FormGroupContainer";

function AddContractDetails(props) {
    const formikInitialValues = { ...props.contractDetails };
    const formikValidationSchema = getFormikValidationSchema();

    function getFormikValidationSchema() {
        if (props.newProject) {
            return Yup.object({
                projectName: Yup.string().required("Required"),
                projectCost: Yup.number().positive().required("Required Number"),
                projectAgreementDate: Yup.date().required("Required"),
                projectStartDate: Yup.date().required("Required").nullable(),
                projectCompletionDate: Yup.date().required("Required").nullable(),
                projectCompletionPeriod: Yup.number().positive().required("Required Number"),
                projectMaintenancePeriod: Yup.number().positive().required("Required Number")
            });
        } else {
            return Yup.object({
                projectName: Yup.string().required("Required"),
                projectCost: Yup.number().positive().required("Required Number"),
                revisedProjectCost: Yup.number().positive().required("Required Number"),
                projectAgreementDate: Yup.date().required("Required"),
                projectStartDate: Yup.date().required("Required").nullable(),
                projectCompletionDate: Yup.date().required("Required").nullable(),
                projectExtensionDate: Yup.date().required("Required").nullable(),
                projectCompletionPeriod: Yup.number().positive().required("Required Number"),
                projectMaintenancePeriod: Yup.number().positive().required("Required Number")
            });
        }
    }
    function onSubmit(values, onSubmitProps) {
        onSubmitProps.setSubmitting(false);
        props.previousStep(values);
        props.nextStep(values);
    };

    return (
        <div className="w-10/12 mx-auto">

            <div className="w-full max-h-full flex flex-col">
                <div className="text-blue-900 m-2 mb-10 font-bold sm:text-xl">
                    Enter <abbr className="text-black" title="Bill of Quantities">{props.contractType}</abbr> Project Details
                </div>
                {/* User Data form to enter contract details */}
                <div className="w-full flex justify-start items-center">
                    <Formik
                        initialValues={formikInitialValues}
                        validationSchema={formikValidationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form className="w-full">
                            <div className="w-full h-full flex flex-col justify-between items-start space-y-8">
                                <FormGroupContainer title="Name & Costs">
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                        <FormControl
                                            control="input"
                                            type="text"
                                            label="Project Name"
                                            id="projectName"
                                            name="projectName"
                                            placeholder="Enter Project Name"
                                        />
                                        <FormControl
                                            control="input"
                                            type="text"
                                            label="Project Cost"
                                            id="projectCost"
                                            name="projectCost"
                                            placeholder="Enter Project Cost in 'Rupees'"
                                        />

                                        {props.newProject
                                            || (
                                                <FormControl
                                                    control="input"
                                                    type="text"
                                                    label="Revised Project Cost"
                                                    id="revisedProjectCost"
                                                    name="revisedProjectCost"
                                                    placeholder="Enter Revised Project Cost in 'Rupees'"
                                                />
                                            )
                                        }
                                    </div>

                                </FormGroupContainer>

                                <FormGroupContainer title="Dates">
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                                        {props.newProject
                                            || (
                                                <FormControl
                                                    control="date"
                                                    label="Project Extension Date"
                                                    name="projectExtensionDate"
                                                />
                                            )
                                        }
                                    </div>
                                </FormGroupContainer>

                                <FormGroupContainer title="Period">
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                        <FormControl
                                            control="input"
                                            type="text"
                                            label="Project Completion Period"
                                            id="projectCompletionPeriod"
                                            name="projectCompletionPeriod"
                                            placeholder="Project Completion Period 'Months'"
                                        />
                                        <FormControl
                                            control="input"
                                            type="text"
                                            label="Project Maintenance Period"
                                            id="projectMaintenancePeriod"
                                            name="projectMaintenancePeriod"
                                            placeholder="Project Maintenance/Defects Liability Period 'Months'"
                                        />
                                    </div>
                                </FormGroupContainer>

                                <Button type="button" widthClass="w-44">
                                    <span className="flex items-center space-x-4">
                                        <PlusCircleIcon className="w-6 h-6" /> <span>Add Data</span>
                                    </span>
                                </Button>
                                <div className="w-full p-4 mt-16 flex justify-center space-x-10">
                                    <Button type="button" onClick={props.previousStep} widthClass="w-28" color="muted">
                                        Previous
                                    </Button>
                                    <Button type="submit" widthClass="w-28" color="muted">
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
};

export default AddContractDetails;
