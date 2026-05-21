function copySnippet(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = '✓ done';
        btn.classList.add('done');
        setTimeout(() => {
            btn.textContent = orig;
            btn.classList.remove('done');
        }, 2200);
    });
}

const btn = document.querySelectorAll('.burger')
const menuMobile = document.querySelector('.mobile-menu')
let isOpen = false

function toggleMenu(){
    isOpen = !isOpen
    
    if(isOpen){
        menuMobile.style.display = 'block'
    } else {
        menuMobile.style.display = 'none'
    }
}

btn.forEach(button =>{
    button.addEventListener('click', toggleMenu)
})

