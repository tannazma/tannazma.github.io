
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        const darkButton = document.querySelector(".light-mode-icon");
        darkButton.src = "/public/light-theme.png";
    }
    else {
        const lightButton = document.querySelector(".light-mode-icon");
        lightButton.src = "/public/night-theme.png";
    }

}
