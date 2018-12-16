$(document).ready(function(){
    
    $('.carousel').carousel({
        interval: 7000
      })
      
      $(window).scroll( function() {
        document.getElementById('animate1').classList.add('filed1');
        document.getElementById('animate2').classList.add('filed2');    
        document.getElementById('animate3').classList.add('filed3');    
        document.getElementById('animate4').classList.add('filed4');        
      });

      $('.myForm').submit(function (eventObject){
          if($('.email').val() == "" ) {
              eventObject.preventDefault();
              alert("Please, fill in the E-mail Adress");
          } 
          else if ($('.fullName').val() == "" ) {
            eventObject.preventDefault();
            alert("Please, enter your name");
        } 
        else if ($('.checkBox').is(':checked') == false) {
            eventObject.preventDefault();
            alert("Please, put a trigger on a box");
        } 
    
          
      });
});


