import React, {FC} from "react";

import {GalleryComponent} from "../../components/gallery/gallery";
import {galleryUrl, tatooId} from "../../config";

export const TattooGallery: FC = () => {
    return <GalleryComponent url={galleryUrl + tatooId}/>
}