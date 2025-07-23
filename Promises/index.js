//Class Map

const map = new Map();
map.set('name', 'Akhand');
map.set('age', 22);

console.log(map.get('name'));

// Class Date

const now = new Date();
console.log(now.toTimeString());
console.log(now.toISOString())

// String Class

let str = "Sizume";
console.log(str.toUpperCase());

// Class vs Objects

const user ={
    name: 'Sadia Iqbal',
    age: '27',
    profession: 'Writer' 
}
console.log(user.profession);


class User{
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    work(){
        console.log(`${this.name} is a fine ${this.profession}.`)
    }

}

const user1 = new User('Sadia Iqbal', 27, 'Actor');
const user2 = new User('Akhand', 22, 'Writer');
user1.work();
user2.work();



//Callbacks

function callback(){
    console.log("Some time has passed!!");
}

setTimeout(callback, 3000);