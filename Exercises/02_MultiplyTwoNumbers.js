function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    console.log(multiply(num1, num2));
    function multiply(num1, num2) {
       return num1 * num2;
    }
}

solve(['2', '3']);