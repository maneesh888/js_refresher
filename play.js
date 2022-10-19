var name = "Maneesh";
var age = 29;
var hasHobbies = true;

function summarizerUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    )
}

console.log(summarizerUser(name, age, hasHobbies));

