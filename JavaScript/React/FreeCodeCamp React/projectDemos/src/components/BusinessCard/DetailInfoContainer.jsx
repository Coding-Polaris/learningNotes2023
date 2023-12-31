import DetailInfo from "./DetailInfo.jsx"

export default function DetailInfoContainer(props) {
    return (
        <div className="detail-info-container">
            <
                DetailInfo
                    header="About"
                    description={`
                        Veteran Ruby developer with an aspiring interest in React, Python, and one day compiled langs.
                        Looking to hone my skills to a razor edge and teach aspiring developers.
                    `}
            />
            <
                DetailInfo
                    header="Interests"
                    description={`
                        Outdoorsman, disciple of Freddie Mercury, Gerard Way, and overall live music junkie. Will cook if you clean. Incessant gamer. 
                    `}
            />
        </div>
    )   
}
