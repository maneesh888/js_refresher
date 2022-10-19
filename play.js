// const name = "Maneesh";
// let age = 29;
// const hasHobbies = true;

// age = 31;

// const summarizerUser = function (userName, userAge, userHasHobby) {
//     return (
//         'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
//     )
// }

// const summarizerUser = (userName, userAge, userHasHobby) => {
//     return (
//         'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
//     )
// }

// const summarizerUser = (userName, userAge, userHasHobby) => {
//     return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
// }

// const summarizerUser = (userName, userAge, userHasHobby) =>  'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby

// const add = (a,b) => a + b;
// const addOne = a => a + 1
// const addRandom = () => 6+7;

// console.log(add(1,2))
// console.log(addOne(5));
// console.log(addRandom());
// console.log(summarizerUser(name, age, hasHobbies));

const person = {
    name:'Maneesh',
    age:31,
    // greet: function () {
    //     console.log('Hi, I am ' + this.name)
    // }
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

// Object Destructuring
const printName = ({ name }) => console.log(name);
printName(person);

const { name, age } = person;
console.log(name, age) ;

const hobbies = ['Sports', 'Cooking'];
const [ h1, h2 ] = hobbies;
console.log(h1,h2);



//person.greet();
// for (let hobby of hobbies) {
//     console.log(hobby)
// }

// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby
// }));

//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// hobbies.push('Programming');
// console.log(hobbies);

// // Spread operators

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const copiedPerson = {...person};
// console.log(copiedPerson);


// // Rest operator
// const toArray = (...args) => args;
// console.log(toArray(1,2,3));