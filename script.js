const toggle = document.getElementById("nav-toggle"),
    navbar = document.getElementById("navbar"),
    bodypadding = document.getElementById("body-pd")
/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navbarId, bodyId) => {

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('toggle', 'navbar', 'bodypadding')


/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function () {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    })
}
function adjustNavbar() {
    if (document.body.clientWidth < 991) {
        navbar.classList.remove('expander');
        console.log(bodypadding.className);
        bodypadding.className=''
    } else {
        navbar.classList.add('expander');
        bodypadding.classList.add('body-pd');
    }
}

// Call adjustNavbar on page load
window.addEventListener('load', adjustNavbar);

// Call adjustNavbar whenever the window is resized
window.addEventListener('resize', adjustNavbar);
