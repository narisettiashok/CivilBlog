import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsPage() {

    return (
        <div>
            <h1 className="text-center font-bold text-3xl mb-5"> Project Details </h1>
            <div className="w-full max-h-full overflow-hidden flex flex-row justify-center items-center text-center">
                <Link className="rounded-lg p-3 flex-1 items-center space-x-3 bg-blue-700 text-white cursor-pointer m-2
                    hover:bg-blue-900 hover:text-white" to='/app/newProject'>
                    <span>New Project</span>
                </Link>
                <Link className="rounded-lg p-3 flex-1 items-center space-x-3 bg-blue-700 text-white cursor-pointer m-2
                    hover:bg-blue-900 hover:text-white" to='/app/existingProject'>
                    <span>Existing Project</span>
                </Link>
            </div>
        </div>

    )
}

export default ProjectsPage;
