
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"
import Button from "components/Button"

import photo01 from "assets/pet/pet01.png"
import photo02 from "assets/pet/pet02.png"
import photo03 from "assets/pet/pet03.png"

const IMAGES = [
    photo01,
    photo02,
    photo03,
    photo03,
    photo02,
    photo01,
];

const SelectedPetGallery = ({
    callbackAdopt,
}) => {
    return (
        <SectionNormal extraClass="snuggle-selectedpet__galleryholder">

            <div className="snuggle-selectedpet__gallery">

                {
                    IMAGES?.map((item, index) => {
                        return <div 
                            key={index}
                            className="snuggle-selectedpet__photo box--hoverheart"
                        >
                            <AppImg src={item} />
                        </div>
                    })
                }

            </div>

            <Button 
                isDiv={true}
                onClick={() => callbackAdopt(true)}
                btnLbl="Adoption Inquiry"
                extraClass="align--c"
            />

        </SectionNormal>
    )
}

export default SelectedPetGallery;
