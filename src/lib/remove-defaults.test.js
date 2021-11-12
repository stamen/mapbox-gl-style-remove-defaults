import removeDefaults from './remove-defaults';

test('empty stays empty', () => {
  expect(removeDefaults({})).toStrictEqual({});
});

test('default background color is removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "sources": {},
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": {"background-color": "#000000"}
      }
    ]
  };
    
  expect(removeDefaults(input).layers[0].paint['background-color']).toBeUndefined();
});

test('non-default background color is not removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "sources": {},
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": {"background-color": "#123456"}
      }
    ]
  };

  const output = removeDefaults(input);

  expect(output.layers[0].paint['background-color'])
    .toBe(input.layers[0].paint['background-color']);
});

test('non-default layout properties are not removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "sources": {},
    "layers": [
      {
        "id": "layer",
        "type": "line",
        "source": "source",
        "source-layer": "sourceLayer",
        "layout": {"line-cap": "round"},
        "paint": {
          "line-color": "#a0c8f0",
          "line-width": {"base": 1.3, "stops": [[13, 0.5], [20, 6]]}
        }
      },
    ]
  };

  const output = removeDefaults(input);

  expect(output.layers[0].layout['line-cap'])
    .toBe(input.layers[0].layout['line-cap']);
});

test('default layout properties are removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "sources": {},
    "layers": [
      {
        "id": "layer",
        "type": "line",
        "source": "source",
        "source-layer": "sourceLayer",
        "layout": {"line-cap": "butt"},
        "paint": {
          "line-color": "#a0c8f0",
          "line-width": {"base": 1.3, "stops": [[13, 0.5], [20, 6]]}
        }
      },
    ]
  };

  const output = removeDefaults(input);

  expect(output.layers[0].layout['line-cap']).toBeUndefined();
});

test('non-default source properties are not removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "sources": {
      "sourceA": {
        "maxzoom": 6,
        "tileSize": 256,
        "tiles": [ "https://example.com/{z}/{x}/{y}.png" ],
        "type": "raster"
      }
    },
    "layers": []
  };

  const output = removeDefaults(input);

  expect(output.sources.sourceA.maxzoom)
    .toBe(input.sources.sourceA.maxzoom);
});

test('default layout properties are removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "sources": {
      "sourceA": {
        "maxzoom": 6,
        "scheme": "xyz",
        "tileSize": 256,
        "tiles": [ "https://example.com/{z}/{x}/{y}.png" ],
        "type": "raster"
      }
    },
    "layers": []
  };

  const output = removeDefaults(input);

  expect(output.sources.sourceA.scheme).toBeUndefined();
});

test('non-default root properties are not removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "sources": {},
    "layers": []
  };

  const output = removeDefaults(input);

  expect(output.name)
    .toBe(input.name);
});

test('default root properties are removed', () => {
  const input ={
    "version": 8,
    "name": "Test style",
    "bearing": 0,
    "sources": {},
    "layers": []
  };

  const output = removeDefaults(input);

  expect(output.bearing).toBeUndefined();
});
