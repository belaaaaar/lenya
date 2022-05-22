import React, {FC} from "react";

import {GalleryComponent} from "../../components/gallery/gallery";
import {creativityId, galleryUrl} from "../../config";

export const PiercingGallery: FC = () => {
    return <>
        <GalleryComponent url={galleryUrl + creativityId}/>
    </>
}