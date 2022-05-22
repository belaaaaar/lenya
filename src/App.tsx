import './App.scss';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Main} from "./page/main/main";
import {News} from './page/news/news';
import {TattooGallery} from "./page/tattooGallery/tattooGallery";
import {PiercingGallery} from "./page/piercingGallery/piercingGallery";
import {SketchGallery} from "./page/sketchGallery/sketchGallery";
import {Contacts} from "./page/contacts/contacts";
import {CreativityGallery} from "./page/creativityGallery/creativityGallery";

function App() {
    return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/tattoo-gallery" element={<TattooGallery/>}/>
                <Route path="/piercing-gallery" element={<PiercingGallery/>}/>
                <Route path="/sketch-gallery" element={<SketchGallery/>}/>
                <Route path="/creativity-gallery" element={<CreativityGallery/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
}

export default App;
