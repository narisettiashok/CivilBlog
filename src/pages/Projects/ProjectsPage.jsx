import { useState } from "react";

import PageTitle from "../../components/PageTitle";
import EmptyProjects from "../../components/Projects/EmptyProjects";
import Projects from "../../components/Projects/Projects";

function ProjectsPage() {

    const [projects] = useState([]);

    return (
        <>
            <PageTitle title="Projects" />
            {projects.length === 0 && <EmptyProjects />}
            {projects.length > 0 && <Projects projects={projects} />}
        </>
    );
}

export default ProjectsPage;
