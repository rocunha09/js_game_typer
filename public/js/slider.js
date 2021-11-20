$(document).ready(function(){
   slider()
  });

  function slider(){
    $(".slider").slick( {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
  }
          