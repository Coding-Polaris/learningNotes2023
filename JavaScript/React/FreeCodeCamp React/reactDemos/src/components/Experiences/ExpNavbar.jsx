import airbnbLogo from "../../assets/experiences/airbnb 1.svg"

export default function ExpNavbar() {
	return(
		<nav className="experiences-navbar">
			<a href="https://www.airbnb.com/">
				<img src={airbnbLogo}></img>
			</a>
		</nav>
	)	
}