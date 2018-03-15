$('nav a').on('mouseover', function() { // Skapar en query som angriper alla a i nav.
    $(this).addClass('hover'); // Skapar en klass som jag kan använda i css för att bestämma färg när du har musen över texten i a.
  }),
  $('nav a').on('mouseleave', function() { //tar bort mouseover funktionen med denna funktion.
    $(this).removeClass('hover'); // Tar bort klassen hover.
  });