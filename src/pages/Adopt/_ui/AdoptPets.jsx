import { useEffect, useState } from "react"

import useScreenSizeChecker from "hooks/useScreenSizeChecker"

import { SectionNormal } from "components/Section"

import AdoptPet from "../_ui/AdoptPet"

import { PETS } from "constGeneral/pets"

const AdoptPets = () => {

    const isMobile1000px = useScreenSizeChecker(1000);

    const [filteredPets, setFilteredPets] = useState([]);

    useEffect(() => {
        if(isMobile1000px) {
            let sliceArr = PETS.slice(0, 8);
            setFilteredPets(sliceArr);

        } else {
            setFilteredPets(PETS);
        }

    }, [PETS, isMobile1000px]);

    return(
        <SectionNormal extraClass="snuggle-adopt__pets">

            <h2 className="frame__header"><span>Furry Friends</span> for Adoption</h2>

            <div className="frame__desc">
                <p>Meet these adorable pets as they search for their perfect snuggle buddy! Every pet in our care has been rescued, neutered, dewormed, and vaccinated. By choosing to adopt, you’re giving these lovable companions a second chance at life. </p>
            </div>

            <div className="snuggle-adopt__pets-list">
                {
                    filteredPets?.map((item, index) => {
                        return <AdoptPet
                            key={index}
                            pet={item}
                        />
                    })
                }
            </div>

        </SectionNormal>
    )
}

export default AdoptPets;


