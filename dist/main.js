var $cMI0G$mapboxmapboxglstylespec = require("@mapbox/mapbox-gl-style-spec");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "removeDefaults", () => $258b90784fcffdd4$export$2e2bcd8739ae039);

function $258b90784fcffdd4$var$_slicedToArray(arr, i) {
    return $258b90784fcffdd4$var$_arrayWithHoles(arr) || $258b90784fcffdd4$var$_iterableToArrayLimit(arr, i) || $258b90784fcffdd4$var$_unsupportedIterableToArray(arr, i) || $258b90784fcffdd4$var$_nonIterableRest();
}
function $258b90784fcffdd4$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $258b90784fcffdd4$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $258b90784fcffdd4$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $258b90784fcffdd4$var$_arrayLikeToArray(o, minLen);
}
function $258b90784fcffdd4$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $258b90784fcffdd4$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $258b90784fcffdd4$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var $258b90784fcffdd4$var$removeObjectDefaults = function removeObjectDefaults(input, objectReference) {
    return Object.fromEntries(Object.entries(input).filter(function(_ref) {
        var _ref2 = $258b90784fcffdd4$var$_slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        if (!objectReference.hasOwnProperty(key)) return true;
        return value !== objectReference[key]["default"];
    }));
};
var $258b90784fcffdd4$var$removeLayerDefaults = function removeLayerDefaults(layer) {
    var newLayer = $258b90784fcffdd4$var$removeObjectDefaults(layer, $cMI0G$mapboxmapboxglstylespec.latest['layer']);
    if (layer.layout) newLayer.layout = $258b90784fcffdd4$var$removeObjectDefaults(layer.layout, $cMI0G$mapboxmapboxglstylespec.latest["layout_".concat(layer.type)]);
    if (layer.paint) newLayer.paint = $258b90784fcffdd4$var$removeObjectDefaults(layer.paint, $cMI0G$mapboxmapboxglstylespec.latest["paint_".concat(layer.type)]);
    return newLayer;
};
var $258b90784fcffdd4$var$removeRootDefaults = function removeRootDefaults(source) {
    return $258b90784fcffdd4$var$removeObjectDefaults(source, $cMI0G$mapboxmapboxglstylespec.latest['$root']);
};
var $258b90784fcffdd4$var$removeSourceDefaults = function removeSourceDefaults(source) {
    return $258b90784fcffdd4$var$removeObjectDefaults(source, $cMI0G$mapboxmapboxglstylespec.latest["source_".concat(source.type)]);
};
var $258b90784fcffdd4$export$2e2bcd8739ae039 = function(style) {
    var newStyle = $258b90784fcffdd4$var$removeRootDefaults(style);
    if (style.layers) newStyle.layers = style.layers.map($258b90784fcffdd4$var$removeLayerDefaults);
    if (style.sources) newStyle.sources = Object.fromEntries(Object.entries(style.sources).map(function(_ref3) {
        var _ref4 = $258b90784fcffdd4$var$_slicedToArray(_ref3, 2), name = _ref4[0], value = _ref4[1];
        return [
            name,
            $258b90784fcffdd4$var$removeSourceDefaults(value)
        ];
    }));
    return newStyle;
};




//# sourceMappingURL=main.js.map
