import TravelNav from "./TravelNav.jsx"
import TravelPlaceList from "./TravelPlaceList.jsx"
import "../../stylesheets/traveljournal.scss"

export default function TravelJournal() {
    return (
        <div id="travel-journal-wrapper">
            <TravelNav />
            <TravelPlaceList />
        </div>
    )
}