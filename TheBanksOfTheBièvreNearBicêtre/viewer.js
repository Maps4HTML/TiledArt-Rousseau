const map = (() => {

  const pictureLayer = new ol.layer.Tile({
    // extent: ol.proj.transformExtent([3110, -3710.0, 3110.0, 3710.0], 'EPSG:4326', 'EPSG:3857'),
    source: new ol.source.TileJSON({
      url: './tiles.json',
    })
  });

  const view = new ol.View({
    center: [1855,1555],
    zoom: 2,
    // maxResolution: 16.000000,
    // maxZoom: 4,
    // minZoom: 0,
    // projection: "EPSG:3857",
    // displayProjection: new ol.proj.Projection("EPSG:4326")
  });

  const map = new ol.Map({
    view: view,
    layers: [
      pictureLayer
    ],
    target: 'map',
  });

  return map;
})();
