function solve(input) {
    let count = Number(input[0]);
    let newArray = [];
    for (let i = 1; i < input.length; i++) {
        let temp = input[i].split(' - ');
        let index = temp[0];
        let value = temp[1];
        newArray[index] = value;
    }
    for (let j = 0; j < count; j++) {
        if (newArray[j] == undefined) {
            console.log(0);
        }
        else {
            console.log(newArray[j]);
        }
    }
}

solve(['2', '0 - 5', '0 - 6', '0 - 7']);
