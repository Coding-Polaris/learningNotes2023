export default function TextInput(props) {
    const humanize = (str) => `${str.slice(0,1).toUpperCase()}${str.slice(1).replace(/-/, " ")}` 
    const humanKind = humanize(props.kind)
    const placeHold = props.placeHold

    return (
        <div className="text-input-wrapper">
            <label htmlFor={props.kind}>{humanKind}</label>
            <input type="text" id={props.kind} placeholder={placeHold || humanKind}></input>
        </div>
    )
}