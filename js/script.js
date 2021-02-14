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

//DARK MODE
if(!localStorage.theme) localStorage.theme = "light"
    document.body.className = localStorage.theme
    toggleThemeButton.innerText = document.body.classList.contains("dark") ? "Turn ON the Light" : "Turn OFF the Light"

toggleThemeButton.onclick = () => {
    document.body.classList.toggle("dark")
    toggleThemeButton.innerText = document.body.classList.contains("dark") ? "Turn ON the Light" : "Turn OFF the Light";
    localStorage.theme = document.body.className || "light"
}
