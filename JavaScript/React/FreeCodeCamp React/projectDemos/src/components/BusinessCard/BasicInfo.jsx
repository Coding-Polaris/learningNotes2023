export default function BasicInfo(props) {
    return (
        <div className="basic-info">
            <h1>{props.devName}</h1>
            <h2>{props.job}</h2>
            <a href={props.site}>{props.site}</a>
        </div>
    )
}