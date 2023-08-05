  
// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer.
  let basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

basemap.addTo (myMap);
  // Load the GeoJSON data.
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Define a markerSize() function that will give each city a different radius based on its earthquake.
  function markerSize(magnitude) {
    return Math.sqrt(magnitude) * 5;
  }
function getColor(depth) {
    switch(true) {
        case depth >90 :
        return "#FF0000"
        case depth >70 :
        return "#ffa07a"
        case depth >50 :
        return "#FFA500"
        case depth >30 :
        return "#FFFF00"
        default : return "#00FF00"
   }
}


function mapStyle(feature, latlng) {
    return L.circleMarker(latlng, {
        color: "black",
        fillOpacity: 0.75,
        weight: 1,
        opacity: 1,
        fillColor: getColor(feature.geometry.coordinates[2]),
        radius: markerSize(feature.properties.mag)
    });
}

// Get the data with d3.
d3.json(url).then(function (data) {
    L.geoJson(data, {
        pointToLayer: mapStyle,
        onEachFeature: function (feature, layer) {
        layer.bindPopup(
                `<h1>Magnitude: ${feature.properties.mag}</h1> <hr> <h3>Place: ${feature.properties.place}</h3>`
            );
        }
    }).addTo(myMap);


 // Custom legend control
let legend = L.control({position: 'bottomright'});

legend.onAdd = function () {

    let div = L.DomUtil.create('div', 'info legend');
    let grades = [-10, 10, 30, 50 ,70,90];
    let colors = [ 
        "#98ee00", 
        "#d4ee00",
        "#eecc00",
        "#ee9c00",
        "#ea822c",
        "#ea2c2c"];

    // let limits = geojson.options.limits;
    // let colors = geojson.options.colors;
    labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
}

return div;
};

legend.addTo(myMap);
});











