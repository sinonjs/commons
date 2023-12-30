import copyPrototypeMethods from "./copy-prototype-methods.mjs";

export default {
    array: copyPrototypeMethods(Array.prototype),
    function: copyPrototypeMethods(Function.prototype),
    map: copyPrototypeMethods(Map.prototype),
    object: copyPrototypeMethods(Object.prototype),
    set: copyPrototypeMethods(Set.prototype),
    string: copyPrototypeMethods(String.prototype),
}
