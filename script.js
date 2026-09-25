const content = document.querySelector('.content');
const registerBtn = document.querySelector('.registerBtn');
const loginBtn = document.querySelector('.loginBtn');
const show = document.querySelector('.show');
const closeBtn = document.querySelector('.closeBtn');

registerBtn.addEventListener('click', ()=> {
    content.classList.add('active');
})
loginBtn.addEventListener('click', ()=> {
    content.classList.remove('active');
})
show.addEventListener('click', ()=> {
    content.classList.remove('hide');
    show.classList.add('hide');
})
closeBtn.addEventListener('click', ()=> {
    content.classList.add('hide');
    show.classList.remove('hide');
})