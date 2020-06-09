$(document).ready(function(){
  $('#mycarousel').carousel({interval: 2000});
  $('#carouselButton').click(function(){
    if($('#carouselButton').children('span').hasClass('fa-pause')){
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    }
    else if($('#carouselButton').children('span').hasClass('fa-play')){
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }

  });
  $('#openRes').click(function(){
    $('#reserveModal').modal('show');
  });
  $('#closeRes').click(function(){
    $('#reserveModal').modal('hide');
  });
  $('#closeRes1').click(function(){
    $('#reserveModal').modal('hide');
  });

  $('#openLog').click(function(){
    $('#loginModal').modal('show');
  });
  $('#closeLog').click(function(){
    $('#loginModal').modal('hide');
  });
  $('#closeLog1').click(function(){
    $('#loginModal').modal('hide');
  });
});
