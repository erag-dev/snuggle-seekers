
import { useState } from "react"

import { SectionNormal } from "components/Section"

import { FAQS } from "../_const"

const ContactFaqs = () => {

    return(
        <SectionNormal extraClass="snuggle-contact__faqsholder">

            <h2 className="frame__header">Frequently Asked <span>Questions</span></h2>

            <div className="snuggle-contact__faqs">
                {
                    FAQS?.map((item, index) => {
                        return <ItemRow
                            key={index}
                            item={item}
                        />
                    })
                }
            </div>

        </SectionNormal>
    )
}

export default ContactFaqs;


const ItemRow = ({
    item,
}) => {

    const [isActive, setIsActive] = useState(false);

    const handleAccordion = () => setIsActive(!isActive);

    return (
        <div 
            className={`snuggle-contact__faq ${
                isActive ? 'is--active' : ''
            }`}
        >
            <div 
                className="snuggle-contact__faq-title"
                onClick={() => handleAccordion()}
            >
                <p>{ item?.title }</p>
            </div>
            <div className="snuggle-contact__faq-body">
                <p dangerouslySetInnerHTML={{ __html: item?.desc }}></p>
            </div>
        </div>
    )
}