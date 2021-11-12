import {latest as $lN7Lq$latest} from "@mapbox/mapbox-gl-style-spec";


var $f80b596e60a7aedf$var$removeObjectDefaults = (input, objectReference)=>{
    return Object.fromEntries(Object.entries(input).filter((_ref)=>{
        var [key, value] = _ref;
        if (!objectReference.hasOwnProperty(key)) return true;
        return value !== objectReference[key].default;
    }));
};
var $f80b596e60a7aedf$var$removeLayerDefaults = (layer)=>{
    var newLayer = $f80b596e60a7aedf$var$removeObjectDefaults(layer, $lN7Lq$latest['layer']);
    if (layer.layout) newLayer.layout = $f80b596e60a7aedf$var$removeObjectDefaults(layer.layout, $lN7Lq$latest["layout_".concat(layer.type)]);
    if (layer.paint) newLayer.paint = $f80b596e60a7aedf$var$removeObjectDefaults(layer.paint, $lN7Lq$latest["paint_".concat(layer.type)]);
    return newLayer;
};
var $f80b596e60a7aedf$var$removeRootDefaults = (source)=>{
    return $f80b596e60a7aedf$var$removeObjectDefaults(source, $lN7Lq$latest['$root']);
};
var $f80b596e60a7aedf$var$removeSourceDefaults = (source)=>{
    return $f80b596e60a7aedf$var$removeObjectDefaults(source, $lN7Lq$latest["source_".concat(source.type)]);
};
var $f80b596e60a7aedf$export$2e2bcd8739ae039 = (style)=>{
    var newStyle = $f80b596e60a7aedf$var$removeRootDefaults(style);
    if (style.layers) newStyle.layers = style.layers.map($f80b596e60a7aedf$var$removeLayerDefaults);
    if (style.sources) newStyle.sources = Object.fromEntries(Object.entries(style.sources).map((_ref2)=>{
        var [name, value] = _ref2;
        return [
            name,
            $f80b596e60a7aedf$var$removeSourceDefaults(value)
        ];
    }));
    return newStyle;
};




export {$f80b596e60a7aedf$export$2e2bcd8739ae039 as removeDefaults};
//# sourceMappingURL=module.js.map
