
let object = { "num1": 78, "num2": 19, "num3": 21, "num4": 28, "num5": 39, "num6": 79 };
var sum = 0;
for (var i in object) {
    sum=sum+object[i]
};
console.log("total of sum----------------->>", sum);

var number = { "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10 };
var sum = 0;
for (var i in number) {
    sum=sum+number[i]
};
console.log("total of sum--------------->>", sum);