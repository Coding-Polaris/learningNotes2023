import ReactDOM from "react-dom";
import App from "/src/App.jsx";

export default function LoadMainLink() {
	function loadMain(e) {
		e.preventDefault();
		const root = document.getElementById('root');
		ReactDOM.render(root, <App />);
	}	

	return (
		<a href="#" className="loadMain" onClick={loadMain}>CodingPolaris Learns React</a>
	)
}