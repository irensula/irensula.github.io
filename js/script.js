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

