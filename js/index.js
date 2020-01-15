// Your code goes here
const busPic = document.querySelector('.intro img');
busPic.addEventListener('mouseover',  ()=>busPic.src = 'img/mouseoverbus.jpg')

const notSoFunBus = document.querySelector('.logo-heading');
notSoFunBus.addEventListener('click', ()=>notSoFunBus.textContent = 'Not So Fun Bus')

const mapImg = document.querySelectorAll('.img-content img');
mapImg.forEach(m => {m.addEventListener('dblclick', ()=>m.src = 'img/doubleclickmap.jpg')})

const rightClick = document.querySelector('.logo-heading');
rightClick.addEventListener('contextmenu', ()=>rightClick.style.color = 'purple')

const footerP = document.querySelector('.footer p');
footerP.addEventListener('mouseenter', ()=>footerP.style.backgroundColor = 'red')

const leaveHome = document.querySelectorAll('.content-section')
leaveHome.forEach(l => {l.addEventListener('mouseleave', ()=>l.style.backgroundColor = 'green' )})

const bball = document.querySelector('.intro img');
bball.addEventListener('mousedown',  ()=>bball.src = 'img/mousedown.jpg')

const fball = document.querySelector('.intro img');
fball.addEventListener('mouseup',  ()=>fball.src = 'img/mouseup.jpg')

const mapSize = document.querySelector('.img-content img');
window.addEventListener('resize', ()=>mapSize.src = 'img/resizeimg.jpg')

const navBar = document.querySelector('nav');
 window.addEventListener('scroll', () => {
     navBar.style.backgroundColor = 'grey';
    })


const page = document.querySelector('body');
page.addEventListener('mousedown', () => page.style.backgroundColor = 'orange')

const header = document.querySelector('header');
header.addEventListener('mousedown', (event) => {
    header.style.backgroundColor = 'red';
    event.stopPropagation();
})





