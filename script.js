class Student {
    constructor (name, phone_number, age, hobbies) {
        console.log ("Created Student", name)
        this.name = name;
        this.phone_number = phone_number;
        this.age = age;
        this.hobbies = hobbies;
    }

    get.hobbies() {
        return 'hobbies';
    }
}

var Student1 = new Student ("Sharleen Rollo", "012345678", "18", "Tenis");

console.log (Student1.hobbies);
