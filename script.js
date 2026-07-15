/* ===========================
   HAMBURGER MENU
=========================== */

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

/* ===========================
   CLOSE MENU WHEN CLICKING OUTSIDE
=========================== */

document.addEventListener("click", function (e) {

    const menu = document.getElementById("navMenu");
    const button = document.querySelector(".menu-btn");

    if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.remove("show");
    }

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior: 'smooth'

        });

    });

});

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   HEADER SHADOW
=========================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

/* ===========================
   TYPING ANIMATION
=========================== */

const words = [

    "Software Developer",

    "Python Developer",

    "AI Enthusiast",

    "Web Developer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1000);

            return;

        }

    }

    else {

        typing.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.padding = "12px 16px";
topButton.style.fontSize = "20px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   FADE-IN ANIMATION
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});