import homePage from "../images/homepage.png";

const content = document.querySelector(`#content`);

export function homepageContent(){
    
    const mainContainer = document.createElement(`div`);
    mainContainer.className = "main-container";
    content.appendChild(mainContainer);

    const restaurantName = document.createElement(`h1`);
    restaurantName.className = `content-container`;
    restaurantName.innerHTML = `<span style="font-size: 3rem">THE LULW KITCHEN</span>`;
    mainContainer.appendChild(restaurantName);
    
    const kitchenImage = document.createElement(`img`)
    kitchenImage.src = homePage;
    kitchenImage.className = "hpg-img";
    mainContainer.appendChild(kitchenImage);

    const aboutContent = document.createElement(`div`)
    aboutContent.className = `content-container`;
    const para = document.createElement(`p`);
    para.textContent = "The LULW Kitchen serves the best Indian food in the city, we use freshly cut and home-grown vegetables and dairy products from trusted sources.LULW kitchens believe in customer satisfaction first"
    mainContainer.appendChild(aboutContent);
    aboutContent.appendChild(para);
    const authorName = document.createElement(`h2`);
    authorName.textContent = `-BANDA DON`;
    authorName.className = "about-author";
    aboutContent.append(authorName);

    const timingsContent = document.createElement(`div`);
    timingsContent.className = "content-container";
    timingsContent.innerHTML = `
                        <h2>Hours</h2>
                <p>Sunday: 10am - 3pm & 6pm - 12am</p>
                <p>Monday: 12pm - 3pm & 7pm - 11pm</p>
                <p>Tuesday: 12pm - 3pm & 7pm - 11pm</p>
                <p>Wednesday: 12pm - 3pm & 7pm - 11pm</p>
                <p>Thursday: 12pm - 3pm & 7pm - 11pm</p>
                <p>Friday: 12pm - 3pm & 7pm - 11pm</p>
                <p>Saturday: 10am - 3pm & 6pm - 12am</p>
    `;
    mainContainer.appendChild(timingsContent);

    const addressContent = document.createElement(`div`);
    addressContent.className = "content-container";
    addressContent.innerHTML = `
                    <h2>Location</h2>
                <p>1348 C/8, Govind Puri, Kalkaji, Delhi</p>
    `;
    mainContainer.appendChild(addressContent);

    
}


