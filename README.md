# leaflet-challenge

# Earthquake Mapping Project

This project uses Leaflet, D3.js, and GeoJSON data from the USGS (United States Geological Survey) to create a map that plots recent earthquakes based on their latitude, longitude, magnitude, and depth. The data markers on the map reflect the magnitude of the earthquake by their size and the depth of the earthquake by color.

## Features

- The map is centered at latitude 37.09 and longitude -95.71 with a zoom level of 5.

- Earthquake markers are plotted on the map using circle markers. The size of each circle corresponds to the magnitude of the earthquake.

- The color of each circle reflects the depth of the earthquake based on the legend on the bottom-right corner of the map.

## Customization

If you want to modify the appearance or behavior of the map, you can do the following:

- Change the tile layer to use a different map style by updating the `basemap` variable in `logic.js`.

- Adjust the marker size or color scheme by modifying the `markerSize()` and `getColor()` functions in `logic.js`.

- Customize the legend by editing the `legend.onAdd` function in `logic.js`.

- Feel free to explore the Leaflet documentation (https://leafletjs.com/) and D3.js documentation (https://d3js.org/) for more options and features.

## Resources

- Leaflet: https://leafletjs.com/
- D3.js: https://d3js.org/
- USGS Earthquake API: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php


