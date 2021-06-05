import emptyImage from "../../assets/images/empty.svg";
import Button from "../Form/Button";

function EmptyProjects() {
    return (
        <>
            <div className="h-full w-full">
                <div className="w-2/3 mx-auto mt-44 flex justify-center items-center space-x-8">
                    <img src={emptyImage} alt="No Projects" className="h-44 sm:h-56" />
                    <div className="ml-5 flex flex-col justify-center items-center space-y-3 space-x-8">
                        <h2 className="hidden sm:block sm:text-md lg:text-xl">Add new EPC and BOQ projects </h2>
                        <Button isLink="true" to="/app/projects/addProject">
                            Add Project
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmptyProjects;
