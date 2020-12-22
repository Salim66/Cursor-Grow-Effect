//Selector
const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-links li')

//Event Listener
window.addEventListener('mousemove', cursor, false);

//Function
function cursor(e){
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.top = e.pageY + 'px';
}

//Mouse Cursor Animate
navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow');
        mouseCursor.classList.remove('cursor-grow');
        link.classList.remove('hovered-list');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow');
        link.classList.add('hovered-list');
    });
});