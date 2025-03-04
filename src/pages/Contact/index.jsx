
import { useState } from "react"

import PageLayout from "components/PageLayout"
import { SectionIntro, SectionPetflation } from "components/Section"

import ContactFormHolder from "./_ui/ContactFormHolder"
import ContactFaqs from "./_ui/ContactFaqs"

import "./_styles.sass"

const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);

    return(
        <PageLayout
            pageClass="snuggle-contact"
            pageName="Contact"
            isLoading={isLoading}
            hideFooterEdge={true}
            hideGetInTouch={true}
        >

            <SectionIntro
                extraClass="snuggle-contact__intro"
                topText="Get In Touch"
            >
                <h2 className="frame__header">
                    Reach out—Your next <span>snuggle</span> <br/>
                    buddy awaits!
                </h2>

                <div className="frame__desc">
                    <p>We’re passionate about connecting loving homes with furry friends in need. Whether you have questions about pet adoption, want to share your success story, or need assistance navigating our site, we’re here to help!</p>
                </div>

            </SectionIntro>


            <ContactFormHolder callbackLoader={setIsLoading} />

            <ContactFaqs />

            <SectionPetflation />

        </PageLayout>
    )
}

export default Contact;