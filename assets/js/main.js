// Menu mobbile

let header = document.querySelector('#header')

document.addEventListener("scroll", () => {
    //Pegando a rolagem no eixo Y - window.scrollY
    let scrollTop = window.scrollY

    if (scrollTop > 0)
        header.classList.add('rolar');
    else
        header.classList.remove('rolar');
})

// Animação do menu Mobile
let btnMneu = document.querySelector("#btn-menu-mobile")
let openMenu = document.querySelector(".menu-mobile")
let btnIcone = document.querySelector("#btn-menu")
let closeMenu = document.getElementById("close-menu")

let body = document.querySelector("body")

function menu(v) {
    if (v === "open") {
        //Adicionar classe dinâmicamente - o toggle é uma especie de liga desliga
        btnIcone.classList.add('ativo')
        openMenu.classList.add('abrir-menu')
        body.classList.add('no-overflow')
        btnIcone.style.display = "none"
        closeMenu.style.display = "block";

    }else {
        btnIcone.classList.remove('ativo')
        openMenu.classList.remove('abrir-menu')
        body.classList.remove('no-overflow')
        closeMenu.style.display = "none";
          btnIcone.style.display = "block"
    }
}


// btnMneu.addEventListener("click", () => {
//     //Adicionar classe dinâmicamente - o toggle é uma especie de liga desliga
//     btnIcone.classList.toggle('ativo')
//     openMenu.classList.toggle('abrir-menu')
//     body.classList.toggle('no-overflow')
//     closeMenu.classList.toggle('close-menu')

// })

const elementos = document.querySelectorAll(".hidden");

const meuObservador = new IntersectionObserver((entrar) => {
    entrar.forEach((entra) => {
        if (entra.isIntersecting) {
            entra.target.classList.add('show')
        }
    })
})

elementos.forEach((elemento) => meuObservador.observe(elemento))

// Abrir projecto
