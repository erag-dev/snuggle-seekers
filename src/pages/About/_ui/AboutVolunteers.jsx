
import AppImg from "components/AppImg"
import { SectionWithEdges } from "components/Section"

import { OUR_VOLUNTEERS } from "../_const"

const AboutVolunteers = () => {
    return (
        <SectionWithEdges extraClass="snuggle-about__volunteers">
            
            <h2 className="frame__header">Our <span>Volunteers</span></h2>

            <div className="frame__desc">
                <p>Our volunteers are the lifeline of Snuggle Seeker. With their passion for animal welfare, <br/>they provide essential care and support to our furry residents. We’re incredibly grateful for their dedication in helping us create a safe and loving environment for every animal.</p>
            </div>

            <div className="snuggle-about__volunteers-gallery">
                {
                    OUR_VOLUNTEERS?.map((item, index) => {
                        return <div
                            key={index}
                            className="snuggle-about__volunteer box--hoverheart"
                        >
                            <AppImg src={item?.img} />
                        </div>
                    })
                }
            </div>
            
        </SectionWithEdges>
    )
}

export default AboutVolunteers;