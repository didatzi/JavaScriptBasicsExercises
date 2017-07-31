function solve(input) {
    let arr = [];
    for (let i =0; i < input.length-1; i++){
        let tokens = input[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];
        arr[key]= value;
    }
    let resolveKey = input[input.length-1];
    if (!arr[resolveKey]){
        console.log('None');
    }
    else{
        console.log(arr[resolveKey]);
    }
}

solve([ 'key value', 'key eulav', 'test tset', 'key' ]);
// solve(('key value\n' +
//     'key eulav\n'+
//     'test tset\n'+
//     'key').split('\n')
// );