
$(document).ready(function(){ 

   $(window).scroll(function(){
       if ($(this).scrollTop() > 250) {
           $('.scrolltotop').fadeIn();
       } 
       else {
           $('.scrolltotop').fadeOut();
       }
}); 
$('.scrolltotop').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 800);
       return false;
       });
});
