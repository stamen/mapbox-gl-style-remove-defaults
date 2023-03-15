import {latest as $5OpyM$latest} from "@mapbox/mapbox-gl-style-spec";


const $7d6e8c4aede379c0$var$removeObjectDefaults = (input, objectReference)=>{
    return Object.fromEntries(Object.entries(input).filter((_ref)=>{
        let [key, value] = _ref;
        if (!objectReference.hasOwnProperty(key)) return true;
        return value !== objectReference[key].default;
    }));
};
const $7d6e8c4aede379c0$var$removeLayerDefaults = (layer)=>{
    const newLayer = $7d6e8c4aede379c0$var$removeObjectDefaults(layer, (0, $5OpyM$latest)["layer"]);
    if (layer.layout) newLayer.layout = $7d6e8c4aede379c0$var$removeObjectDefaults(layer.layout, (0, $5OpyM$latest)[`layout_${layer.type}`]);
    if (layer.paint) newLayer.paint = $7d6e8c4aede379c0$var$removeObjectDefaults(layer.paint, (0, $5OpyM$latest)[`paint_${layer.type}`]);
    return newLayer;
};
const $7d6e8c4aede379c0$var$removeRootDefaults = (source)=>{
    return $7d6e8c4aede379c0$var$removeObjectDefaults(source, (0, $5OpyM$latest)["$root"]);
};
const $7d6e8c4aede379c0$var$removeSourceDefaults = (source)=>{
    return $7d6e8c4aede379c0$var$removeObjectDefaults(source, (0, $5OpyM$latest)[`source_${source.type}`]);
};
var $7d6e8c4aede379c0$export$2e2bcd8739ae039 = (style)=>{
    const newStyle = $7d6e8c4aede379c0$var$removeRootDefaults(style);
    if (style.layers) newStyle.layers = style.layers.map($7d6e8c4aede379c0$var$removeLayerDefaults);
    if (style.sources) newStyle.sources = Object.fromEntries(Object.entries(style.sources).map((_ref2)=>{
        let [name, value] = _ref2;
        return [
            name,
            $7d6e8c4aede379c0$var$removeSourceDefaults(value)
        ];
    }));
    return newStyle;
};




export {$7d6e8c4aede379c0$export$2e2bcd8739ae039 as removeDefaults};
//# sourceMappingURL=module.js.map
