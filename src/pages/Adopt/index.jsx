
import PageLayout from "components/PageLayout"
import { SectionIntro, SectionStats } from "components/Section"

import AdoptPets from "./_ui/AdoptPets"
import AdoptJourney from "./_ui/AdoptJourney"

import "./_styles.sass"

const Adopt = () => {
    return(
        <PageLayout
            pageClass="snuggle-adopt"
            pageName="Adopt"
            isLoading={false}
        >

            <SectionIntro
                extraClass="snuggle-adopt__intro"
                topText="Find Your Furry Companion"
            >
                <h2 className="frame__header">
                    Every animal deserves a <span>loving</span> home, and we’re here <br/>to help you make that <span>connection</span>.
                </h2>

                <div className="frame__desc">
                    <p>
                        Each pet profile includes essential information about their personality, temperament, and any special needs, helping you find the perfect match for your lifestyle. Our dedicated team is here to support you through the adoption process, ensuring a seamless transition for both you and your new pet.
                        <br/><br/>
                        Join us in making a difference—browse our adoptable pets below, and take the exciting step toward welcoming a new friend into your home. Together, we can create a community filled with love, laughter, and endless snuggles!
                    </p>
                </div>
            </SectionIntro>

            <SectionStats />

            <AdoptPets />
            
            <AdoptJourney />

        </PageLayout>
    )
}

export default Adopt;