class Student {
    constructor (Name, Number, age) {
        this.Name = Name; //string
        this.Number = Number; //string
        this.age = age; //number
        this.hobbies = []; //array
    }

    setHobbies (hobbies) {
        this.hobbies = hobbies; //setter
    }

    getHobbies () {
        return this.hobbies; //getter
    }
// greetings return salute name and age dynamic
    greetings () {
        return `Hello, my name is ${this.Name} and I am ${this.age} years old.`
    }
}
