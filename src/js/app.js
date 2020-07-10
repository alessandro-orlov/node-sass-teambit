$(document).ready(function(){
  $('.small-device-menu').click(function(){
    $('.bars').toggleClass('hidden');
    $('.mobile-menu').slideToggle('active');
    $('.close').toggleClass('hidden');
  });
}); // end document ready
