import star from "/src/assets/experiences/star.svg"

export default function ExpCard(props) {
    const expInfo = props.experienceList

    let status;
    if (expInfo.openSpots === 0) {
        status = "SOLD OUT"
    } else if (expInfo.location === "Online") {
        status = "ONLINE"
    }

    return (
        <div className="experiences-card">
            <div className="card-and-status-wrapper">
                <img src={expInfo.coverImg} className="card-image" title={expInfo.description} />
                {
                    status && (
                        <p className="status">{status}</p>
                    )
                }
            </div>
            <div className="score-container">
                <img src={star} className="star" />
                <span className="score">{expInfo.stats.rating}</span>
                <span className="reviewers-location">({expInfo.stats.reviewCount}) · {expInfo.location}</span>
            </div>
            <h2 className="card-title">{expInfo.title}</h2>
            <div className="price-per-person">
                <strong>From ${expInfo.price}</strong> / person
            </div>
        </div>
    )
}