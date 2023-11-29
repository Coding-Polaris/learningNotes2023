import reactLogo from '../assets/react.svg'
export default function Navbar() {
    return (
        <header id="main-nav">
            <div className="title">
                <img src={reactLogo} className="react-logo" />
                <span>ReactFacts</span>
            </div>
            <div className="module">
                 React Course - Project 1
            </div>
        </header>
    )
}