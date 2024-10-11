let school ={
    name:"MLB",
    location :"Delhi",
    established : '1971',
    20:100,
    displayInfo : function(){
        console.log(`The Vlaue of the key20 is ${school['20']}`);
    }

}
school.displayInfo()
let person = {
    gender :"male"
}
let person1 = Object.create(person);
person1.name = "ABC",
person1.age = 25,
person1.nationality = "Indian"
console.log(person1.name, person1.age, person1.nationality,person1.gender)
