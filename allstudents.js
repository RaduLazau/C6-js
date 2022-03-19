const Students = [
    {
        studentName: 'Sharleen Rollo',
        phoneNumber: '0123456789',
        age: 19,
        hobbies: ['tenis', 'music']
    },
    {
        studentName: 'Della Wally',
        phoneNumber: '0912345678',
        age: 25,
        hobbies: ['music', 'books']
    },
    {
        studentName: 'Ryana Ami',
        phoneNumber: '0891234567',
        age: 23,
        hobbies: ['books', "music"]
    },
    {
        studentName: 'Lydia Mercy',
        phoneNumber: '9874561230',
        age: 25,
        hobbies: ['drawing', 'writing']
    },
    {
        studentName: 'Mikey Valorie',
        phoneNumber: '6789012345',
        age: 24,
        hobbies: ['gaming', 'dancing']
    },
    {
        studentName: 'Chester Lexie',
        phoneNumber: '3456789012',
        age: 25,
        hobbies: ['books', 'cooking']
    }
]

let allStudents = []; //initializare variabila cu empty array

for (let i = 0; i < Students.length; i++) {
    let student = new Student(Students[i].studentName, Students[i].phoneNumber, Students[i].age);
    student.setHobbies(Students[i].hobbies);
    // console.log(student);
    allStudents[allStudents.length] = student;  
}

console.log(allStudents);

console.log('Student Message: ' + allStudents[5].greetings());

for (let i = 0; i < allStudents.length; i++){
    if (allStudents[i].getHobbies().includes('music') || allStudents[i].getHobbies().includes('books')) { //afiseaza hobiuri music sau books
        console.log(allStudents[i].greetings())
    }
}
