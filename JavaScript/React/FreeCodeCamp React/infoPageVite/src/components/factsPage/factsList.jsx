import reactLogo from "../assets/react.svg"

export default function Content() {
    return (
        <div id="content">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img id="react-watermark" src={reactLogo} />
        </div>
    )
}