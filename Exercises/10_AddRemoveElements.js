function solve(input) {
    let array = [];

    for (let i = 0; i < input.length; i++) {
        let tempArr = input[i].split(' ');
       let command = tempArr[0];
       let value = tempArr[1];

        if (command === "add") {
            array.push(value);
        }
        if (command === "remove") {
            array.splice(value, 1);
        }
    }

    for (let item = 0; item < array.length; item++) {
        console.log(array[item]);
    }
}
solve(['add 3', 'add 5', 'add 7']);