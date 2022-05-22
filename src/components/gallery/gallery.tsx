import React, {useEffect, useState} from "react";

import './gallery.scss';
import {ModalForGallery} from "../modalforgallery/modalforgallery";
import {Layout} from "../layout/layout";

type ImagesResponse = {
    Images: Array<{
        url: string
    }>
};

interface GalleryProps {
    url: string
}

export const GalleryComponent = ({url}: GalleryProps) => {
    const [gallery, setGallery] = useState<ImagesResponse["Images"]>([]);
    const [imgId, setImgId] = useState(0);
    const [modal, setModal] = useState(false);
    const onClose = () => setModal(false)
    const [loading, setLoading] = React.useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000)

    const onRight = () => {
        if (imgId < gallery.length - 1) {
            setImgId((id) => {
                return ++id;
            });
        } else {
            setImgId(() => {
                return 0;
            });
        }

    }

    const onLeft = () => {
        if (imgId > 0) {
            setImgId((id) => {
                return --id;
            });
        } else {
            setImgId(() => {
                return gallery.length - 1;
            });
        }
    }

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json() as Promise<ImagesResponse>;
            })
            .then((data) => {
                setGallery(data.Images);
            });
    }, [])

    return <>
        <ModalForGallery onClose={onClose} onRight={onRight} onLeft={onLeft} content={gallery[imgId]?.url || ""}
                         visible={modal}/>
        <Layout>
            <div className={loading ? "nothing" : "gallery"}>
                <div className="row mb-4">
                    <h1 className="title"> {} </h1>
                    {gallery.map((link, index) => {
                        return <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 g-4" onClick={() => {
                            setImgId(index)
                            setModal(true)
                        }}>
                            <img className="gallery__img " src={link.url} alt=""/>
                        </div>
                    })}
                </div>
            </div>
        </Layout>
    </>
}