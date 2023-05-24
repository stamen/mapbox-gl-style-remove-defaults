import { latest as reference } from '@mapbox/mapbox-gl-style-spec';

const removeObjectDefaults = (input, objectReference) => {
  return Object.fromEntries(
    Object.entries(input).filter(([key, value]) => {
      if (!objectReference.hasOwnProperty(key)) return true;
      return value !== objectReference[key].default;
    })
  );
};

const removeLayerDefaults = layer => {
  const newLayer = removeObjectDefaults(layer, reference['layer']);

  if (layer.layout) {
    newLayer.layout = removeObjectDefaults(
      layer.layout,
      reference[`layout_${layer.type}`]
    );
  }

  if (layer.paint) {
    newLayer.paint = removeObjectDefaults(
      layer.paint,
      reference[`paint_${layer.type}`]
    );
  }

  return newLayer;
};

const removeRootDefaults = source => {
  return removeObjectDefaults(source, reference['$root']);
};

const removeSourceDefaults = source => {
  let sourceType = source.type;
  // Handle raster-dem exception due to its key in the style spec
  if (sourceType === 'raster-dem') {
    sourceType = 'raster_dem';
  }
  return removeObjectDefaults(source, reference[`source_${sourceType}`]);
};

export default style => {
  const newStyle = removeRootDefaults(style);

  if (style.layers) {
    newStyle.layers = style.layers.map(removeLayerDefaults);
  }

  if (style.sources) {
    newStyle.sources = Object.fromEntries(
      Object.entries(style.sources).map(([name, value]) => {
        return [name, removeSourceDefaults(value)];
      })
    );
  }

  return newStyle;
};
