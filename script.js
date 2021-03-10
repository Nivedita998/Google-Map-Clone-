mapboxgl.accessToken =
  "pk.eyJ1IjoiZXhwbG9yZXIxMSIsImEiOiJja20yenY1dzQwZmxlMm9vMHZ0N3FpbmN1In0.M3jDBOqfexjYZD8XJTgB2Q";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  //map
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  //navigation controls
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  //direction
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
