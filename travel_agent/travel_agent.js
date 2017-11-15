var map = null;

window.onload = init;

function init() {
  var locationButton = document.getElementById("location");
  locationButton.onclick = randomLocation;
}

function randomLocation() {
  var latitude = Math.random() * 85.05115 * 2 - 85.05115;
  var longitude = Math.random() * 360 - 180;
  var latlong = {latitude: latitude, longitude: longitude};
  displayLocation(latlong);
}

function displayLocation(latlong) {
  if (map == null) {
    var newLinkElement = document.createElement("link");
    newLinkElement.setAttribute("rel", "stylesheet");
    newLinkElement.setAttribute("href", "travel_agent.css");
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(newLinkElement);
    showMap(latlong);
  } else {
    showMap(latlong);
  }
}

function showMap(latlong) {

  var googleLatAndLong = new google.maps.LatLng(latlong.latitude, latlong.longitude);
  var mapOptions = {
    zoom: 2,
    center: googleLatAndLong,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);
  addMarker(map, googleLatAndLong);
}

function addMarker(map, latlong) {
  var markerOptions = {
    position: latlong,
    map: map,
    title: "For your next trip, why not go here?",
    clickable: true
  };
  var marker = new google.maps.Marker(markerOptions);

  var content = "Coordinates: " + latlong;
  var infoWindowOptions = {content: content, position: latlong};
  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, "click", function() {
    infoWindow.open(map);
  });
}

// function scrollMapPosition(latlong) {
//   var googleLatAndLong = new google.maps.LatLng(latlong.latitude, latlong.longitude);
//   map.panTo(googleLatAndLong);
//   addMarker(map, googleLatAndLong);
// }
