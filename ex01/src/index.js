var myPet = {

species: "cat",
name: "Hamsha",
legs: 4,
friends : ["Sivka", "Cicko"]
}

function myFunction(myObj) {
       return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };



