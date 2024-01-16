const gridImages = `
    col 1
    col 2 1
    col 3 1
    col 4 1
    col 5 1
    col 2 2
    col 3 2
    col 4 2
    col 5 2
`.replace(/ {4}/g, "")
    .split(/\n/)
    .slice(1, 10); //exclude blanks from display indent

import ExpGridImage from "./ExpGridImage.jsx"

export default function ExpHero() {
    return (
        <div className="experiences-hero">
            <div className="photo-grid">
                {
                    gridImages.map(function(filename, index) {
                        return(<ExpGridImage key={index} filename={filename} dex={index} />)
                    })
                }
            </div>
            <h1>Online Experiences</h1>
            <div className="description">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </div>
        </div>
    )   
}