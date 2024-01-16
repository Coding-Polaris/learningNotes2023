import Project from "./Project.jsx"
import listPreview from "../../assets/list_preview.png"

export default function ProjectGridContent() {
    const reactInfoDesc = "Pretty much just a fancy styled list of facts about React. This page demos basic components and composition."
    const businessCardDesc = "A little user profile with social links/logos. Unguided practice for the same (this didn't have a tutorial), plus some CSS."

    return (
        <div className="project-grid">
            <
                Project
                    projectName="React Info"
                    description={reactInfoDesc}
                    previewImage={listPreview}
            />
            <Project projectName="Digital Business Card" description={businessCardDesc}/>
        </div>
    )
}