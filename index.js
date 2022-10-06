// Create the getFullNameFromUser function

const user = {
    firstName: 'John',
    lastName: 'Smith'
}
function getFullNameFromUser(user) {
    return user.firstName + ' ' + user.lastName;
}

console.log(getFullNameFromUser(user));

// Write the createUser function


user.firstName = 'Katie',
user.lastName = 'Williams'

function createUser(user) {
    return user.firstName + ' ' + user.lastName;
}

const userName = createUser(user);
console.log(userName);

