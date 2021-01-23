import App from "./modules/App.js"
import AppData from "./modules/AppData.js"
import Iconify from "./modules/Iconify.js"
import Nav from "./modules/Nav.js"
import User from "./modules/User.js"

let onPageHTMLModules = {
    Nav: Nav,
    User: User,
}

const newApp = new App("#app-root", AppData, onPageHTMLModules);
newApp.run();


AppData.iconify.forEach(iconData=>{
    Iconify(`.ig-icon-${iconData}`, AppData.instagramIcons[iconData]);
});

