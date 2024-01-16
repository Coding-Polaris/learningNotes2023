import CatContact from "./CatContact.jsx"
import cats from "./cats"

export default function CatContactContainer() {
    return (
        <div className="cat-contact-container">
            {
                cats.map(function(cat, dex) {
                    return(<CatContact cat={cat} key={dex} />)
                })
            }
        </div>
    )
}