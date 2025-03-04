
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"

import iconHeader from "assets/heart-hug.svg"
import collage from "assets/about/collage.png"

const AboutStory = () => {
    return (
        <SectionNormal extraClass="snuggle-about__ourstory">
            
            <h2 className="frame__header">Our <span>Story</span><AppImg src={iconHeader} /></h2>
            
            <div className="snuggle-about__ourstory-cols">
                <div className="snuggle-about__ourstory-col col--1">
                    <AppImg src={collage} />
                </div>
                <div className="snuggle-about__ourstory-col col--2">

                    <div className="frame__desc">
                        <p>
                            <span>Every great adventure starts with a spark, and ours ignited from a deep-seated love for animals in need.</span>
                            <br/><br/>
                            At Snuggle Seeker, our story began in the vibrant heart of the Philippines, where a handful of compassionate individuals saw the plight of abandoned and stray animals. Moved by the sight of these furry souls searching for food, shelter, and love, we knew we had to take action.
                            <br/><br/>
                            In February 2015, we came together with a shared vision: to create a safe haven for these animals. We started small, rescuing pets from the streets and providing them with the care they desperately needed. With each rescue, we found not just animals in need, but extraordinary companions yearning for a second chance. Our mission blossomed into a refuge in NCR, where these animals could heal, receive medical care, and, most importantly, feel loved.
                            <br/><br/>
                            As our organization grew, so did our community of supporters. The people of the Philippines embraced our mission, joining hands to help us expand our reach. Today, we celebrate not only the countless lives saved but also the incredible families who have opened their hearts and homes to these deserving animals. Each adoption is a beautiful chapter, a testament to the power of love and connection. Every wag of a tail and every gentle purr reminds us why we do what we do.
                            <br/><br/>
                            But our story is not just about us; it’s about the bonds we create within our community. We are dedicated to advocating for animals, educating our neighbors about responsible pet ownership, and fostering compassion for all living beings. Together, we can make a difference, one paw at a time.
                            <br/><br/>
                            Thank you for being a part of our story and for believing in the beauty of adoption. Let’s create more happy endings together!
                        </p>
                    </div>

                </div>
            </div>
            
        </SectionNormal>
    )
}

export default AboutStory;