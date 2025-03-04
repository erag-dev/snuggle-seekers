
import AppImg from "components/AppImg"
import { SectionWithEdges } from "components/Section"

import dogMax from "assets/adopt/max.png"

const AdoptJourney = () => {
    return(
        <SectionWithEdges extraClass="snuggle-adopt__journey">
            
            <h2 className="frame__header">A <span>Tail</span> of Transformation: Max’s Journey</h2>

            <div className="snuggle-adopt__journey-cols">
                <div className="snuggle-adopt__journey-col col--1">
                    <AppImg src={dogMax} />
                </div>
                <div className="snuggle-adopt__journey-col col--2">

                    <div className="frame__desc">
                        <p>
                            Meet Max, a spirited Labrador mix who came to Snuggle Seeker as a shy and timid pup. Found wandering the streets, he was initially wary of people and new environments. Our dedicated volunteers worked patiently with him, providing love, socialization, and training to help him regain his confidence.
                            <br/><br/>
                            One sunny Saturday, Sarah and her family visited Snuggle Seeker, hoping to find a furry companion. As they browsed the adoption area, Max cautiously approached them, his tail wagging just a bit. Sarah immediately felt a connection, and despite his initial shyness, Max seemed to sense their warmth. After spending time with him, Sarah knew Max was meant to be part of their family. They completed the adoption process and took him home that day. With a cozy bed, plenty of toys, and the love of his new family, Max began to flourish.
                            <br/><br/>
                            Today, Max is a vibrant, playful member of the household. He loves long walks in the park, snuggling on the couch, and playing fetch with the kids. His transformation is nothing short of amazing, and he now greets everyone with wagging enthusiasm.
                            <br/><br/>
                            Sarah often shares how adopting Max changed their lives for the better. “He’s not just a pet; he’s family,” she says. “We can’t imagine our lives without him.”
                            <br/><br/>
                            Max’s story reminds us of the incredible bonds that can form through adoption, proving that with a little patience and love, every pet can find their forever home.
                        </p>
                    </div>

                </div>
            </div>
            
        </SectionWithEdges>
    )
}

export default AdoptJourney;
