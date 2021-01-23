const ImageHandler = ()=>{
    let allImages = document.querySelectorAll("img");

    allImages.forEach(image => {
        image.addEventListener("error", e=>{
            e.preventDefault();
            e.currentTarget.src = "./assets/images/sprites/brokenImg.png";
        });
    });
}

export default ImageHandler;