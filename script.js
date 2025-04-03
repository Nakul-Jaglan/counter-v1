let count = document.querySelector('#count');

let sub = document.querySelector('.decrease');

let add = document.querySelector('.increase');

let reset = document.querySelector('.reset');

let counter = 0;

sub.addEventListener('click',()=>{
    counter--;
    count.innerHTML = counter;
});

add.addEventListener('click',()=>{
    counter++;
    count.innerHTML = counter;
});

reset.addEventListener('click',()=>{
    counter = 0;
    count.innerHTML = counter;
});

