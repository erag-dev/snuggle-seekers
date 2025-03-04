
import AppImg from "components/AppImg"
import Button from "components/Button"

import img404 from "assets/404.png"

import "./_styles.sass"

const AboutPage = () => {
    return(
        <div className="error404">

            <div className="error404__inner">
                <AppImg src={img404} />

                <Button 
                    isDiv={true}
                    btnLbl="Go Back Home"
                    extraClass="pink align--c"
                />
            </div>

        </div>
    )
}

export default AboutPage;