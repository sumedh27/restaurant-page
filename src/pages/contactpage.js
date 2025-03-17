const content = document.querySelector(`#content`);

export function contactPage(){
    const mainContainer = document.createElement(`div`);
    mainContainer.className = "main-container";
    content.appendChild(mainContainer);

    const contactChef = document.createElement(`div`);
    contactChef.className = "content-container";
    contactChef.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Chef</spam></h2>
        <p style="margin-left: 50px">The LULW Kitchen's Chef phone contact below</p>
        <h2 style="width: 100%; margin-left: 50px;">+91-64546545641</h2>
    `;
    mainContainer.appendChild(contactChef);

    const contactManager = document.createElement(`div`);
    contactManager.className = "content-container";
    contactManager.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Manager</spam></h2>
        <p style="margin-left: 50px">The LULW Kitchen's Manager phone contact below</p>
        <h2 style="width: 100%; margin-left: 50px;">+91-5698725478</h2>
    `;
    mainContainer.appendChild(contactManager);

    const contactWaiter = document.createElement(`div`);
    contactWaiter.className = "content-container";
    contactWaiter.innerHTML = `
        <h2 style="width: 100%; margin-left: 50px;">Waiter</spam></h2>
        <p style="margin-left: 50px">The LULW Kitchen's Waiter phone contact below</p>
        <h2 style="width: 100%; margin-left: 50px;">+91-9745862159</h2>
    `;
    mainContainer.appendChild(contactWaiter);
}
