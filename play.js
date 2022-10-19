const name = "Maneesh";
let age = 29;
const hasHobbies = true;

age = 31;

function summarizerUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    )
}

console.log(summarizerUser(name, age, hasHobbies));

