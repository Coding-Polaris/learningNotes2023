import LargeButton from "./LargeButton.jsx"
import emailImg from "../../assets/email.png"
import linkedinImg from "../../assets/linkedin.png"

export default function ContactButtonWrapper() {
    return (
        <div className="large-contact-buttons">
            <
                LargeButton
                    className="email"
                    icon={emailImg}
                    text="Email"
                    link="mailto:seth.swenson@protonmail.com"
            />
            <
                LargeButton
                    className="linkedin"
                    icon={linkedinImg}
                    text="LinkedIn"
                    link="https://www.linkedin.com/"
            />
        </div>
    )   
}