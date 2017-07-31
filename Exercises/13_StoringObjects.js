function solve(input) {
    function parseStudent(str) {
        let tokens = str.split(' -> ');

        // let name = tokens[0];
        // let age = Number(tokens[1]);
        // let grade = Number(tokens[2]);
        let [name, age, grade] = tokens.map(a => !isNaN(a) ? Number(a) : a);

        let obj = {name: name, age: age, grade: grade};
        return obj;
    }

    let students = input.map(parseStudent);
    students.forEach(student => {
        let studentStr=
            `Name: ${student.name}\n` +
            `Age: ${student.age}\n`+
            `Grade: ${student.grade.toFixed(2)}`;

     console.log(studentStr);
    });
}

solve(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90']);