
import PageLayout from "components/PageLayout"
import { SectionIntro } from "components/Section"

import DonateSamples from "./_ui/DonateSamples"
import DonateChannels from "./_ui/DonateChannels"
import DonateDropoff from "./_ui/DonateDropoff"

import "./_styles.sass"

const Donate = () => {
    return(
        <PageLayout
            pageClass="snuggle-donate"
            pageName="Donate"
            isLoading={false}
            showSponsor={true}
            hideGetInTouch={true}
        >

            <SectionIntro
                extraClass="snuggle-donate__intro"
                topText="Support Our Mission"
            >
                <h2 className="frame__header">
                    Your generosity, <span>their</span> second chance!
                </h2>

                <div className="frame__desc">
                    <p>
                        Your generous donations directly impact the lives of animals in need, helping us provide essential care, medical treatments, and resources for adoption.
                    </p>
                </div>

            </SectionIntro>


            <DonateSamples />

            <DonateChannels />

            <DonateDropoff />

        </PageLayout>
    )
}

export default Donate;