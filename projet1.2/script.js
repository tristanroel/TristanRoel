
const nav = document.querySelector('#nav');

let navTop = nav.offsetTop;

function fixedNav() {
    if (window.scrollY >= navTop){
        nav.classList.add('fixed');
        console.log(offsetTop);
    } else {
        nav.classList.remove('fixed');
        console.log(offsetTop);
    }
}

window.addEventListener('scroll', fixedNav);

// window.scroll({
//     top:2500,
//     left:0,
//     behavior:'smooth'
// })

