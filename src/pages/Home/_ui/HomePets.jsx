
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import useScreenSizeChecker from "hooks/useScreenSizeChecker"

import { SectionNormal } from "components/Section"
import Button from "components/Button"

import AdoptPet from "pages/Adopt/_ui/AdoptPet"

import { PETS } from "constGeneral/pets"

const HomePets = () => {

    const isMobile600px = useScreenSizeChecker(600);

    const navigate = useNavigate();

    const [filteredPets, setFilteredPets] = useState([]);

    useEffect(() => {
        let sliceCount = 6;
        if(isMobile600px) sliceCount = 3;

        let sliceArr = PETS.slice(0, sliceCount);
        setFilteredPets(sliceArr);
        
    }, [PETS, isMobile600px]);

    const handleRedirect = () => navigate('/adopt');

    return(
        <SectionNormal extraClass="snuggle-home__pets">

            <h2 className="frame__header"><span>Furry Friends</span> for Adoption</h2>

            <div className="frame__desc">
                <p>Meet these adorable pets as they search for their perfect snuggle buddy! Every pet in our care has been rescued, neutered, dewormed, and vaccinated. By choosing to adopt, you’re giving these lovable companions a second chance at life. </p>
            </div>

            <div className="snuggle-home__pets-list">
                {
                    filteredPets?.map((item, index) => {
                        return <AdoptPet
                            key={index}
                            pet={item}
                        />
                    })
                }
            </div>

            <Button 
                isDiv={true}
                onClick={() => handleRedirect(true)}
                btnLbl="View More Pets"
                extraClass="align--c"
            />

        </SectionNormal>
    )
}

export default HomePets;


