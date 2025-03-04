
import AppImg from "components/AppImg"
import { SectionWithEdges } from "components/Section"

import { SHELTER_IMAGES } from "../_const"

const AboutShelter = () => {
    return (
        <SectionWithEdges extraClass="snuggle-about__shelter">
            
            <h2 className="frame__header">Our shelter provides a safe haven for <span>rescued</span> animals.</h2>

            <div className="frame__desc">
                <p>This is our sample address, NCR, Philippines</p>
            </div>

            <div className="snuggle-about__shelter-gallery">
                {
                    SHELTER_IMAGES?.map((item, index) => {
                        return <div
                            key={index}
                            className="snuggle-about__shelter-img box--hoverheart"
                        >
                            <AppImg src={item?.img} />
                        </div>
                    })
                }
            </div>
            
        </SectionWithEdges>
    )
}

export default AboutShelter;