const inicio = document.getElementById("inicio-navbar")
const nosotras = document.getElementById("nosotras-navbar")
const info = document.getElementById("info-navbar")
const contacto = document.getElementById("contacto-navbar")

const inicioSection = document.getElementById("inicio")
const nosotrasSection = document.getElementById("nosotras")
const infoSection = document.getElementById("info")
const contactoSection = document.getElementById("contacto")

inicio.addEventListener("click", () => {
    inicioSection.classList.remove("dnone")
    nosotrasSection.classList.add("dnone")
    infoSection.classList.add("dnone")
    contactoSection.classList.add("dnone")
})

nosotras.addEventListener("click", () => {
    inicioSection.classList.add("dnone")
    nosotrasSection.classList.remove("dnone")
    infoSection.classList.add("dnone")
    contactoSection.classList.add("dnone")
})

info.addEventListener("click", () => {
    inicioSection.classList.add("dnone")
    nosotrasSection.classList.add("dnone")
    infoSection.classList.remove("dnone")
    contactoSection.classList.add("dnone")
})

contacto.addEventListener("click", () => {
    inicioSection.classList.add("dnone")
    nosotrasSection.classList.add("dnone")
    infoSection.classList.add("dnone")
    contactoSection.classList.remove("dnone")
})