//toogles bootstrap navigation for mobile
$('.dropdown-toggle').dropdown();


//home page See flavours buttom event
$('#flavours').on('click', function(e) {
  window.location='products.html';
});

//product page contact-us buttom event
$('#contact').on('click', function(e) {
  window.location='contact.html';
});


//on navbar logo click go to Home page
$('#lilyLogo').on('click', function(e) {
  window.location='index.html';
});

function initMap() {
  var uluru = {lat: 32.7940, lng: 34.9896};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$('#submitBtn').on('click',function() {
  alert("Thanks for contacting us! We will be in touch asap");
  window.location='index.html';
});
