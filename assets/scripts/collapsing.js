function navbarCollapse() {
    var elem = document.getElementById('toggleNavbar')
    if (elem.classList.contains('show')){
        elem.classList.remove('show')
    } else {
        elem.classList.add('show')
    }
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 500);
});

