/* BRUGER MENU */
/* Set the width of the sidebar to 250px (show it) */
//function openNav() {
//    document.getElementById("mitSidepanel").style.width = "100vw";
//}
//
///* Set the width of the sidebar to 0 (hide it) */
//function closeNav() {
//    document.getElementById("mitSidepanel").style.width = "0";
//}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("header").style.backgroundColor = "#ffffff";
    } else {
        document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
}

function openNav() {
    document.querySelector(".sidepanel").classList.remove("close");
    document.querySelector(".sidepanel").classList.add("open");
}

function closeNav() {
    document.querySelector(".sidepanel").classList.add("close");
}
