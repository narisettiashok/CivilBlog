import React from 'react'

function ExistingProject() {
    return (
        <div className="w-full max-h-full overflow-hidden flex flex-row justify-center items-center text-center">
            <div className="rounded-lg p-3 flex-1 items-center space-x-3 bg-blue-700 text-white cursor-pointer m-2
                    hover:bg-blue-900 hover:text-white">
                EPC
            </div>
            <div className="rounded-lg p-3 flex-1 items-center space-x-3 bg-blue-700 text-white cursor-pointer m-2
                    hover:bg-blue-900 hover:text-white">
                BOQ
            </div>
        </div>
    )
}

export default ExistingProject;
