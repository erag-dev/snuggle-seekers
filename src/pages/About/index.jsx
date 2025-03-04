
import { useState } from "react"

import PageLayout from "components/PageLayout"
import { SectionIntro, SectionStats } from "components/Section"
import Button from "components/Button"

import AboutShelter from "./_ui/AboutShelter"
import AboutStory from "./_ui/AboutStory"
import AboutPawjects from "./_ui/AboutPawjects"
import AboutVolunteers from "./_ui/AboutVolunteers"

import "./_styles.sass"

const About = () => {
    
    const [isShowAdopt, setIsShowAdopt] = useState(false);

    return(
        <PageLayout
            pageClass="snuggle-about"
            pageName="About"
            isAdopt={isShowAdopt}
            isLoading={false}
            callbackIsAdopt={setIsShowAdopt}
        >

            <SectionIntro
                extraClass="snuggle-about__intro"
                topText="About Snuggle Seeker"
            >
                <h2 className="frame__header">
                    We’re here to <span>pawsitively</span> change lives <br/>
                    for animals in need!
                </h2>

                <div className="frame__desc">
                    <p>We are a devoted team of animal enthusiasts committed to enhancing the lives of animals across the Philippines. Our mission is to rescue, rehabilitate, and re-home abused, abandoned, and neglected animals, ensuring they receive the love and care they deserve.</p>
                </div>

                <Button 
                    isDiv={true}
                    onClick={() => setIsShowAdopt(true)}
                    btnLbl="Adopt Love Today"
                    extraClass="align--c"
                />

            </SectionIntro>


            <AboutShelter />

            <AboutStory />

            <SectionStats />

            <AboutPawjects />

            <AboutVolunteers />

        </PageLayout>
    )
}

export default About;