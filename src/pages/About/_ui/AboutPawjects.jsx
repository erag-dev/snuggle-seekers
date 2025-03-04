
import { SectionNormal } from "components/Section"
import ItemBox from "components/ItemBox"

import { OUR_PAWJECTS } from "../_const"

const AboutPawjects = () => {
    return (
        <SectionNormal extraClass="snuggle-about__pawjects">
            
            <h2 className="frame__header">Our <span>Paw</span>jects</h2>
            
            <div className="frame__desc">
                <p>Here are the paw-related projects we undertake to support animals in need:</p>
            </div>

            <div className="snuggle-about__pawjects-list">
                {
                    OUR_PAWJECTS?.map((item, index) => {
                        return <ItemBox
                            key={index}
                            item={item}
                            btnLbl="Learn more"
                            hasLink={false}
                        />
                    })
                }
            </div>
            
        </SectionNormal>
    )
}

export default AboutPawjects;
