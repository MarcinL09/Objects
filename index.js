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

function isObject(object) {
    return typeof object === typeof null;
}

console.log(isObject({})); // true
console.log(isObject(null)); // false

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
        const firstUserFirstName = firstObject.firstName;
        const firstUserLastName = firstObject.lastName;

        const secondUserFirstName = secondObject.firstName;
        const secondUserLastName = secondObject.lastName;
        return firstUserFirstName === secondUserFirstName && firstUserLastName === secondUserLastName
}

let userTheSameName = checkIfUsersHaveTheSameName(firstJohn, secondJohn); // true
userTheSameName = checkIfUsersHaveTheSameName(firstJohn, adam); // false
console.log(userTheSameName);


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

// Write the getCubeVolume function
const cube = {
    width: 15,
    length: 2,
    height: 5
}
function getCubeVolume(cube) {
    return cube.width * cube.length * cube.height;
}

getCubeVolume({ width: 10, length: 5, height: 2}); // 100
getCubeVolume({ width: 100, length: 500, height: 0}); // 0
getCubeVolume({ width: 15, length: 2, height: 5}); // 150
console.log(getCubeVolume(cube));

// Write the getCityInformation function

const cityInformation = {
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517
}

function getCityInformation(information){
    return (`${information.name} is in ${information.country} and has an area of ${information.areaInKilometers} square kilometers`)
}// Warsaw is in Poland and has an area of 517 square kilometers
console.log(getCityInformation(cityInformation));

// Write the getUserCopy function. Assume that users only have the firstName and lastName.

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

function getUserCopy(copyUser) {
   return copyUser = {
       firstName: copyUser.firstName,
       lastName: copyUser.firstName
   }
}

const newUser = getUserCopy(john);
console.log(newUser.firstName); // John
console.log(newUser.lastName); // John
console.log(newUser === john); // false <-- this is crucial

// return a string like this: "This white dog has 4 legs."

const animal = {
    name: "dog",
    legs: 4,
    color: "white"}
function animalDescription(animalObject){
    return (`This ${animalObject.color} ${animalObject.name} has ${animalObject.legs} legs.`);
}
console.log(animalDescription(animal));