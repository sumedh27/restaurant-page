const content = document.querySelector(`#content`);

export function aboutContent(){
    const mainContainer = document.createElement(`div`);
    mainContainer.className = "main-container";
    content.appendChild(mainContainer);
}
