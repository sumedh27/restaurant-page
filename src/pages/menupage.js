const content = document.querySelector(`#content`);

export function menuContent(){
    const mainContainer = document.createElement(`div`);
    mainContainer.className = "main-container";
    content.appendChild(mainContainer);

    const menuText = document.createElement(`div`);
    menuText.className = "content-container";
    mainContainer.appendChild(menuText);
    const menuInnerText = document.createElement(`h1`);
    menuInnerText.innerHTML = `<span style="font-size: 4rem">MENU</span>`;
    menuText.appendChild(menuInnerText);
    

    const beveragesContent = document.createElement(`div`);
    beveragesContent.className = "content-container";
    mainContainer.appendChild(beveragesContent);
    const beveragesText = document.createElement(`h2`);
    beveragesText.innerHTML = `<span style="font-size: 1.5rem"><h2>Beverages</h2></span>`;
    beveragesContent.appendChild(beveragesText);

    const cokeContent = document.createElement(`div`);
    cokeContent.className = "content-container";
    cokeContent.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Coca-Cola</spam></h2>
        <p style="margin-left: 50px">A glass of 100ml of Coca-Cola is served fresh from the refrigerator</p>
        <h2 style="width: 100%; margin-left: 50px;">Rs. 100</h2>
    `;
    mainContainer.appendChild(cokeContent);

    const pepsiContent = document.createElement(`div`);
    pepsiContent.className = "content-container";
    pepsiContent.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Pepsi</spam></h2>
        <p style="margin-left: 50px">A glass of 100ml of Pepsi is served fresh from the refrigerator</p>
        <h2 style="width: 100%; margin-left: 50px;">Rs. 100</h2>
    `;
    mainContainer.appendChild(pepsiContent);

    const fantaContent = document.createElement(`div`);
    fantaContent.className = "content-container";
    fantaContent.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Fanta</spam></h2>
        <p style="margin-left: 50px">A glass of 100ml of Fanta is served fresh from the refrigerator</p>
        <h2 style="width: 100%; margin-left: 50px;">Rs. 100</h2>
    `;
    mainContainer.appendChild(fantaContent);

    const foodContent = document.createElement(`div`);
    foodContent.className = "content-container";
    mainContainer.appendChild(foodContent);
    const foodText = document.createElement(`h2`);
    foodText.innerHTML = `<span style="font-size: 1.5rem"><h2>Food</h2></span>`;
    foodContent.appendChild(foodText);

    const chickenBiryani = document.createElement(`div`);
    chickenBiryani.className = "content-container";
    chickenBiryani.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Chicken Dum Biryani</spam></h2>
        <p style="margin-left: 50px">Freshly cooked Chicken Dum Biryani made from delhi fine rice,enough to serve 2 people</p>
        <h2 style="width: 100%; margin-left: 50px;">Rs. 400</h2>
    `;
    mainContainer.appendChild(chickenBiryani);

    const butterChicken = document.createElement(`div`);
    butterChicken.className = "content-container";
    butterChicken.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Butter Chicken</spam></h2>
        <p style="margin-left: 50px">Chefs special Butter Chicken to be served for 2 people, made with fresh chicken</p>
        <h2 style="width: 100%; margin-left: 50px;">Rs. 300</h2>
    `;
    mainContainer.appendChild(butterChicken);

    const naanContent = document.createElement(`div`);
    naanContent.className = "content-container";
    naanContent.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Naan(bread)</spam></h2>
        <p style="margin-left: 50px">Freshly made Naan(bread) from home-made dough</p>
        <h2 style="width: 100%; margin-left: 50px;">Rs. 20</h2>
    `;
    mainContainer.appendChild(naanContent);
}
