export default function LargeButton(props) {
    return (
        <a href={props.link}>
            <div className={`${props.className} large-button`}>
                <img src={props.icon}></img>
                {props.text}
            </div>
        </a>
    )
}