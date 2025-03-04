
import AppImg from "components/AppImg"
import { SectionWithEdges } from "components/Section"

import { INIT_STEPS } from "../_const"

const HomeSteps = () => {
    return(
        <SectionWithEdges extraClass="snuggle-home__stepsholder">
            
            <h2 className="frame__header">Your Initial Steps to <span>Snuggle</span> Bliss</h2>

            <div className="frame__desc">
                <p>Follow these steps to bring your new furry friend home!</p>
            </div>

            <div className="snuggle-home__steps">
                {
                    INIT_STEPS?.map((item, index) => {
                        return <BoxStep
                            key={index}
                            index={index}
                            step={item}
                        />
                    })
                }
            </div>
            
        </SectionWithEdges>
    )
}

export default HomeSteps;

const BoxStep = ({
    index,
    step,
}) => {
    return (
        <div className={`snuggle-home__step step--${index}`}>
            <div className="snuggle-home__step-icon">
                <AppImg src={step?.icon} extraClass="img-fit size--80" />
            </div>

            <p className="snuggle-home__step-title">{ step?.title }</p>
            <p className="snuggle-home__step-desc" dangerouslySetInnerHTML={{ __html: step?.desc }}></p>
        </div>
    )
}