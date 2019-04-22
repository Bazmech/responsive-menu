(function () {
    document.getElementsByTagName("burger")[0].addEventListener("click", function () {
        this.classList.toggle("change");
        document.getElementsByTagName("menu")[0].classList.toggle("show-menu");
    })

    document.getElementsByTagName("menu")[0].addEventListener("click", function () {
        document.getElementsByTagName("burger")[0].classList.toggle("change");
        document.getElementsByTagName("menu")[0].classList.toggle("show-menu");
    })

    window.setTimeout(function () {
        document.getElementsByTagName("menu")[0].classList.toggle("initial-hide");
    }, 1000)
})();

