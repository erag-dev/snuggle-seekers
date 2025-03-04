
import AppImg from "components/AppImg"
import { SectionWithEdges } from "components/Section"

import { DONATE_SAMPLES } from "../_const"

const DonateSamples = () => {
    return(
        <SectionWithEdges extraClass="snuggle-donate__samplesholder">
            
            <h2 className="frame__header">
                No contribution is too small, and each act of <span>kindness</span> <br/>
                helps us bring more pets and people <span>together</span>.
            </h2>

            <div className="frame__desc">
                <p>By contributing to our mission, you help us:</p>
            </div>

            <div className="snuggle-donate__samples">
                {
                    DONATE_SAMPLES?.map((item, index) => {
                        return <div
                            key={index}
                            className={`snuggle-donate__sample sample--${index}`}
                        >
                            <p className="snuggle-donate__sample-desc">{ item }</p>
                        </div>
                    })
                }
            </div>
            
        </SectionWithEdges>
    )
}

export default DonateSamples;
