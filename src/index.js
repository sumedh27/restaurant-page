import "./styles.css";
import {homepageContent} from "./pages/homepage.js"
import {menuContent} from "./pages/menupage.js"
import {contactPage} from "./pages/contactpage.js"

const headerButton = document.querySelectorAll(".header-button");

homepageContent();

function clearContent() {
    content.innerHTML = ''
}

headerButton.forEach(button => {
    button.addEventListener(`click`, () => {
        if(button.id === "home-btn"){
            clearContent();
            homepageContent();
        }else if(button.id === "menu-btn"){
            clearContent();
            menuContent();
        }else if(button.id === "about-btn"){
            clearContent();
            contactPage();
        }
    });
});




