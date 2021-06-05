import { CheckIcon } from "@heroicons/react/outline";

function Step({step, currentStep}) {
    return (
        <>
            {step.number !== 1 
                && <hr className="relative top-3 h-0.5 w-full mx-auto bg-gray-500"></hr>}
            <div className="flex flex-col items-center">
                {step.number < currentStep.number ?
                    <span className="px-1 py-1 rounded-full bg-blue-800 text-white"><CheckIcon className="h-6 w-6 " /></span> :
                    <span className={`rounded-full text-center px-3 py-1 border border-gray-500 ${step.label === currentStep.label ? 'bg-blue-600 text-white' : ''}`}>
                        {step.number}
                    </span>
                }
                <span className="text-xs whitespace-nowrap mt-2">
                    {step.label}
                </span>
            </div>
        </>
    );
}

export default Step;
