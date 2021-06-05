import { useState } from "react";

import BoxRadioGroup from "../Form/BoxRadioGroup";
import Button from "../Form/Button";

function ChooseProjectType({ newProject, setNewProject, nextStep }) {
    const [projectTypes] = useState([
        {
            label: 'New Project',
            description: 'New project for your company',
            value: true
        },
        {
            label: 'Existing Project',
            description: 'Existing project in your company',
            value: false
        }
    ]);

    return (
        <>
            <div className="w-full max-w-md mx-auto">
                <div className="w-full px-4 py-16">
                    <div className="w-full max-w-md mx-auto">
                        <BoxRadioGroup value={newProject} onChange={setNewProject} options={projectTypes} />
                        <div className="w-full mt-16 p-4 flex justify-center space-x-10">
                            <Button type="button" onClick={nextStep} color="muted" widthClass="w-28">
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChooseProjectType;
