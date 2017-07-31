function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    console.log(multiplyOrDivide(num1, num2));
    function multiplyOrDivide(num1, num2) {
       if (num1 <= num2){
           return num1 * num2;
       }else {
           return num1 / num2;
       }
    }
}

solve(['13', '13']);