const navbar = document.getElementById('main-nav');

function openSidebar() {
  navbar.classList.add('show');
}

function closeSidebar() {
  navbar.classList.remove('show');
}


function locoInitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('body'),
        smooth: true
    });
}

locoInitialize();