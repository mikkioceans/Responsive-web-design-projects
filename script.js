const hamburger = document.querySelector(".hamburger");
const NavList = document.querySelector(".nav-list");


hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   NavList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    NavList.classList.remove("active");
}))

