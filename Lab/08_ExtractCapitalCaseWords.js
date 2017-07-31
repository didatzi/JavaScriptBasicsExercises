function solve(input) {
    let text = input.join(" ");
    let pattern = /^[a-zA-Z]+]/;
    console.log(text.split(pattern).filter(e=>e.match(pattern)))

}