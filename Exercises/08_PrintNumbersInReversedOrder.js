function solve(input) {
    input.reverse();
    let result = input.map(e => Number(e));
    for (let item of result){
        console.log(item);
    }
}
solve(['10', '15','20']);