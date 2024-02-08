const header = document.querySelector('section')

console.log(header);

const btn = document.querySelector('.btn')

console.log(btn);

btn.addEventListener('click', () => {
btn.classList.toggle('red')
})


const burger = document.querySelector('.burger')
const menu = document.querySelector('.box__link')

burger.addEventListener('click', () => {
    menu.classList.toggle('open')
})