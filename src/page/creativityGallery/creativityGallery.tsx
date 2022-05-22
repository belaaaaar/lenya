import React, {FC} from "react";

import {GalleryComponent} from "../../components/gallery/gallery";
import {galleryUrl, creativityId} from "../../config";

export const CreativityGallery: FC = () => {
    return <GalleryComponent url={galleryUrl + creativityId}/>
}