function solve(input) {
        for (let item of input){
            if (item === 'Stop'){
                return;
            }
            console.log(item);
        }
}
solve(['Line 1', 'Line 2','Line 3','Stop','Line 3','Line 3']);