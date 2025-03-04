
import { useState } from "react"

import PageLayout from "components/PageLayout"
import { SectionPetflation } from "components/Section"

import SelectedPetTop from "./_ui/SelectedPetTop"
import SelectedPetIntro from "./_ui/SelectedPetIntro"
import SelectedPetGallery from "./_ui/SelectedPetGallery"

import "./_styles.sass"

const SelectedPet = () => {

    const [isShowAdopt, setIsShowAdopt] = useState(false);

    return(
        <PageLayout
            pageClass="snuggle-selectedpet"
            pageName="Selected Pet"
            isAdopt={isShowAdopt}
            isLoading={false}
            callbackIsAdopt={setIsShowAdopt}
        >

            <SelectedPetTop />

            <SelectedPetIntro callbackAdopt={setIsShowAdopt} />

            <SelectedPetGallery callbackAdopt={setIsShowAdopt} />

            <SectionPetflation />

        </PageLayout>
    )
}

export default SelectedPet;