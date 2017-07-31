function solve(input) {
    let resolveKey = input.slice(-1);

    function parseKeyValuePairs(str) {
        let tokens = str.split(' ');
        let result = {
            key: tokens[0],
            value: tokens[1]
        };
        return result;
    }

    let keyValuePairs = input
        .slice(0,-1)
        .map(parseKeyValuePairs);

    let arr = {};

   keyValuePairs.forEach( element =>{
       if (!arr[element.key]){
           arr[element.key] = [];
       }
       arr[element.key].push(element.value);
   });
   if(arr[resolveKey]) {
       console.log(arr[resolveKey].join('\n'));
   }else{
       console.log('None');
   }
}

solve([ 'key value', 'key eulav', 'test tset', 'key' ]);