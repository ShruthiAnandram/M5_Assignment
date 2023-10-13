//STEP 1
function halfNumber(number) {
    let halfNumber = Number(number/2);
    console.log("Half of " + number + " is " + halfNumber);
}
halfNumber(7);

//STEP 2
function squareNumber(number) {
    let squareNumber = Number(number * number);
    console.log("The square of " + number + " is " + squareNumber);
}
squareNumber(9);

//STEP 3
function percentOf(number1, number2) {
    let percent = Number ((number1/number2) * 100);
    console.log(number1 + " is "+ percent + "% of " + number2);
}
percentOf(67, 78);

//STEP 4
function findModulus(number1, number2) {
     let modulus = Number(number1%number2);  
     console.log(modulus + " is the modulus of " + number1 + " and " + number2); 
}
findModulus(4, 10);

//STEP 5
function sumOfNumbers(number) {
    let base = Number(number);
    for(let i=1; i < arguments.length; i++) {
        base += Number(arguments[i]);
    }
    console.log(base);
}
sumOfNumbers(5,7,10); 
