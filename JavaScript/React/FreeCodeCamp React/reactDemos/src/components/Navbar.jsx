import reactLogo from '../assets/react.svg'
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
            <LoadMainLink />
            <div className="module">
                {props.moduleName}
            </div>
        </header>
    )
}