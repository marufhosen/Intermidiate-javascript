const students = [
    {Name: "Gustabo", ID: 1591},
    {Name: "Don Pablo", ID: 247},
    {Name: "Luis Fred", ID: 3657},
]

const onlyStuName = [];

// for (let i = 0; i < students.length; i++) {
//     const Student = students[i];
//     onlyStuName.push(Student.Name);
// }

const names = students.map(stu => stu.Name);

const specificStudent = students.filter(s => s.ID < 250);

console.log(names);

console.log(specificStudent);
