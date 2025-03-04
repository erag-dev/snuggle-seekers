import { useEffect, useState } from "react"

import useScreenSizeChecker from "hooks/useScreenSizeChecker"

import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"

import { DONATE_CHANNELS } from "../_const"

const DonateChannels = () => {

    const isMobile600px = useScreenSizeChecker(600);

    const [filteredChannels, setFilteredChannels] = useState([]);

    useEffect(() => {
        if(isMobile600px) {
            let sliceArr = DONATE_CHANNELS.slice(0, 3);
            setFilteredChannels(sliceArr);

        } else {
            setFilteredChannels(DONATE_CHANNELS);
        }

    }, [DONATE_CHANNELS, isMobile600px]);

    return(
        <SectionNormal extraClass="snuggle-donate__channelsholder">

            <h2 className="frame__header">Official <span>Donation</span> Channels</h2>

            <div className="frame__desc">
                <p>
                    We greatly appreciate your interest in supporting Snuggle Seeker! To help us understand the purpose of your donation or to specify who you’d like to sponsor, please leave a note at the payment gateway. Alternatively, you can send us an email at <a href="mailto:hello.engarcia@gmail.com">testemail@snuggleseeker.com</a> with your donation details.
                    <br/><br/>
                    Your generosity makes a world of difference in the lives of pets in need!
                </p>
            </div>

            <div className="snuggle-donate__channels">
                {
                    filteredChannels?.map((item, index) => {
                        return <ItemRow
                            key={index}
                            item={item}
                        />
                    })
                }
            </div>

        </SectionNormal>
    )
}

export default DonateChannels;


const ItemRow = ({
    item,
}) => {
    return (
        <div className="snuggle-donate__channel">
            <div className="snuggle-donate__channel-thumbnail">
                <AppImg src={item?.img} extraClass="img-fit size--80" />
            </div>
            <div className="snuggle-donate__channel-infos">
                <p className="snuggle-donate__channel-name">{ item?.name }</p>
                <p className="snuggle-donate__channel-num">{ item?.acc_num }</p>
            </div>
        </div>
    )
}