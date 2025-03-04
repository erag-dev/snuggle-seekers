
import { useNavigate } from "react-router-dom"

import { SectionWithEdges } from "components/Section"
import ItemBox from "components/ItemBox"

import { HELP_DONATE } from "../_const"

const HomeHelp = () => {

    const navigate = useNavigate();

    const handleRedirect = () => navigate('/donate');

    return(
        <SectionWithEdges extraClass="snuggle-home__help">
            
            <h2 className="frame__header">
                Over 350 animals have found their <span>fur-ever</span> homes. <br/>
                Help us to spread the <span>snuggle</span> joy!
            </h2>

            <div className="snuggle-home__help-items">
                {
                    HELP_DONATE?.map((item, index) => {
                        return <ItemBox
                            key={index}
                            item={item}
                            btnLbl={item?.btn_lbl}
                            hasLink={true}
                            callbackRedirect={handleRedirect}
                        />
                    })
                }
            </div>
            
        </SectionWithEdges>
    )
}

export default HomeHelp;
