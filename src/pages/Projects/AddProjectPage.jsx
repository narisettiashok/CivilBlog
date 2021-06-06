import { useState } from "react";

import FormContainer from "../../components/FormContainer";
import Stepper from "../../components/Stepper";
import ChooseProjectType from "../../components/Projects/ChooseProjectType";
import ChooseContractType from "../../components/Projects/ChooseContractType";
import AddContractDetails from "../../components/Projects/AddContractDetails";
import EPCScopeOfWork from "../../components/Projects/EPCScopeOfWorkPage";

function AddProjectPage() {
    const [steps] = useState([
        {
            number: 1,
            label: "Project Type"
        },
        {
            number: 2,
            label: "Contract Type"
        },
        {
            number: 3,
            label: "Contract Details"
        },
        {
            number: 4,
            label: "Scope of work"
        }
    ]);
    const [currentStep, setCurrentStep] = useState(steps[0]);
    const [newProject, setNewProject] = useState(true);
    const [contractType, setContractType] = useState("EPC");
    const [contractDetails, setContractDetails] = useState({
        projectName: "",
        projectCost: "",
        projectAgreementDate: "",
        projectStartDate: "",
        projectCompletionDate: "",
        projectCompletionPeriod: "",
        projectMaintenancePeriod: ""
    });
    const [scopeOfWork, setScopeOfWork] = useState("EPC"); /* Need to setScopeOfWork BOQ project after creating BOQ scope of work page */ 

    function setProjectDetails() {
        if (!newProject) {
            setContractDetails({
                revisedProjectCost: "",
                projectExtensionDate: "",
                ...contractDetails
            });
        }
    }

    function nextStep() {
        if (currentStep.number === 2) {
            setProjectDetails();
        }
        let step = steps.find(step => step.number === currentStep.number + 1);
        setCurrentStep({ ...step });
    }

    function previousStep(contractDetails) {
        setContractDetails({ ...contractDetails });
        let step = steps.find(step => step.number === currentStep.number - 1);
        setCurrentStep({ ...step });
    }

    return (
        <>
            <div className="w-full h-full p-4">
                <Stepper steps={steps} currentStep={currentStep} />
                <div className="w-full px-4 pt-8">
                    <FormContainer>
                        {currentStep.label === "Project Type" && <ChooseProjectType newProject={newProject} setNewProject={setNewProject} nextStep={nextStep} />}
                        {currentStep.label === "Contract Type" && <ChooseContractType contractType={contractType} setContractType={setContractType} nextStep={nextStep} previousStep={previousStep} />}
                        {currentStep.label === "Contract Details" && <AddContractDetails newProject={newProject} contractType={contractType} contractDetails={contractDetails} nextStep={nextStep} previousStep={previousStep} />}
                        {currentStep.label === "Scope of work" && <EPCScopeOfWork newProject={newProject} contractType={contractType} contractDetails={contractDetails} scopeOfWork={scopeOfWork} nextStep={nextStep} previousStep={previousStep} />}
                    </FormContainer>
                </div>
            </div>
        </>
    );
}

export default AddProjectPage;
