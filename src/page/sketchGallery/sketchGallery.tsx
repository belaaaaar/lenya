import React, {FC} from "react";

import {GalleryComponent} from "../../components/gallery/gallery";
import {galleryUrl, skethId} from "../../config";

export const SketchGallery: FC = () => {
    return <GalleryComponent url={galleryUrl + skethId}/>
}