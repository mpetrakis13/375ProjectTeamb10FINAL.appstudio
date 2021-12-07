/*
// This finds one result that matches the query
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSQm0wFw0JV8EEPXzqKtv5NIlwQIz9jzQ&query&libraries=places">
// it brings back one result
let map;
let service;
let infowindow;
nfuerioungrt
function initMap() {
  const CU = new google.maps.LatLng(41.2652762,-95.9475144);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: CU,
    zoom: 18,
  });
  const request = {
    query: "grocery stores by Creighton University Omaha NE",
    fields: ["name", "geometry"],
  };
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        console.log(results)
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      //if you want to center the map on first result:
      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}
*/