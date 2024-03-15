const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')


const menu = document.querySelector('.menu')
const photo = document.querySelector('.photo')


btn1.addEventListener('click', () => {
    menu.classList.add('open')
})

btn2.addEventListener('click', () => {
    menu.classList.remove('open')
})

btn3.addEventListener('click', () => {
    photo.classList.add('openphoto')
})

btn4.addEventListener('click', () => {
    photo.classList.remove('openphoto')
})
