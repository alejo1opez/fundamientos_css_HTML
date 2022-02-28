var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: 5.076013471199139, lng: -75.50082839439753},
    zoom: 13
  });

  new google.maps.Marker({
    position: {lat: 5.076013471199139, lng: -75.50082839439753},
    map,
    title: "Aqui estamos",
  });
}