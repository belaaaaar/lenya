import React, {FC} from "react";

import './layout.scss';
import {Footer} from "../footer/footer";
import {Menu} from "../menu/menu";


export const Layout: FC = (props) => {
    return <div className="layout">
        <Menu/>
        <div className="layout__content container" >
            {props.children}
        </div>
        <Footer />
    </div>
}