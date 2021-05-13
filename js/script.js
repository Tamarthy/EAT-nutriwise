console.log("Hello World");
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let container = document.querySelector(".container");
let themeName = document.querySelector(".js-themeName");
changeBackgroundButton.addEventListener("click", () => {
    container.classList.toggle("container--darkTheme");
    themeName.innerText = container.classList.contains("container--darkTheme") ? "light" : "dark";
});
let showHideSubjectsButton = document.querySelector(".js-showHideSubjectsButton");
let showHide = document.querySelector(".js-showHide");
let removedunorderedList = document.querySelector(".unorderedList--removed");
showHideSubjectsButton.addEventListener("click", () => {
    removedunorderedList.classList.toggle("unorderedList");
    showHide.innerText = removedunorderedList.classList.contains("unorderedList") ? "Hide" : "Show";
});