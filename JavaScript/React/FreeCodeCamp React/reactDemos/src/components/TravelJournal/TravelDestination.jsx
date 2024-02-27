import marker from "/src/assets/traveljournal/marker.svg"

export default function TravelDestination(props) {
    const place = props.place
    const lat = place.coords[0]
    const long = place.coords[1]
    const isPortrait = place.portrait

    return (
        <div className="travel-destination">
            <div className="place-photo-container">
                <img src={place.image} className="place-photo" />
            </div>
            <div className="destination-info-container">
                <a href={`https://www.google.com/maps/place/${lat},${long}`} target="_blank">
                    <div className="location">
                        <img src={marker} className="travel-destination__marker" />
                        {place.country.toUpperCase()}
                    </div>
                </a>
                <h1>{place.name}</h1>
                <strong>{place.date}</strong>
                <div className="description">{place.description}</div>
            </div>
        </div>
    )
}