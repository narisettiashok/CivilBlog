import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

function BoxRadioGroup({ value, onChange, options }) {
    return (
        <>
            <RadioGroup value={value} onChange={onChange}>
                <RadioGroup.Label className="sr-only"></RadioGroup.Label>
                <div className="space-y-2">
                    {options.map((option) => (
                        <RadioGroup.Option
                            key={option.label}
                            value={option.value}
                            className={({ checked }) =>
                                `${checked ? 'bg-blue-800 text-white' : 'bg-white text-black'}
                                relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                            }
                        >
                            {({ checked }) => (
                                <>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium mb-1 ${checked ? 'text-white' : 'text-gray-900'}`}
                                                >
                                                    {option.label}
                                                </RadioGroup.Label>
                                                <RadioGroup.Description
                                                    as="span"
                                                    className={`inline ${checked ? 'text-light-blue-100' : 'text-gray-500'}`}
                                                >
                                                    {option.description}
                                                </RadioGroup.Description>
                                            </div>
                                        </div>
                                        {checked && <CheckIcon className="w-6 h-6" />}
                                    </div>
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </>
    );
}

export default BoxRadioGroup;
