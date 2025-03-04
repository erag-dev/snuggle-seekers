
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"
import Button from "components/Button"

import mainPhoto from "assets/kv-model.png"
import extraText1 from "assets/kv-text01.png"
import extraText2 from "assets/kv-text02.png"

const HomeKv = ({
    callbackAdopt,
}) => {
    return(
        <SectionNormal extraClass="snuggle-home__kv">

            <div className="snuggle-home__kv-texts">
                <h2>Find Your Furry Companion <br/>and <span>Snuggle</span> Up!</h2>

                <div className="frame__desc">
                    <p>
                        Welcome to Snuggle Seekers! We’re dedicated to rescuing and rehoming pets, giving them a second chance at happiness. Explore our success stories and find your perfect furry companion today.<br/><br/>
                        <span>Let’s create a world filled with snuggles and unconditional love!</span>
                    </p>
                </div>

                <Button 
                    isDiv={true}
                    onClick={() => callbackAdopt(true)}
                    btnLbl="Adopt Love Today"
                />
            </div>

            <div className="snuggle-home__kv-main">
                <AppImg src={mainPhoto} />
                <AppImg src={extraText1} extraClass="snuggle-home__kv-main__text text--1" />
                <AppImg src={extraText2} extraClass="snuggle-home__kv-main__text text--2" />
            </div>

        </SectionNormal>
    )
}

export default HomeKv;