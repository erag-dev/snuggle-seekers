
import { SectionWithEdges } from "components/Section"
import Button from "components/Button"

const SelectedPetIntro = ({
    callbackAdopt,
}) => {
    return(
        <SectionWithEdges extraClass="snuggle-selectedpet__intro">
            
            <h2 className="frame__header">Meet, <span>Luna</span>!</h2>

            <div className="frame__desc desc--1">
                <p>
                    <span>Playful and affectionate</span>
                    <br/><br/>
                    Breed: Persian<br/>
                    Age: 3 y.o<br/>
                    Gender: Female<br/>
                    Size: Medium
                </p>
            </div>

            <div className="frame__desc desc--2">
                <p>Luna is a gentle soul who enjoys quiet cuddles.<br/>She is rescued from the streets and is now looking for a loving fur-ever home.</p>
                <p className="label">Favorite Activities:</p>
                <ul>
                    <li>• Playing with feet and biting it</li>
                    <li>• Following someone</li>
                    <li>• Curling up while you’re doing something</li>
                    <li>• Jumping on your shoulder</li>
                    <li>• Sleeping on your lap</li>
                </ul>
                <p className="label">Ideal Home:</p>
                <p>Luna would thrive in a home that can provide plenty of love and attention.<br/>She gets along well with children and other pets, making her a perfect addition to any family. </p>
            </div>

            <Button 
                isDiv={true}
                onClick={() => callbackAdopt(true)}
                btnLbl="Adoption Inquiry"
                extraClass="align--c"
            />
           
        </SectionWithEdges>
    )
}

export default SelectedPetIntro;
