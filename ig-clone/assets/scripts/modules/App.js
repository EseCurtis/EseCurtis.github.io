import ImageHandler from "./ImageHandler.js"

class App {

    constructor(appRootElement, appData, extraModules, activeGalleryPage = "series"){
        this.appRoot = document.querySelector(appRootElement);
        this.appData = appData;
        this.extraModules = extraModules;
        this.activeGalleryPage = activeGalleryPage;
    }

    compileHTML(){
        this.appHTML = `
            ${this.extraModules.Nav.top}
            <section class="app__user-profile">
                ${this.extraModules.User.meta}
                ${this.extraModules.User.bio}
                ${this.extraModules.User.actions}
                ${this.extraModules.User.highlights(this.appData.highlights)}
            </section>
            <section class="app__user-gallery">
                ${this.extraModules.User.gallery.nav}
                <div id="gallery-content-root">
                    ${this.extraModules.User.gallery.default}
                </div>
            </section>
            ${this.extraModules.User.popup}
            ${this.extraModules.Nav.bottom}
        `;
    }

    setGalleryTogglers(){
        this.galleryTogglers = document.querySelector(".gallery-nav").querySelectorAll(".nav-item");
        this.galleryTogglers.forEach(toggler => {
            toggler.addEventListener("click", e=>{
                let galleryType = e.currentTarget.getAttribute("gallery-type");
                this.loadGalleryPage(galleryType);
            });
        });

        this.checkActiveGalleryToggler();
    }

    checkActiveGalleryToggler(){
        this.galleryTogglers.forEach(toggler => {
            if(toggler.getAttribute("gallery-type")?.includes(this.activeGalleryPage)){
                toggler.classList.add("active");
            }else{
                toggler.classList.remove("active");
            }
        });
    }

    setPopup(){
        this.popup = document.getElementById("app-popup");
    }

    activatePopup(){
        this.popup.style.height = "100%";
    }

    deactivatePopup(){
        this.popup.style.height = "0%";
    }

    setPopupTogglers(){
        let popupTogglers = document.querySelectorAll("#popup-toggler");

        popupTogglers.forEach(toggler=>{
            if(toggler.getAttribute("toggle-action") == "activate"){
                toggler.addEventListener("click", ()=>{
                    this.activatePopup();
                });
            }else if(toggler.getAttribute("toggle-action") == "deactivate"){
                toggler.addEventListener("click", ()=>{
                    this.deactivatePopup();
                });
            }
        });
    }

    loadGalleryPage(galleryType){
        let galleryContent = "";
        this.activeGalleryPage = galleryType;

        switch(galleryType){
            case "main":
                galleryContent = this.extraModules.User.gallery.main(this.appData.gallery);
                break;
            case "series":
                galleryContent = this.extraModules.User.gallery.series(this.appData.gallery);
                break;
            default:
                galleryContent = this.extraModules.User.gallery.default;
        }

        document.getElementById("gallery-content-root").innerHTML = galleryContent;
        this.checkActiveGalleryToggler();
        ImageHandler();
    }

    appendHTML(){
        this.appRoot.innerHTML = this.appHTML;
    }

    run(){
        this.compileHTML();
        this.appendHTML();
        this.setGalleryTogglers();
        this.loadGalleryPage(this.activeGalleryPage);
        this.setPopup();
        this.setPopupTogglers();
        ImageHandler();
    }
}

export default App;
