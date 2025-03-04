
import imgRes01 from "assets/about/r01.png"
import imgRes02 from "assets/about/r02.png"
import imgRes03 from "assets/about/r03.png"
import imgPawject01 from "assets/about/p01.png"
import imgPawject02 from "assets/about/p02.png"
import imgPawject03 from "assets/about/p03.png"
import imgVolunteer01 from "assets/about/v01.png"
import imgVolunteer02 from "assets/about/v02.png"
import imgVolunteer03 from "assets/about/v03.png"
import imgVolunteer04 from "assets/about/v04.png"
import imgVolunteer05 from "assets/about/v05.png"

const SHELTER_IMAGES = [
    { img: imgRes01 },
    { img: imgRes02 },
    { img: imgRes03 },
];

const STATS = [
    { name: 'Sheltered', count: '500+' },
    { name: 'Rescued', count: '1200+' },
    { name: 'Spayed & Neutered', count: '5000+' },
    { name: 'Adopted', count: '350+' },
];

const OUR_PAWJECTS = [
    { 
        title: 'Stray Feeding', 
        desc: 'Helping homeless animals survive; fostering compassion in our communities.', 
        img: imgPawject01 
    },
    { 
        title: 'Spay & Neuter', 
        desc: 'Help save lives by sponsoring the neuter cost of a rescue!', 
        img: imgPawject02 
    },
    { 
        title: 'Seminar', 
        desc: 'Educate attendees on how to support animal health and well-being in their communities.', 
        img: imgPawject03 
    },
];

const OUR_VOLUNTEERS = [
    { img: imgVolunteer01 },
    { img: imgVolunteer02 },
    { img: imgVolunteer03 },
    { img: imgVolunteer04 },
    { img: imgVolunteer05 },
]

export {
    SHELTER_IMAGES,
    STATS,
    OUR_PAWJECTS,
    OUR_VOLUNTEERS,
}