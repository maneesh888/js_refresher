const name = "Maneesh";
let age = 29;
const hasHobbies = true;

age = 31;

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

const summarizerUser = (userName, userAge, userHasHobby) =>  'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby

const add = (a,b) => a + b;
const addOne = a => a + 1
const addRandom = () => 6+7;

console.log(add(1,2))
console.log(addOne(5));
console.log(addRandom());
console.log(summarizerUser(name, age, hasHobbies));

