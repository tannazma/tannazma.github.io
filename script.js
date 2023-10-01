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

// handling timeline scroll
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
    } else {
        // document.querySelector('#social-projects').style.position = 'absolute';
    }
    //for contact
    if (window.scrollY > contactOffsetTop - window.innerHeight) {
        const targetActiveDiv = document.querySelector('a[href="#contact"]').parentElement;
        targetActiveDiv.classList.add('active')
    }
})

const tallSocialProjectsDom = document.getElementById("social");
const wideSocialProjectsDom = document.getElementById("social-projects");
let length = 0;
for (grandChild of wideSocialProjectsDom.children) {
    length += grandChild.offsetWidth
}

wideSocialProjectsDom.style.width = length + 'px'
tallSocialProjectsDom.style.height = length + window.innerHeight - window.innerWidth + 'px'


// handling horizontal scroll for social projects part
window.addEventListener("scroll", (e) => {
    const socialOffsetTop = document.getElementById("social").offsetTop
    const contactOffsetTop = document.getElementById("contact").offsetTop

    e.preventDefault()
    const scrollMoreThanParentContainer =
        window.scrollY - tallSocialProjectsDom.offsetTop;

    console.log(scrollMoreThanParentContainer)

    const min = 0;
    const max = wideSocialProjectsDom.offsetWidth - window.innerWidth;

    console.log(scrollMoreThanParentContainer)
    if (scrollMoreThanParentContainer > max) {
        document.querySelector('#social-projects').style.top = 150 + max - scrollMoreThanParentContainer + 'px'
    } else if (scrollMoreThanParentContainer < 0) {
        document.querySelector('#social-projects').style.top = 150 + -1 * scrollMoreThanParentContainer + 'px'
    } else {
        document.querySelector('#social-projects').style.top = 150 + 'px'

    }


    if (window.scrollY > socialOffsetTop && window.scrollY < contactOffsetTop) {
        document.querySelector('#social-projects').style.position = 'fixed';

    } else {
        document.querySelector('#social-projects').style.bottom = '0';

    }



    wideSocialProjectsDom.style.transform = `translate(-${clamp(
        scrollMoreThanParentContainer,
        min,
        max
    )}px)`;
});

function clamp(n, min, max) {
    if (n > min && n < max) return n;
    if (n < min) return min;
    if (n > max) return max;
}
