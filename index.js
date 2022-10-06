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

// Add up all of the salaries

const salaries = {
    john: 50,
    adam: 100,
    katie: 75
}

const salarySum = salaries.john + salaries.adam + salaries.katie;
console.log(salarySum);

