$(document).ready(function() { // För att läsa in innehåll

  var url = "http://alexanderolofsson.se/javascript/wp-json/wp/v2/pages/?_embed=true";
  $.ajax({ // ajaxfunktion
    type: "GET", // Jag vill hämta innehåll från url'en jag har angett ovan.
    url: url, //js filen url.
    timeout: 5000, // Timeout används för att ge sidan två sekunder för att ladda in med ajax.
    beforeSend: function() { // Funktionen körs innan förfrågan skickas.
      console.log('before');
    },
    complete: function() { // Funktionen körs när förfrågan är klar.
      console.log('COMPLETE');
    },
    success: function(successData) { //Funktionen körs när förfrågan lyckats.
      console.log(successData);
      getData(successData); //getData-funktionen ligger i success-funktionen, när förfrågan har lyckats körs success-funktionen vilket i sin tur gör att getData-funktionen hämtas.

    },
    error: function() { // Funktionen körs om förfrågan misslyckats.
      console.log('ERROR');
    }
  });

  function getData(data) { // Funktionen körs om funktionen success körs och hämtad då data från WP.
    console.log(data);

    var insertHTML = ''; // Variabel för att skapa HTML-kod. Den är tom eftersom jag bygger på den längre ner när jag hämtar innehållet med en forloop.

    for (var i = 0; i < data.length; i++) { // Den loopar igenom all data som finns i url'en (WP-sidan).
      var title = data[i].title.rendered; // Variabeln hämtar titlarna från WP.
      var content = data[i].content.rendered; // Variabeln hämtar all content från WP.

      if (data[i]._embedded['wp:featuredmedia']) { // if-sats som visar media i featuredmedia som media finns.
        var picture = data[i]._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url; // Variabel för att hämta bilden.
        var pictureCaption = data[i]._embedded['wp:featuredmedia'][0].caption.rendered; // Variabel för att hämta bildinformationen.
        var pictureTitle = data[i]._embedded['wp:featuredmedia'][0].title.rendered; // Variabel för att hämta titel.
      }
      insertHTML += '<div id="content' + data[i].id + '">'; // Möjligör att innehållet från WP syns i index.html, lägger till content till id för att det enbart inte ska innehålla siffror.
      insertHTML += '<h1>' + title + '</h1>'; // Hämtar variabeln title från WP och lägger den i ett h1-element.
      insertHTML += '<img src="'; // Öppnar en imagetag.
      insertHTML += picture; // Hämtar elementet genom variabeln.
      insertHTML += '">'; // Stänger imagetag.
      insertHTML += content; // Hämtar innehåll från WP.
      insertHTML += '</div>'; // Stänger div.

    }
    $('#content').append(insertHTML); // Ovan skapar jag HTML som inte finns i index.html. Append är metoden som gör att jag kan stoppa in elementen på min sida.
  }
});