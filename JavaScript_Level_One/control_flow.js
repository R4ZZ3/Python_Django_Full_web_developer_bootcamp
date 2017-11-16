var number = 1

while (number <= 10) {
if (number % 2 === 0) {
  console.log("number is now even, so we print it " + number)
}else if (number % 2 !== 0){
  console.log("number is now not even, we dont print it")
}
if (number === 10) {
break;
}
number += 1
}
console.log(number)
