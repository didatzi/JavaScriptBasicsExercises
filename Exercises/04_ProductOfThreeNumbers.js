function solve(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[1]);

    let countNegative = 0;

    for (let num of input) {
        if (num < 0) {
            countNegative++;
        }
    }
    if (x === 0 || y === 0 || z === 0) {
        console.log("Positive");
    } else if (countNegative % 2 != 0) {
        console.log("Negative");
    }
    else {
        console.log("Positive");
    }
}
solve(['5', '-4', '-3']);