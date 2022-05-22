import React, {FC, useEffect, useState} from "react";
import master from "../../image/master.png";
import {Header} from "../../components/header/header";

import './main.scss';
import {Vkpost} from "../../components/vkpost/vkpost";
import {useNavigate} from "react-router-dom";
import {Layout} from "../../components/layout/layout";

type PostsResponse = {
    Posts: Array<{
        id: number
        name: string
    }>
};

export const Main: FC = () => {
    const [posts, setPosts] = useState<PostsResponse["Posts"]>([]);

    let navigate = useNavigate();
    const routeTatoo = () => {
        navigate("/tattoo-gallery");
    }
    const routePiercing = () => {
        navigate("/piercing-gallery");
    }
    const routeNews = () => {
        navigate("/news");
    }
    const routeSketch = () => {
        navigate("/sketch-gallery");
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/rest/posts?limit=3')
            .then((response) => {
                return response.json() as Promise<PostsResponse>;
            })
            .then((data) => {
                setPosts(data.Posts);
            });
    }, [])

    return <>
        <Header/>
        <Layout>
            <div className="wrapper">
                <div className="AboutMaster">
                    <h1 className="title">О мастере</h1>
                    <div className="AboutMaster__container row">
                        <div className="col-sm-12 col-md-6 ">
                            <img src={master} alt="" className="AboutMaster__photo"/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="AboutMaster__text d-block">Привет, Я занимаюсь пирсингом и татуировками в
                                Челябинске, а
                                это блог, посвящен моему хобби и творчеству. Здесь Вы можете увидеть мои новые работы
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GallerysArt">
                    <h1 className="title">Галлереи моего творчества</h1>
                    <div className="row">
                        <div className="GallerysArt__item col-lg-3 col-md-6 col-sm-12 col-12 my-2" onClick={routeSketch}>
                            <div className="GallerysArt__alt d-block ">Эскизы</div>
                        </div>
                        <div className="GallerysArt__item col-lg-3 col-md-6 col-sm-12 col-12 my-2" onClick={routeTatoo}>
                            <div className="GallerysArt__alt d-block ">Тату</div>
                        </div>
                        <div className="GallerysArt__item col-lg-3 col-md-6 col-sm-12 col-12 my-2" onClick={routePiercing}>
                            <div className="GallerysArt__alt d-block ">Пирсинг</div>
                        </div>
                        <div className="GallerysArt__item col-lg-3 col-md-6 col-sm-12 col-12 my-2" onClick={routeNews}>
                            <div className="GallerysArt__alt d-block ">Блог</div>
                        </div>
                    </div>
                </div>
                <div className="Article">
                    <h1 className="title">Новости</h1>
                    <div className="row">
                        {posts.map((post, index) => {
                            return <Vkpost key={index} target={"vkpostid" + post.id} name={post.name}/>
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    </>
}