import placeList from "./placeList"
import TravelDestination from "./TravelDestination.jsx"

export default function TravelPlaceList() {
    return (
        <div id="travel-place-list">
            {
                placeList.map(function(place, dex, placeArray) {
                    const shouldDivide = dex < placeArray.length - 1
                    return (
                        <>
                            <TravelDestination key={place.name} place={place} />
                            {shouldDivide && <hr />}
                        </>
                    )
                })    
            }
        </div>
    )
}