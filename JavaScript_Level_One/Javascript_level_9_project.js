var first_name = prompt("Give your first name: ");
var last_name = prompt("Give your last_name: ");
var age = prompt("Give your age: ");
var height = prompt("Give your height in centimeters: ");
var pet_name = prompt("Give your pet's name: ");

if (first_name[0] === last_name[0] && age>20 && age < 30 && height >= 170 && pet_name[pet_name.length - 1]){
  console.log("Welcome Comrade! You've passed the Spy Test");
}
