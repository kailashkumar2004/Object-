var number = { "a": 11, "b": 18, "c": 31, "d": 78, "e": 90, "f": 75, "g": 86 };
for (var i in number) {
    if (number[i] % 2 == 0) {
        console.log(number[i],"even")
    }
    else {
        console.log(number[i],"odd")
    };
};

let object = { "num1": 78, "num2": 19, "num3": 21, "num4": 28, "num5": 39, "num6": 79 };
for (var i in object) {
    if (object[i] % 2 == 0) {
        console.log(object[i],"even")
    }
    else {
        console.log(object[i],"odd")
    };
};