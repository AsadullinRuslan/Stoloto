// @ts-check
const row:HTMLDivElement = document.querySelector(".row");
const btn:HTMLButtonElement = document.querySelector("button");
const selectValue:HTMLSelectElement = document.querySelector(".select");

btn?.addEventListener("click", (): void => {
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

const win = (count: number, min: number, max: number): string => {
    const x: number[] = [];

    while (x.length < count) {
        const y: number = Math.floor(min + Math.random() * (max - min + 1));
        // @ts-ignore
        if (!x.includes(y)) {
            x.push(y);
        }
    }
    return x.join("\t  ·  \t");
};

function setNumber(): void {
        if (+selectValue?.value == 4) {
            const number = win(4, 1, 20);
            row.innerHTML = `${number}`;
        } else if (+selectValue.value == 5) {
            const number = win(5, 1, 36);
            row.innerHTML = `${number}`;
        } else if (+selectValue.value == 6) {
            const number = win(6, 1, 45);
            row.innerHTML = `${number}`;
        } else if (+selectValue.value == 7) {
            const number = win(7, 1, 49);
            row.innerHTML = `${number}`;
        }
}

selectValue?.addEventListener("change", () => {
    setNumber();
});

setNumber();
