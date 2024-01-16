import "../../stylesheets/catcontacts.scss"
import phoneIcon from "../../assets/phone.png"
import emailIcon from "../../assets/email.png"

export default function CatContact({cat}) {
    return (
        <div className="contact-card">
            <img src={cat.image} />
            <h3>{cat.name}</h3>
            <section className="contact-info-area">
                <p className="one-line-flex">
                    <img src={phoneIcon} className="small-icon phone-icon" />
                    <span>{cat.phone}</span>
                </p>
                <p className="one-line-flex">
                    <img src={emailIcon} className="small-icon" />
                    <span>{cat.email}</span>
                </p>
            </section>
        </div>
    )
}