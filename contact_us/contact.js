let camdenSingapore = [1.3032,103.8239];
let map= L.map('map').setView(camdenSingapore,14);

// setup tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' 
}).addTo(map);

// add market 
let camdenMarker = L.marker([1.3032,103.8239]);
camdenMarker.addTo(map);
camdenMarker.bindPopup(`
<div>
<img src="../images/camden-logo.png" height=110px width=230px>
<hr>
<p class="clinic">#14-02, Heal Therapy Clinic<p>
</div>`);

