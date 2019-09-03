(() => {

  const pictureLayer = new ol.layer.Tile({
    extent: [0.0, -3710.0, 3110.0, 0.0],
    source: new ol.source.TileJSON({
      url: './tiles.json',
    })
  });

  const view = new ol.View({
    center: [0,0],
    zoom: 2,
    maxResolution: 16.000000,
    maxZoom: 4,
    minZoom: 0,
    // projection: "EPSG:3857",
    // displayProjection: new ol.proj.Projection("EPSG:4326")
  });

  const map = new ol.Map({
    view: view,
    layers: [
      pictureLayer
    ],
    target: 'map',
    numZoomLevels: 5
  });

})();
