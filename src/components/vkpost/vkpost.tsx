import React, {useEffect} from "react";
import VK from "../../api/vk";
import {VKapiId} from "../../config";
import './vkpost.scss';


export const Vkpost = (arr: {target: string, name: string}) => {
    useEffect(() => {
        VK.init({
            apiId: VKapiId
        });
        VK.Widgets.Article(arr.target, arr.name);
    }, [])

    return <div className="vkpost col-12 my-2 mx-auto" id={arr.target}></div>
}
