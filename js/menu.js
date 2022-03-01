let show = true;


const menuSection = document.querySelector(".mainMenu")
const menuToggle = menuSection.querySelector(".hamBar")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("off", show)
    show = !show;
})