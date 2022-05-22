import React, {FC} from "react";

import './contacts.scss';
import {Layout} from "../../components/layout/layout";

export const Contacts: FC = () => {
    return <Layout>
        <div className="Contacts">
            <h1 className="block_title">Контакты</h1>
            <div className="Contacts__container">

                <div className="footer__address">
                    <span>ул. Красная, 42 <br/> @Lendeo</span>
                </div>

                <iframe
                    className="Contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3aa650a962be99a9b8f7684c51ec098cbb12fa1d38d617c574dd49bae71df474&amp;source=constructor"
                    width="100%" height="400"></iframe>
            </div>
        </div>
    </Layout>
}