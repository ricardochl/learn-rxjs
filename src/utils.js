export const displayLog = (content)=> {
    let element = document.createElement('div');
    element.innerHTML = content;
    const logContainer = document.getElementById("container");
    logContainer.appendChild(element);
}