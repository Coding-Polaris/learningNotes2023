export default function DetailInfo(props) {
    return (
        <div className="detail-info">
            <h1>{props.header}</h1>
            <div>{props.description}</div>
        </div>
    )
}