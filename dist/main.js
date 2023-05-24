var $gXNCa$mapboxmapboxglstylespec = require("@mapbox/mapbox-gl-style-spec");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "removeDefaults", () => $5659a747108741f2$export$2e2bcd8739ae039);

const $5659a747108741f2$var$removeObjectDefaults = (input, objectReference)=>{
    return Object.fromEntries(Object.entries(input).filter((_ref)=>{
        let [key, value] = _ref;
        if (!objectReference.hasOwnProperty(key)) return true;
        return value !== objectReference[key].default;
    }));
};
const $5659a747108741f2$var$removeLayerDefaults = (layer)=>{
    const newLayer = $5659a747108741f2$var$removeObjectDefaults(layer, (0, $gXNCa$mapboxmapboxglstylespec.latest)["layer"]);
    if (layer.layout) newLayer.layout = $5659a747108741f2$var$removeObjectDefaults(layer.layout, (0, $gXNCa$mapboxmapboxglstylespec.latest)[`layout_${layer.type}`]);
    if (layer.paint) newLayer.paint = $5659a747108741f2$var$removeObjectDefaults(layer.paint, (0, $gXNCa$mapboxmapboxglstylespec.latest)[`paint_${layer.type}`]);
    return newLayer;
};
const $5659a747108741f2$var$removeRootDefaults = (source)=>{
    return $5659a747108741f2$var$removeObjectDefaults(source, (0, $gXNCa$mapboxmapboxglstylespec.latest)["$root"]);
};
const $5659a747108741f2$var$removeSourceDefaults = (source)=>{
    let sourceType = source.type; // Handle raster-dem exception due to its key in the style spec
    if (sourceType === "raster-dem") sourceType = "raster_dem";
    return $5659a747108741f2$var$removeObjectDefaults(source, (0, $gXNCa$mapboxmapboxglstylespec.latest)[`source_${sourceType}`]);
};
var $5659a747108741f2$export$2e2bcd8739ae039 = (style)=>{
    const newStyle = $5659a747108741f2$var$removeRootDefaults(style);
    if (style.layers) newStyle.layers = style.layers.map($5659a747108741f2$var$removeLayerDefaults);
    if (style.sources) newStyle.sources = Object.fromEntries(Object.entries(style.sources).map((_ref2)=>{
        let [name, value] = _ref2;
        return [
            name,
            $5659a747108741f2$var$removeSourceDefaults(value)
        ];
    }));
    return newStyle;
};




//# sourceMappingURL=main.js.map
