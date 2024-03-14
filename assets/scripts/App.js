import { _e, chunkArray } from "./modules/Helpers.js"
import FetchProjects from "./modules/FetchProjects.js"
import Templates from "./modules/Templates.js"
import Masonry from "./modules/Masonry.js";
import featured from "./featured.dataset.js";

const App = async (projects) => {
    Masonry(projects, Templates.project, "#projects");
};


document.body.onload = () => {
    // FetchProjects()
    //     .then(projects => {
    //         App(projects)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         return _e("#projects").style.opacity = 1
    //     })


    Masonry(featured, Templates.featured, "#featured");

    _e("body").style.opacity = 1;
}