//GAME
const car = document.getElementById("car");
const lights = document.getElementById("lights");

document.addEventListener("keydown", function(event) {
    jump();
});
function jump() {
     if (car.classList != "jump") {
        car.classList.add("jump")
    }
    setTimeout(function() {
        car.classList.remove("jump")
    }, 300)
}
/*задержка анимации
var el = $('.game img');
$(window).scroll(function(){
    if ( $(this).scrollTop() > el.offset().top - 400 ) {
        el.addClass('lightsMov');
    }
});
*/
let isAlive = setInterval (function(){
    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue("top"));
    let lightsLeft = parseInt(window.getComputedStyle(lights).getPropertyValue("left"));
    
    if (lightsLeft < 83 && lightsLeft > 17 && carTop >= 135) {
        alert("GAME OVER!!")
    }
}, 20)