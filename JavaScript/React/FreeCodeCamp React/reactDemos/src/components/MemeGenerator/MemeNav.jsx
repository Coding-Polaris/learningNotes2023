import trollface from "/src/assets/memegenerator/trollface.png"

export default function MemeNav() {
    return(
        <nav id="meme-nav">
            <div className="logos">
                <img src={trollface} className="trollface" />
                <span>Meme Generator</span>
            </div>
            <span>React Course - Project 3</span>
        </nav>
    )
}