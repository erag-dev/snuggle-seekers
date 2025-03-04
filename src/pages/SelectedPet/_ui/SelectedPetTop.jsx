
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"

import mainLuna from "assets/pet/luna.png"
import lunaMsg01 from "assets/pet/text01.png"
import lunaMsg02 from "assets/pet/text02.png"

gsap.registerPlugin(useGSAP);

const SelectedPetTop = () => {

    useGSAP(() => {
        gsap.to('.snuggle-selectedpet__top-purr', {
            autoAlpha: 1,
            duration: 0.7,
            repeat: -1,
            yoyo: true,
            stagger: {
                each: 0.15
            },
            ease: 'power1.inOut'
        });
    });

    return (
        <SectionNormal extraClass="snuggle-selectedpet__top">

            <AppImg src={mainLuna} extraClass="snuggle-selectedpet__top-main" />

            <div className="snuggle-selectedpet__top-texts">
                <AppImg src={lunaMsg01} extraClass="snuggle-selectedpet__top-text text--1" />
                <AppImg src={lunaMsg02} extraClass="snuggle-selectedpet__top-text text--2" />
            </div>

            <div className="snuggle-selectedpet__top-purrs">
                <p className="snuggle-selectedpet__top-purr purr--1">mroww~</p>
                <p className="snuggle-selectedpet__top-purr purr--2">mrrrrrrrr~</p>
                <p className="snuggle-selectedpet__top-purr purr--3">mrruh~</p>
                <p className="snuggle-selectedpet__top-purr purr--4">mrrrrr~</p>
            </div>

        </SectionNormal>
    )
}

export default SelectedPetTop;