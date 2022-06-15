const toggle_button = document.querySelector(".toggle")
const toggle_text = document.querySelector(".toggle-text")
const toggle_icon = document.querySelector(".toggle-icon")
const hero_img = document.querySelector(".hero_img")
let html = document.querySelector("html")

toggle_button.addEventListener("click", ()=> (html.classList.contains("Dark") === true) ? LightMode(html) : DarkMode(html))


function DarkMode(html){
    html.classList.add("Dark")
    html.classList.remove("Light")
    toggle_icon.src ="images/sun.svg"
    toggle_text.textContent="Light Mode"
    hero_img.src="images/hero-img-dark.svg"
}

function LightMode(html){
    html.classList.add("Light")
    html.classList.remove("Dark")
    toggle_icon.src ="images/moon.svg"
    toggle_text.textContent="Dark Mode"
    hero_img.src="images/hero-img-light.svg"
}