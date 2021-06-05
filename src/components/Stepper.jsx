import Step from "./Step";

function Stepper({steps, currentStep}) {
    return (
        <div className=" relative w-11/12 max-w-screen-md sm:w-2/4 mx-auto flex justify-between">
            {steps.map(step => (
                <Step key={step.number} step={step} currentStep={currentStep}/>
                )
            )}
        </div>
    );
}

export default Stepper;
