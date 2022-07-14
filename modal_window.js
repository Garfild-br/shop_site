 let img_click = document.querySelectorAll('.container_2_img');
let modal_window_1 = document.querySelector('.modal_cart_window_1');
let modal_window_2 = document.querySelector('.modal_cart_window_2');
let modal_window_3 = document.querySelector('.modal_cart_window_3');
let modal_window_4 = document.querySelector('.modal_cart_window_4');

let close_modal_1 = document.querySelector('.close_modal_1');
let close_modal_2 = document.querySelector('.close_modal_2');
let close_modal_3 = document.querySelector('.close_modal_3');
let close_modal_4 = document.querySelector('.close_modal_4');

let parents_block = document.querySelector('.container_2_items');



/*-------окно 1------------*/

function showMeWindow_1() {
    modal_window_1.classList.add('active');
    document.body.style.overflow = 'hidden';
};
parents_block.addEventListener('click', function (event) {
    if (event.target.closest('.container_2_img_1_modal')) {
        showMeWindow_1()
    }
});

close_modal_1.addEventListener('click', function() {
    modal_window_1.classList.remove('active');
    document.body.style.overflow = '';
})


/*-------окно 2------------*/

function showMeWindow_2() {
    modal_window_2.classList.add('active');
    document.body.style.overflow = 'hidden';
}
parents_block.addEventListener('click', function (event) {
    if (event.target.closest('.container_2_img_2_modal')) {
        showMeWindow_2()
    }
})

close_modal_2.addEventListener('click', function () {
    modal_window_2.classList.remove('active');
    document.body.style.overflow = '';
})

/*-------окно 3------------*/


function showMeWindow_3() {
    modal_window_3.classList.add('active');
    document.body.style.overflow = 'hidden';
}
parents_block.addEventListener('click', function (event) {
    if (event.target.closest('.container_2_img_3_modal')) {
        showMeWindow_3()
    }
})

close_modal_3.addEventListener('click', function () {
    modal_window_3.classList.remove('active');
    document.body.style.overflow = '';
})

/*-------окно 4------------*/


function showMeWindow_4() {
    modal_window_4.classList.add('active');
    document.body.style.overflow = 'hidden';
}
parents_block.addEventListener('click', function (event) {
    if (event.target.closest('.container_2_img_4_modal')) {
        showMeWindow_4()
    }
})

close_modal_4.addEventListener('click', function () {
    modal_window_4.classList.remove('active');
    document.body.style.overflow = '';
})