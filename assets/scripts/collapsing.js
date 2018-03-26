function navbarCollapse() {
    var elem = document.getElementById('toggleNavbar')
    if (elem.classList.contains('show')){
        elem.classList.remove('show')
    } else {
        elem.classList.add('show')
    }
}

