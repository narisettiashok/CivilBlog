import { useState } from "react";

import BoxRadioGroup from "../Form/BoxRadioGroup";
import Button from "../Form/Button";

function ChooseContractType({ contractType, setContractType, previousStep, nextStep }) {
    const [contractTypes] = useState([
        {
            label: 'EPC',
            description: ' Engineering Procurement and Construction',
            value: 'EPC'
        },
        {
            label: 'BOQ',
            description: 'Bill of Quantities',
            value: 'BOQ'
        }
    ]);

    return (
        <>
            <div className="w-full max-w-md mx-auto">
                <div className="w-full px-4 py-16">
                    <div className="w-full max-w-md mx-auto">
                        <BoxRadioGroup value={contractType} onChange={setContractType} options={contractTypes} />
                        <div className="w-full p-4 mt-16 flex justify-center space-x-10">
                            <Button onClick={previousStep} type="button" color="muted" widthClass="w-28">
                                Previous
                            </Button>
                            <Button onClick={nextStep} type="button" color="muted" widthClass="w-28">
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChooseContractType;
