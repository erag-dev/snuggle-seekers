
import AppImg from "components/AppImg"
import ContactForm from "./ContactForm"

import edgeWithPets from "assets/footer-pets.png"
import edgeBottom from "assets/edge-bot.png"

import { CONTACT_LINKS } from "../_const"

const ContactFormHolder = ({
    callbackLoader,
}) => {
    return (
        <section className="snuggle-contact__formholder frame overflow--visible">

            <AppImg src={edgeWithPets} extraClass="snuggle-contact__formholder-edge edge--1" />
            <AppImg src={edgeBottom} extraClass="snuggle-contact__formholder-edge edge--2" />

            <div className="frame__limit">

                <div>
                    <h2 className="frame__header">
                        Have Questions? <br/>
                        We Have <span>Answers</span>!
                    </h2>

                    <div className="frame__desc">
                        <p>Your feedback and inquiries are important to us, and we aim to respond as quickly as possible. Thank you for your interest in making a difference in the lives of pets!</p>
                    </div>

                    <div className="snuggle-contact__formholder-links">
                        {
                            CONTACT_LINKS?.map((item, index) => {
                                return <ContactLink
                                    key={index}
                                    item={item}
                                />
                            })
                        }
                    </div>
                    
                    <ContactDisclaimer />
                    
                </div>

                <ContactForm callbackLoader={callbackLoader} />

            </div>
        </section>
    )
}

export default ContactFormHolder;

const ContactLink = ({
    item,
}) => {
    return (
        <div className="snuggle-contact__formholder-link">
            <a 
                href={item?.href} 
                target="_blank"
            >
                <p>• { item?.label }: <span>{ item?.value }</span></p>
            </a>
        </div>
    )
}

const ContactDisclaimer = () => {
    return (
        <div className="snuggle-contact__formholder-disclaimer">
            <div className="frame__desc">
                <p>Reporting Animal Cruelty</p>
                <p>If you witness or suspect animal cruelty, please contact local authorities or animal control immediately. For additional support, reach out to us.</p>
            </div>
        </div>
    )
}