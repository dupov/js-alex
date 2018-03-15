$(document).ready(function() { //När sidan har laddat och är redo ska funktionen köras.


  $('#post1').on('click', function() { // När du klickar på id post1 körs en funktion.
    $('html, body').animate({ // Det är body som ligger i html som ska animeras.
      scrollTop: $('#content12').offset().top // Animationen ska skrolla till toppen av elementet med id content11 som hämtas från WP.
    })
  })

  $('#post2').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#content10').offset().top
    })
  })

  $('#post3').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#content8').offset().top
    })
  })

});