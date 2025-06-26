    function toggleNav() {
      var nav = document.getElementById("myTopnav");
      if (nav.className === "topnav") {
        nav.className += " responsive";
      } else {
        nav.className = "topnav";
      }
    }

const text = "Mistic Dragons";
const typedText = document.getElementById('normal');
let index = 0;
function type(){
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150)
    }
}
type();