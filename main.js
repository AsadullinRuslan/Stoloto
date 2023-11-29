// @ts-check
var row = document.querySelector(".row");
var btn = document.querySelector("button");
var selectValue = document.querySelector(".select");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    setNumber();
});
// Функция замены повторяющихся элементов в массиве
// function getRepeatArray(array, min, max) {
//     for (var j = 0; j < array.length; j++) {
//         var current = array[j];
//         for (var k = j + 1; k < array.length; k++) {
//             if (current === array[k]) {
//                 array[j] = Math.floor(min + Math.random() * (max - min + 1));
//             }
//         }
//     }
// }
var win = function (count, min, max) {
    var x = [];
    while (x.length < count) {
        var y = Math.floor(min + Math.random() * (max - min + 1));
        // @ts-ignore
        if (!x.includes(y)) {
            x.push(y);
        }
    }
    return x.join("\t  ·  \t");
};
function setNumber() {
    if (+(selectValue === null || selectValue === void 0 ? void 0 : selectValue.value) == 4) {
        var number = win(4, 1, 20);
        row.innerHTML = "".concat(number);
    }
    else if (+selectValue.value == 5) {
        var number = win(5, 1, 36);
        row.innerHTML = "".concat(number);
    }
    else if (+selectValue.value == 6) {
        var number = win(6, 1, 45);
        row.innerHTML = "".concat(number);
    }
    else if (+selectValue.value == 7) {
        var number = win(7, 1, 49);
        row.innerHTML = "".concat(number);
    }
}
selectValue === null || selectValue === void 0 ? void 0 : selectValue.addEventListener("change", function () {
    setNumber();
});
setNumber();
