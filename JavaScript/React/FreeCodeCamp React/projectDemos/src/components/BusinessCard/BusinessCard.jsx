import "../../stylesheets/businesscard.scss"

import BasicInfo from "./BasicInfo.jsx"
import LargeContactButtonWrapper from "./LargeContactButtonWrapper.jsx"
import DetailInfoContainer from "./DetailInfoContainer.jsx"
import SocialLinkBelt from "./SocialLinkBelt.jsx"

export default function BusinessCard(props) {
    return (
        <div className="business-card">
            <img className="business-guy" />
            <
                BasicInfo
                    devName="Seth Swenson"
                    job="Full-Stack Developer"
                    site="https://github.com/Coding-Polaris"
            />
            <LargeContactButtonWrapper />
            <DetailInfoContainer />
            <SocialLinkBelt />
        </div>
    )
}