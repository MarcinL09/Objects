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
//     return object !== null && typeof === {};
// }
//
// const objectFirst = isObject({}); // true
// // isObject(null); // false
// console.log(objectFirst);

// Write the removeProperty function. It should return true if there is a property with a given key to
// remove. Otherwise, it should return false.
    const userData = {
    name: 'John',
}

function removeProperty(userData, propertyData) {
        return userData.hasOwnProperty(propertyData);
}

let propertyToRemove = removeProperty(userData, 'name'); // true
removeProperty(userData, 'name'); // false
propertyToRemove = removeProperty(userData, 'weight'); // false
console.log(propertyToRemove); // {}

// Write the checkIfUsersHaveTheSameName function

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}
const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}
const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(firstObject, secondObject) {
    const firstObjectKeys = Object.keys(firstObject);
    const secondObjectKeys = Object.keys(secondObject);

    if (firstObjectKeys.length !== secondObjectKeys.length) {
        return false;
    }
    return true;
}

const theSameName = checkIfUsersHaveTheSameName(firstJohn, secondJohn); // true
checkIfUsersHaveTheSameName(firstJohn, adam); // false
console.log(theSameName);


// Write the getVoteCount function

const votes = {
    upvotes: 10,
    downvotes: 5
}
function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

getVoteCount({ upvotes: 10, downvotes: 5 }); // 5
getVoteCount({ upvotes: 75, downvotes: 90 }); // -15
getVoteCount({ upvotes: 50, downvotes: 50 }); // 0


