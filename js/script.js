$(document).ready(function(){
	$(".menu-link").click(function(){
		$(".dropdown-menu").slideToggle("slow");
		$(this).toggleClass("open");
	});
});


$(document).ready(function(){
    $('.jcarousel')
        .jcarousel({
            wrap: 'circular'
    });
    $('.jcarousel-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });
});
//buttons in the post about HTML
$(document).ready(function () {
    $('.html-in-sublime-button').click(function (e) {
        $(this).toggleClass('active');
        $('.html-in-sublime-picture').toggle();       
        e.stopPropagation();
    });
     
    $('body').click(function () {
        var link = $('.html-in-sublime-button');
            if (link.hasClass('active')) {
            link.click();
            }
        });
    });

$(document).ready(function () {
    $('.html-in-chrome-button').click(function (e) {
        $(this).toggleClass('active');
        $('.html-in-chrome-picture').toggle();       
        e.stopPropagation();
    });
     
    $('body').click(function () {
        var link = $('.html-in-chrome-button');
            if (link.hasClass('active')) {
            link.click();
            }
        });
    });
//button in the blog
$(document).ready(function () {
    $('.blog-button').click(function (e) {
        $(this).toggleClass('active');
        $('.hidden-post').toggle();       
        e.stopPropagation();
    });
     
    $('body').click(function () {
        var link = $('.blog-button');
            if (link.hasClass('active')) {
            link.click();
            }
        });
    });
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
    
    if (lightsLeft < 85 && lightsLeft > 15 && carTop >= 135) {
        alert("GAME OVER!!")
    }
}, 10)

