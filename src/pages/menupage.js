const content = document.querySelector(`#content`);

export function menuContent(){
    const mainContainer = document.createElement(`div`);
    mainContainer.className = "main-container";
    content.appendChild(mainContainer);
}
