$(document).ready(function(){
    

// carousel interval;
    $('.carousel').carousel({
        interval: 7000
      })
      
      $(window).scroll( function() {
        document.getElementById('animate1').classList.add('filed1');
        document.getElementById('animate2').classList.add('filed2');    
        document.getElementById('animate3').classList.add('filed3');    
        document.getElementById('animate4').classList.add('filed4');        
      });


//form filling;
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

//animations;
      window.sr = ScrollReveal({ reset: true });

      sr.reveal('.foo-1', {
          origin: 'bottom',
          mobile: true, 
          duration: 2000
      })

      sr.reveal('.foo-2', { 
        origin: 'right',
        mobile: true, 
        duration: 2000 
      });

      sr.reveal('.foo-3', { 
        rotate: { x: 100, y: 100, z: 0 },
        mobile: true, 
        duration: 1000
      });

    sr.reveal('.foo-4', {
        duration: 2000,
        mobile: true, 
        origin: 'bottom'
    });

    sr.reveal('.foo-5', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        mobile: true, 
        viewFactor: 0.2
    });
    

    });//end of ready;


//smooth scrolling;
