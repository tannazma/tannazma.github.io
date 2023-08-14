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
window.addEventListener("scroll", () => {
    document.querySelector('.active')?.classList.remove('active')

    const journeyOffsetTop = document.getElementById("journey").offsetTop
    const developmentOffsetTop = document.getElementById("development").offsetTop
    const seoOffsetTop = document.getElementById("seo").offsetTop
    const socialOffsetTop = document.getElementById("social").offsetTop

    // for journey
    if (window.scrollY > journeyOffsetTop && window.scrollY < developmentOffsetTop) {
        const targetActiveDiv = document.querySelector('a[href="#journey"]').parentElement;
        targetActiveDiv.classList.add('active')
    }

    // for seo
    if (window.scrollY > developmentOffsetTop && window.scrollY < seoOffsetTop) {
        const targetActiveDiv = document.querySelector('a[href="#development"]').parentElement;
        targetActiveDiv.classList.add('active')
    }
    // for social
    if (window.scrollY > seoOffsetTop && window.scrollY < socialOffsetTop) {
        const targetActiveDiv = document.querySelector('a[href="#development"]').parentElement;
        targetActiveDiv.classList.add('active')
    }

    console.log(window.scrollY, 'j', journeyOffsetTop, 'd', developmentOffsetTop, 's', seoOffsetTop)
})

