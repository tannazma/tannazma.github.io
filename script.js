function toggleTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        const darkButton = document.querySelector(".light-mode-icon");
        darkButton.src = "/public/light-theme.png";
        localStorage.setItem("theme", "dark")
    }
    else {
        const lightButton = document.querySelector(".light-mode-icon");
        lightButton.src = "/public/night-theme.png";
        localStorage.setItem("theme", "light")
    }

}

if (localStorage.getItem("theme") == "dark") {
    toggleTheme()
}

