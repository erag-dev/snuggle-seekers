
import { NavLink } from "react-router-dom"

import AppImg from "components/AppImg"

import "./_styles.sass"

const AdoptPet = ({
    pet,
}) => {
    return (
        <div className="snuggle-adopt__pet">
            <NavLink to={`/pet`}>
                <div className="snuggle-adopt__pet-img">
                    <AppImg src={pet?.img} extraClass="img-fit size--90" />
                </div>
                
                <div className="snuggle-adopt__pet-infos">
                    <p className="snuggle-adopt__pet-name">{ pet?.name }</p>
                    <p className="snuggle-adopt__pet-agesex">{pet?.gender} / { pet?.age } yrs. old</p>
                    <p className="snuggle-adopt__pet-desc">{ pet?.desc }</p>

                    <div className="snuggle-adopt__pet-link">
                        <p>Read more</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default AdoptPet;