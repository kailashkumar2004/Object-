var number = { "a": 98, "b": 100, "c": 76, "d": 49, "e": 31, "f": 19, "g": 65 };
var maxNumber = -Infinity;
for (var i in number) {
    if (number[i] > maxNumber) {
        maxNumber=number[i]
    };
};
console.log(maxNumber);

let object = { "num1": 78, "num2": 19, "num3": 99, "num4": 28, "num5": 39, "num6": 79 };
let maxNumber = -Infinity;
for (var i in object) {
    if (object[i] > maxNumber) {
        maxNumber=object[i]
    };
};
console.log(maxNumber);