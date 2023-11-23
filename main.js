const row = document.querySelector(".row");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    setNumber();
});

// Функция замены повторяющихся элементов в массиве
function getRepeatArray(array, min, max) {
    for (var j = 0; j < array.length; j++) {
        var current = array[j];
        for (var k = j + 1; k < array.length; k++) {
            if (current === array[k]) {
                array[j] = Math.floor(min + Math.random() * (max - min + 1));
            }
        }
    }
}

const win = (min, max) => {
    const x = [];

    for (let i = 0; i < 4; i++) {
        const y = Math.floor(min + Math.random() * (max - min + 1));
        x.push(y);
    }
    getRepeatArray(x, min, max)
    return x.join("\t  ·  \t");
};

function setNumber() {
    const number = win(1, 20);
    row.innerHTML = `${number}`;
}

setNumber();
