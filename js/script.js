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

