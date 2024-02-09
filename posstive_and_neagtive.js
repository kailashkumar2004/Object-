var number = { "a": 11, "b": -18, "c": 31, "d": -78, "e": 90, "f": -75, "g": 86, "h": 10, "i": -99 };
for (var i in number) {
    if (number[i] > 0) {
        console.log(number[i],"posstive")
    }
    else {
        console.log(number[i],"neagtive")
    };
};


let object = { "num1": -78, "num2": 19, "num3": 21, "num4": 28, "num5": -39, "num6": 79 };
for (var i in object) {
    if (object[i] > 0) {
        console.log(object[i],"posstive")
    }
    else {
        console.log(object[i],"neagtive")
    };
};