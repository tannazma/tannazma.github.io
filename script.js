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
    const contactOffsetTop = document.getElementById("contact").offsetTop



    // for journey
    if (window.scrollY > journeyOffsetTop && window.scrollY < developmentOffsetTop) {
        const targetActiveDiv = document.querySelector('a[href="#journey"]').parentElement;
        targetActiveDiv.classList.add('active')
    }
    //for development
    if (window.scrollY > developmentOffsetTop && window.scrollY < seoOffsetTop) {
        const targetActiveDiv = document.querySelector('a[href="#development"]').parentElement;
        targetActiveDiv.classList.add('active')
    }
    // for seo
    if (window.scrollY > seoOffsetTop && window.scrollY < socialOffsetTop) {
        const targetActiveDiv = document.querySelector('a[href="#seo"]').parentElement;
        targetActiveDiv.classList.add('active')
    }
    // for social
    if (window.scrollY > socialOffsetTop && window.scrollY < contactOffsetTop - window.innerHeight) {
        const targetActiveDiv = document.querySelector('a[href="#social"]').parentElement;
        targetActiveDiv.classList.add('active')
    }
    //for contact
    if (window.scrollY > contactOffsetTop - window.innerHeight) {
        const targetActiveDiv = document.querySelector('a[href="#contact"]').parentElement;
        targetActiveDiv.classList.add('active')
    }
})

const parentContainer = document.getElementById("social");
const child = document.getElementById("social-projects");
let length = 0;
for (grandChild of child.children) {
    length += grandChild.offsetWidth
}

child.style.width = length + 'px'
parentContainer.style.height = length + 'px'


// parentContainer.style.height = `calc(${child.offsetWidth}px - 100vh)`;

window.addEventListener("scroll", (e) => {
    e.preventDefault()
    const scrollMoreThanParentContainer =
        window.scrollY - parentContainer.offsetTop;

    const min = 0;
    const max = child.offsetWidth - window.innerWidth;


    child.style.transform = `translate(-${clamp(
        scrollMoreThanParentContainer,
        min,
        max
    )}px)`;
});

// child.addEventListener("mousewheel", (event) => {
//     // if deltaY is bigger than deltaX, means user is scrolling vertically, not horizontally
//     // Math.abs, becaues values can be negative
//     if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;

//     // preventDefault so browser does not go back
//     event.preventDefault();
//     console.log(window.scrollY + event.deltaX)

//     window.scrollTo(0, window.scrollY + event.deltaX);
// });

function clamp(n, min, max) {
    if (n > min && n < max) return n;
    if (n < min) return min;
    if (n > max) return max;
}