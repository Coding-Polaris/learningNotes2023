export default function Joke(props) {
    const joke = props.joke
    const hasSetup = joke.setup && joke.setup.length > 0

    function changeClass(e, {add = [], remove = []}) {
        const clsAttr = e.target.getAttribute("class")
        const clses = clsAttr.split(" ")
        const filteredClses = clses.filter((cls) => !remove.includes(cls))
        const newClses = filteredClses.concat(add)
        e.target.setAttribute("class", newClses.join(" "))
    }

    return (
        <div className="joke">
            {hasSetup && <h3>{props.joke.setup}</h3>}
            <section
                className="punchline-wrapper"
                onClick={
                    (e) => {
                        const h2 = e.currentTarget.querySelector("h2");
                        const paragraphElement = e.currentTarget.querySelector("p");

                        if (h2.getAttribute("class").includes("blurred")) {
                            changeClass({ target: h2 }, {remove: ["blurred"]})
                            changeClass({ target: paragraphElement }, {add: ["hide"]})
                        } else {
                            changeClass({ target: h2 }, {add: ["blurred"]})
                            changeClass({ target: paragraphElement }, {remove: ["hide"]})
                        }
                    }
                }
            >
                <h2 className={`animates blurred${hasSetup && " indent" || ""}`}>
                    {props.joke.punchline}
                </h2>
                <p className="black-text centered">- click me -</p>
            </section>
        </div>
    )
}