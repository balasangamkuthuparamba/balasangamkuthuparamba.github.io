
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



  $("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyc4FKpmhdwGEW8fWcXEeZtBmc0485iAE3BRkhT/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Message submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})