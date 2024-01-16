import "../../stylesheets/experiences.scss"

import ExpNavbar from "./ExpNavbar.jsx"
import ExpHero from "./ExpHero.jsx"
import ExpCardContainer from "./ExpCardContainer.jsx"

export default function ExperiencesContainer() {
    return (
        <div className="experiences-container">
            <ExpNavbar />
            <ExpHero />
            <ExpCardContainer />
        </div>
    )
}