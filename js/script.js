{
    const welcome = () => { console.log("Hello World"); }


    const toggleTheme = () => {
        const container = document.querySelector(".container");
        const themeName = document.querySelector(".js-themeName");

        container.classList.toggle("container--darkTheme");
        themeName.innerText = container.classList.contains("container--darkTheme") ? "light" : "dark";
    };


    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleTheme);
    };
    welcome();
    init();
}

// coś jest źle w funkcji poniżej
// ani nie działa rozwijanie tekstu
// ani zamykanie w funkcje nie jest dobrze zrobione
{
    const toggleSubjects = () => {
        const showHide = document.querySelector(".js-showHide");
        const removedunorderedList = document.querySelector(".unorderedList--removed");

        removedunorderedList.classList.toggle("unorderedList");
        showHide.innerText = removedunorderedList.classList.contains("unorderedList") ? "Hide" : "Show";
    };

    {const subjects = () => {
        const showHideSubjectsButton = document.querySelector(".js-showHideSubjectsButton");
    showHideSubjectsButton.addEventListener("click", toggleSubjects);
    };
    subjects();

}
