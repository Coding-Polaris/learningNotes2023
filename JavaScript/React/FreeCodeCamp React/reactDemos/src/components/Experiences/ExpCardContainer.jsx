import ExpCard from "./ExpCard.jsx"
import experienceList from "./experienceList.js"

export default function ExpCardContainer() {
    const cards = experienceList.map(function(experienceList, dex) {
        return (
            <ExpCard key={dex} experienceList={experienceList} />
        )
    })
    return (
        <div className="card-container">
            { cards }
        </div>
    )
}