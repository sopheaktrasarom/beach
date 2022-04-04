// select element for menu
const menu_toggle = document.getElementById("menu_icon");
const nav_menu = document.getElementById("nav_menu");
const overlay = document.getElementById("overlay");
const close_menu = document.getElementById("close_icon");

// open menu
menu_toggle.addEventListener("click", () => {
    nav_menu.classList.toggle("active");
    overlay.classList.toggle("show_overlay");
});
// close menu
window.addEventListener("click", (e) => {
    if (e.target !== menu_toggle && e.target !== nav_menu) {
        nav_menu.classList.remove("active");
        overlay.classList.remove("show_overlay");
    }
});
// scroll header
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (this.scrollY >= 100) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
});

// scroll to top
const scrollUp = document.getElementById("btn-scrollup");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 270) {
        scrollUp.classList.add("show_scroll");
    } else {
        scrollUp.classList.remove("show_scroll");
        header.classList.remove("show");
    }
});

scrollUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// play video
const playbtn = document.getElementById("play-btn")
const video = document.getElementById("video-play")
const iconPlay = document.getElementById("play-img")
playbtn.addEventListener("click", () => {
    const icon_src = iconPlay.getAttribute("src")
    if (video.paused && icon_src === "asset/img/play.svg") {
        video.play()
        iconPlay.setAttribute('src', 'asset/img/pause.svg')
    }
    else {
        video.pause()
        iconPlay.setAttribute('src', 'asset/img/play.svg')
    }
})
