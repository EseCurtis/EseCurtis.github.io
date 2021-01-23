//A simple module I made for handling on page icons

const Iconify = (elementQuery, iconHTML) =>{
    let matchedElements = document.querySelectorAll(elementQuery);
    matchedElements.forEach(matchedElement => {
        matchedElement.innerHTML = iconHTML;
    });
}

export default Iconify;