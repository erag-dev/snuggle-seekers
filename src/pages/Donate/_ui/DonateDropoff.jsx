
import { SectionWithEdges } from "components/Section"

const DonateDropoff = () => {
    return(
        <SectionWithEdges extraClass="snuggle-donate__dropoff">
            
            <h2 className="frame__header">Drop-Off <span>Donations</span></h2>

            <div className="frame__desc">
                <p>You can also drop off your donations at our location:<br/><span>This is our sample address, Philippines</span></p>
            </div>

            <div className="snuggle-donate__dropoff-wishlists">
                <AnimalWishlist />

                <ShelterWishlist />
            </div>
            
        </SectionWithEdges>
    )
}

export default DonateDropoff;


const AnimalWishlist = () => {
    return (
        <div className="snuggle-donate__dropoff-wishlist wishlist--animal">
            <p>Animal Wishlist:</p>
            <div>
                <p>
                    • Dog food (kibble and canned)<br/>
                    • Cat food (kibble and canned)<br/>
                    • Crates, carriers or cages<br/>
                    • Pee pads<br/>
                    • Scratching posts for the cats
                </p>
                <p>
                    • Chew toys for the dogs<br/>
                    • Vaccines, medicine and vitamins<br/>
                    • Dog and cat treats<br/>
                    • Leashes, harnesses and collars
                </p>
            </div>
        </div>
    )
}

const ShelterWishlist = () => {
    return (
        <div className="snuggle-donate__dropoff-wishlist wishlist--shelter">
            <p>Shelter Wishlist:</p>
            <div>
                <p>
                    • Detergent powder and bleach<br/>
                    • Dishwashing paste or liquid<br/>
                    • Bath towels<br/>
                    • Garbage bags (XXL)<br/>
                    • Foot rugs or door mats
                </p>
                <p>
                    • Clinic supplies (alcohol, cotton, etc.)<br/>
                    • Old newspapers<br/>
                    • Toilet paper<br/>
                    • Mops and brooms
                </p>
            </div>
        </div>
    )
}