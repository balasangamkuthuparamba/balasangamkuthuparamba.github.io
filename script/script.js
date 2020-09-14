
$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 86){
      $("#banner").addClass("shrink");
    }
    else
    {
        $("#banner").removeClass("shrink");
    }
});



  $(document).ready(function() {
  
    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        
        $('#preloader').delay(2000).queue(function() {
          $(this).remove();
        });
      }
    }, 3000);
    
  });