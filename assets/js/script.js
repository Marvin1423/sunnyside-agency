const hamburguer = document.querySelector("#hamburguer-button");
const menu = document.querySelector("#menu-hamburguer");

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
})