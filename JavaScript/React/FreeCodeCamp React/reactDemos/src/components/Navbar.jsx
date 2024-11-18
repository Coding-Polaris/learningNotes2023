import reactLogo from '../assets/react.svg'
import { Link } from "react-router-dom"

import LoadMainLink from './LoadMainLink.jsx'
export default function Navbar(props) {
    var logo = null;
    if(props.displayReactLogo) {
        logo = <img src={reactLogo} className="react-logo" />;
    }

    return (
        <header id="main-nav">
            <div className="title">
                {logo}
                {props.title}
            </div>
            <Link to="/" className="load-main-link">CodingPolaris Learns React</Link>
            <div className="module">
                {props.moduleName}
            </div>
        </header>
    )
}