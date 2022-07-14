let open_window = document.querySelector('.burger_menu_close');
let modal_window = document.querySelector('.burger_list.menu_wrapper_ul');
let close_window = document.querySelector('.burger_menu_close_2');


open_window.addEventListener('click', function() {
    modal_window.classList.add('active');
})


close_window.addEventListener('click', function() {
    modal_window.classList.remove('active');
})

