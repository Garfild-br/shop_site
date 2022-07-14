const slide_1 = document.querySelector('.slide_1');
const slide_2 = document.querySelector('.slide_2');
const slide_3 = document.querySelector('.slide_3');

const text_1 = document.querySelector('.text_1');
const text_2 = document.querySelector('.text_2');
const text_3 = document.querySelector('.text_3');



slide_1.addEventListener('click', function () {
    slide_1.classList.add('active')
    slide_2.classList.remove('active')
    slide_3.classList.remove('active')

    text_1.classList.add('active_1')
    text_2.classList.remove('active_1')
    text_3.classList.remove('active_1')
}
);
slide_2.addEventListener('click', function () {
    slide_1.classList.remove('active')
    slide_2.classList.add('active')
    slide_3.classList.remove('active')

    text_1.classList.remove('active_1')
    text_2.classList.add('active_1')
    text_3.classList.remove('active_1')
}
);

slide_3.addEventListener('click', function () {
    slide_1.classList.remove('active')
    slide_2.classList.remove('active')
    slide_3.classList.add('active')

    text_1.classList.remove('active_1')
    text_2.classList.remove('active_1')
    text_3.classList.add('active_1')
}
);
//






/*
<div class="slide"
    style="background-image: url('https://images.unsplash.com/photo-1624379287392-8a9d871c6924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');">
    <h3>Lorem4</h3>
</div>
<div class="slide"
    style="background-image: url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80');">
    <h3>Lorem5</h3>
</div>
<div class="slide"
    style="background-image: url('https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');">
    <h3>Lorem6</h3>
</div>
*/