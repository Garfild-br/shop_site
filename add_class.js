let scrolling = window.scrollY
let hight_scroll = 100

let menu = document.querySelector('.menu')

const add_class_on_scroll = () => 
menu.classList.add('active')

const remove_class_on_scroll = () =>
menu.classList.remove('active')

window.addEventListener("scroll", function(){
    scrolling = window.scrollY
    if (scrolling >= hight_scroll ) {
        add_class_on_scroll()}
    else (remove_class_on_scroll())
})

//////////////////////////////

