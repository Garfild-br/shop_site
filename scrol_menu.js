window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop,
    let sroling111 = document.querySelector('.menu'),
    sroling.style.background = scrolled==0?'red':'blue';
}