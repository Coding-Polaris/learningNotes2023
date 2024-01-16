import SocialLinkButton from "./SocialLinkButton.jsx"

export default function SocialLinkBelt(props) {
    return (
        <div className="social-link-belt">
            {
                [
                    "twitter",
                    "facebook",
                    "instagram",
                    "github"
                ].map(
                    (siteName, index) => {
                        return (<SocialLinkButton key={index} site={siteName} />)
                    }
                )
            }
        </div>
    )
}