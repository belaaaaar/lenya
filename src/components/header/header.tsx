import React, {FC} from "react";
import './header.scss';

import rabbit from '../../image/rabbit.png';
import offergif from '../../image/video.gif';
import {Mediaicons} from "../mediaicons/mediaicons";

const Social: FC = () => {
    return <>
        <div className="social">
            <div className="social__tag">#ГрустныйЛёня</div>
            <Mediaicons/>
        </div>
    </>
}

const Offer: FC = () => {
    return <>
        <div className="offer">
            <div className="offer__left">
                <img className="offer__left__logo" src={rabbit} alt="instalogo"/>
            </div>
            <div className="offer__right">
                <div className="offer__right__text">Вы всегда можете связаться со мной и проконсультироваться</div>
                <div className="offer__right__prise">Цена татуировки от 3000.<br/>
                    + Одноразовые расходные матерьялы<br/>
                    + Стерильное оборудование<br/>
                    + Индивидуальный подход к каждому клинту<br/>
                    + Веду клиента до полного заживления<br/>
                    ? По отзывам клиентов говорят бью не больно<br/>
                    ??? Личный психоллог
                </div>
                <div className="offer__right__btn">
                    <img className="gif" src={offergif} alt="offergif"/>
                </div>
            </div>
        </div>
    </>
}

export const Header: FC = () => {
    return <div className="header_background">
        <div className="header">
            <div className="header__content">
                <Social></Social>
                <Offer></Offer>
            </div>
        </div>
    </div>


}