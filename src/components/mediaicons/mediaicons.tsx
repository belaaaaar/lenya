import React, {FC} from "react";
import './mediaicons.scss';
import instalogo from '../../image/instagramm.png';
import vklogo from '../../image/vk.png';
import tglogo from '../../image/tg.png';


export const Mediaicons: FC = (props) => {
    return <>
        <div className="social__icons">
            <img onClick={() => window.location.href = 'https://example.com/1234'} className="icon" src={instalogo} alt="instalogo"/>
            <img className="icon" src={vklogo} alt="vklogo"/>
            <img className="icon" src={tglogo} alt="tglogo"/>
        </div>
    </>
}
