//toogles bootstrap navigation for mobile
$('.dropdown-toggle').dropdown();


//home page See flavours buttom event
$('#flavours').on('click', function(e) {
  window.location='products.html';
});

//on navbar logo click go to Home page
$('#lilyLogo').on('click', function(e) {
  window.location='index.html';
});
