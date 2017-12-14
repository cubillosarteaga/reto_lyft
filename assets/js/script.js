$(document).ready(function(){
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(700);
   }, 2000);
});
});

$('.btn2').click(function(){
  $('.back').hide();
  $('.second_sec').show();
});

$('#return').click(function(){
  $('.back').show();
  $('.second_sec').hide();
});

$('#return2').click(function(){
  $('.second_sec').show();
  $('.third_sec').hide();
});

$('#return3').click(function(){
  $('.third_sec').show();
  $('.fourth_sec').hide();
});

$('#return4').click(function(){
  $('.fourth_sec').show();
  $('.fifth').hide();
});
/*
$("#boton").click(function(){
  
  alert("Tu codigo LAB es: ");

});*/

$('.btn3').click(function(){
  $('.second_sec').hide();
  $('.third_sec').show();
});
        
$('.btn4').click(function(){
  $('.third_sec').hide();
  $('.fourth_sec').show();
});

$('.btn5').click(function(){
  $('.fourth_sec').hide();
  $('.fifth').show();
});  



    
 
 
