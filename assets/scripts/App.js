import { _e, chunkArray } from "./modules/Helpers.js"
import FetchProjects from "./modules/FetchProjects.js"
import Templates from "./modules/Templates.js"
import Masonry from "./modules/Masonry.js";


const App = async (projects) => {
    _e("body").style.opacity = 1;
    Masonry(projects, Templates.project, "#projects");
};


document.body.onload = () => {
    FetchProjects()
        .then(projects => {
            App(projects)
        })
        .catch(error => {
            console.error(error)
            return _e("body").style.opacity = 1
        })
}