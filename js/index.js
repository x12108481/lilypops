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

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
