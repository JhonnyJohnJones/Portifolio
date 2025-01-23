hamb = false;

function hamburgerSet() {
    hambEle = document.getElementsByClassName("hamburger")[0]
    hambEle.addEventListener("click", hamburger)    
}

function hamburger() {
    ham1 = document.getElementById("ham1")
    ham2 = document.getElementById("ham2")
    ham3 = document.getElementById("ham3")
    nav = document.querySelector("nav")
    if (!hamb) {
        ham1.style.transform = "rotate(45deg)"
        ham1.style.translate = "0 8px"
        ham2.style.display = "none"
        ham3.style.transform = "rotate(135deg)"
        ham3.style.translate = "0 -8px"
        nav.style.visibility = "visible"
    } else {
        ham1.style.transform = "rotate(0deg)"
        ham1.style.translate = "0"
        ham2.style.display = "block"
        ham3.style.transform = "rotate(0deg)"
        ham3.style.translate = "0"
        nav.style.visibility = "hidden"
    }
    hamb = !hamb
}


document.addEventListener("DOMContentLoaded", hamburgerSet)