var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, "Adarsh", "Adarsh", 4, 4, 4, 4, "chandu", "chandu"];
//1st Approach
var uniqueArray = [];
for (var i = 0; i < a.length; i++) {
    if (!uniqueArray.includes(a[i])) {
        uniqueArray.push(a[i]);
    }
}
console.log(uniqueArray);
//2nd Approach
var uArray = a.reduce(function (acc, currentValue) {
    if (!acc.includes(currentValue)) {
        acc.push(currentValue);
    }
    return acc;
}, []);
console.log(uArray);
//3rd approach
var iterableArray = __spreadArray([], new Set(a), true);
console.log(iterableArray);
