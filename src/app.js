const navBarClick = document.querySelector('#nav-var-click')
const navList = document.querySelector('#nav-list')
const closeNavList = document.querySelector('#close-nav-list')

navBarClick.addEventListener('click', ()=>{
    navList.classList.remove('-translate-x-full')
    navList.classList.add('translate-x-0')
})
closeNavList.addEventListener('click', ()=>{
    navList.classList.remove('translate-x-0')
    navList.classList.add('-translate-x-full')
})