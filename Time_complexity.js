const numbers = [10, 20, 30, 40, 50];

function findNumber(number, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(findNumber([10, 20, 30, 40, 50], 50));
