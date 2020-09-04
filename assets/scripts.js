$(document).ready(function(){

  $(".print-link").click(function(){
    $("#about, #about-description, .web, .full").fadeOut('1600');
    $('.print').fadeIn('2400');
  });

  $(".web-link").click(function(){
    $("#about, #about-description, .print, .full").fadeOut('1600');
    $('.web').fadeIn('2400');
  });



  $("#about").click(function(){
    if ($("#about-description").css('display') == 'none') {
      $("#about-description").fadeIn('1600');
      $('#about').removeClass('fx');
    }
    else{
      $("#about-description").fadeOut('1600');
      $('#about').addClass('fx');
    }
  });



  $("#chimera").click(function(){
    $("#about, #about-description, .web, .print").stop(true).fadeOut('1600');
    setTimeout(function(){
      $(".chimera.full").css('display', 'block');},800);
    });


  $("#israel").click(function(){
    $("#about, #about-description, .web, .print").fadeOut('1600');
    setTimeout(function(){
      $(".israel.full").css('display', 'block');},800);
  });




  $("#poetry").click(function(){
    $("#about, #about-description, .web, .print").fadeOut('1600');
    setTimeout(function(){
      $(".poetry.full").css('display', 'block');},800);
  });



  $("#white-noise").click(function(){
    $("#about, #about-description, .web, .print").fadeOut('1600');
    setTimeout(function(){
      $(".white-noise.full").css('display', 'block');},800);
  });


});
