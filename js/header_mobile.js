const headerInner = document.querySelector(".header_inner"),
    menuOpen = headerInner.querySelector(".menuOpen"),
    mobile = headerInner.querySelector(".mobile"),
    menuClose = headerInner.querySelector(".menuClose");

function moblieMenuHandler() {
    const hasClass = this.classList;

    if (hasClass.contains("menuOpen")) {
        mobile.style.right = 0;
    } else if (hasClass.contains("menuClose")) {
        mobile.style.right = "100%";
    }
}

function init() {
    menuOpen.addEventListener("click", moblieMenuHandler);
    menuClose.addEventListener("click", moblieMenuHandler);
}

init();
