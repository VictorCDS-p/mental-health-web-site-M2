let $btnMenu = document.getElementById("btnMenu");
let $menu = document.getElementById("menuMobile");
let $overlay = document.getElementById("overlayMenu")
$btnMenu.addEventListener("click", ()=>{
    $menu.classList.add("abrirMenu")
})

$menu.addEventListener("click", ()=>{
    $menu.classList.remove("abrirMenu")
})

$overlay.addEventListener("click", ()=>{
    $menu.classList.remove("abrirMenu")
})

