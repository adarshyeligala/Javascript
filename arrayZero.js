function removeZeros() {
    var a = [101, 1020, 10300, 10400, 100005, 10060];
    var output = a.map(function (data, index) {
        return (data.toString().replace(/0/g, ""));
    });
    return output;
}
var out = removeZeros();
console.log(out, "res");
