export default function SmallButton(props) {
    return (
        <div className="small-button">
            <a href={props.link}>
                <img src={props.img}></img>
            </a>
        </div>
    )
}