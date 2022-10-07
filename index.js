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

function createUser(firstName, lastName) {
    return {
        fullName: firstName + ' ' + lastName,
        firstName,
        lastName
    }
}

const userName = createUser(user.firstName, user.lastName);
console.log(userName);

// write the checkIfPropertyIsDefined function
const userObject = {
    height: 170
}
function checkIfPropertyIsDefined(userObject, propertyName) {
    return userObject[propertyName] === undefined;
}

const checkProperty = checkIfPropertyIsDefined(userObject, 'firstName'); // true
const checkPropertysecond = checkIfPropertyIsDefined(userObject, 'height'); // false
console.log(checkProperty);
console.log(checkPropertysecond)

// Add up all of the salaries

const salaries = {
    john: 50,
    adam: 100,
    katie: 75
}

const salarySum = salaries.john + salaries.adam + salaries.katie;
console.log(salarySum);

// Write the isObject function. Use the typeof operator.

// function isObject(object) {
//     return;
// }
//
// isObject({}); // true
// isObject(null); // false

// Write the removeProperty function. It should return true if there is a property with a given key to
// remove. Otherwise, it should return false.
//     const user = {
//     name: 'John'
// }
// removeProperty(user, 'name'); // true
// removeProperty(user, 'name'); // false
// removeProperty(user, 'weight'); // false
// console.log(user); // {}



