//! Typing animation
var i = 0, text;
var text = "Miloš Vavro";
const speed = 7;

function typing() {
    if(i<text.length) {
        document.getElementById("navbar-heading").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 1000 / speed); 
    }
}
typing()

var icon = document.getElementById("button");

function changeMode() {
    document.body.classList.toggle("light-mode");
}
