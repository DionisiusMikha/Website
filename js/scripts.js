let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountain_front');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.top = value * 0.7 + 'px';
    moon.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.7 + 'px';
    mountains_front.style.top = value * 0 + 'px';
})