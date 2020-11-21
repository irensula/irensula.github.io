$(document).ready(function(){
	$(".menu-link").click(function(){
		$(".dropdown-menu").slideToggle("slow");
		$(this).toggleClass("open");
	});
});




 $(document).ready(function () {
    $('.size-button').click(function (e) {
        $(this).toggleClass('active');
        $('.table-box').toggle();       
        e.stopPropagation();
    });
     
    $('body').click(function () {
        var link = $('.size-button');
            if (link.hasClass('active')) {
            link.click();
            }
        });
    });
       
           
   
