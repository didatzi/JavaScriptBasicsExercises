function solve(arr) {
    let obj = {};

    arr.map(a => a.split(' -> ')).forEach(sudentTokens => {
        let property = sudentTokens[0];
        let value = isNaN(sudentTokens[1]) ? sudentTokens[1] : Number(sudentTokens[1]);

        obj[property] = value;
    });
    console.log(JSON.stringify(obj))
}

solve(['name -> Angel', 'surname -> Georgiev', 'age -> 20',
    'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']);
