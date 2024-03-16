import { _e, chunkArray } from "./modules/Helpers.js"
import FetchProjects from "./modules/FetchProjects.js"
import Templates from "./modules/Templates.js"
import Masonry from "./modules/Masonry.js";
import featured from "./featured.dataset.js";

const App = async (projects) => {
    Masonry(projects, Templates.project, "#projects");
};


document.body.onload = () => {
    const storedProjects = JSON.parse(localStorage?.getItem("projects") || "[]");

    App(storedProjects);

    FetchProjects()
        .then(projects => {
            localStorage.setItem("projects", JSON.stringify(projects));
            App(projects)
        })
        .catch(error => {
            console.error(error)
            return _e("#projects").style.opacity = 1
        })


    Masonry(featured, Templates.featured, "#featured");

    _e("body").style.opacity = 1;
}