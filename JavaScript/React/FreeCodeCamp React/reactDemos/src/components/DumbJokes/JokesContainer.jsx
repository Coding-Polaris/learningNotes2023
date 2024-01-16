import jokes from "./jokes"
import Joke from "./Joke.jsx"
import "../../stylesheets/dumbjokes.scss"

export default function JokesContainer() {
    return (
        <div className="jokes-container">
            {
                jokes.map(function(joke, dex) {
                    return(<Joke joke={joke} key={dex} />)
                })
            }
            <p className="disclaimer">Disclaimer: the coder isn't responsible for these jokes</p>
        </div>
    )   
}