$(document).ready(function() {
  $("h2#zorg").click(function() {
    $('h2#zorg').after('<img src="img/zorgs.jpg" alt="A photo of the Zorgs." width="350px">')
    $("img").click(function() {
      $(this).remove();
    });
  });

  $("h2#human").click(function() {
    $('h2#human').after('<img src="img/humans.jpg" alt="A photo of the humans." width="350px">')
  });

  $("h2#atealen").click(function() {
    $('h2#atealen').after('<img src="img/atealens.jpg" alt="A photo of the Atealens." width="350px">')
  });
});
