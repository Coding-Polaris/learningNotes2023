export default function Project(props) {
    return (
        <div className="project">
            <img src={props.previewImage} className="preview"></img>
            <div className="description">
                <h1>{props.projectName}</h1>
                <div>{props.description}</div>
            </div>
        </div>
    )
}