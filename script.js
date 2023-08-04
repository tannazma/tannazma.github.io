
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    const darkButton = document.getElementById("darkMode");
    darkButton.className = "light-mode";
    darkButton.textContent = "🌛";
    if (element.classList.contains("dark-mode")){
        darkButton.textContent = "☀️";  
    };

}
