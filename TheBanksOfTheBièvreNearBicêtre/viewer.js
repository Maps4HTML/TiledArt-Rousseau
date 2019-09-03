const map = (() => {
  const pictureLayer = new ol.layer.Tile({
    source: new ol.source.TileJSON({
      url: 'https://earthmarks.github.io/TiledArt-Rousseau/TheBanksOfTheBièvreNearBicêtre/tiles.json',
    })
  });

  const view = new ol.View({
    center: [1855,1555],
    zoom: 0,
    maxZoom: 4,
    minZoom: 0,
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
