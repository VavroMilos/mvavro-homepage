var i = 0, text;
var text = "Miloš Vavro...";
const speed = 7;

function typing() {
    if(i<text.length) {
        document.getElementById("loading-name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 1000 / speed); 
    }
    setTimeout(function(){
        if(i === 14) {
            document.getElementById("loading-screen").style.marginLeft = "200%";
        }
    }, 2500);
}
typing()
