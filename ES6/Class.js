class Human{

    constructor(fullName,age,dob){
        this.fullName = fullName;
        this.age = age;
        this.dob = dob;
    }

    getDetails(){
        return `${this.fullName} is ${this.age} years old and was born on ${this.dob}`;
    }
}

let human1 = new Human('Hussain Mahamud',29.5,'1994-12-28');
// console.log(human1.getDetails());