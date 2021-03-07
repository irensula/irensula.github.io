/*var button = document.querySelector("button");

var isBackgroundApplied = 0;   //false

button.addEventListener("click", function() {
    if(isBackgroundApplied === 0){   //false
        document.querySelector("body").style.background = "blue";
        isBackgroundApplied = 1;   //true
    } else {
        document.querySelector("body").style.background = "white";
        isBackgroundApplied = 0;   //false
    }
});
*/
document.getElementById('button1').addEventListener('click', function() {
  document.getElementById('changecss').classList.add('changecss');
});
document.getElementById('button2').addEventListener('click', function() {
  document.getElementById('changecss').classList.add('css2');
});
document.getElementById('button3').addEventListener('click', function() {
  document.getElementById('changecss').classList.add('css3');
});