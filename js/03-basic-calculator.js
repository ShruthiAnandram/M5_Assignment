function main() {

    // COLLECT NUMBER 1, NUMBER 2, AND OPERATION TO PERFORM (+,-,*,/) FROM THE USER
    let number1;
    let number2;
    let operation;
    let again = 'y';
    
      do {
        number1 = Number(window.prompt("Please enter the first number\n"));
        number2 = Number(window.prompt("Please enter the second number\n"));

    
        // CHECK TO SEE WHAT OPERATION THEY'RE USING
            operation = window.prompt("Please enter + or - or * or / ");
            calculate(number1, number2, operation);
            
            again = prompt('Run application again? (y or n)', 'y')
            
            
     } while(again === 'y');
        
        

}

main();


// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(number1, number2, operation) {

    // CALL THE APPROPRIATE FUNCTION
    switch(operation) {
         case "+" : addNumbers(number1, number2);
                break;
         case "-" : subtractNumbers(number1, number2);
                break;
         case "*" : multiplyNumbers(number1, number2);
                break;
         case "/" : divideNumbers(number1, number2);
                break;
         default : window.alert("Wrong choice of operation. Try again..");
    }
}



// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
function addNumbers(number1, number2) {
    let result;
    result = number1 + number2;
    console.log("The sum of the numbers is " + result);
    return result ;
}

// SUBTRACT FUNCTION
function subtractNumbers(number1, number2) {
    let result;
        if(number1 > number2) {
           result = number1 - number2;
        }
        else {
            result = number2 - number1;
        }
        console.log("The difference of the numbers is " + result);
       return result ;
 }

// MULTIPLY FUNCTION
function multiplyNumbers(number1, number2) {
    let result;
        result = number1 * number2;
        console.log("The product of the numbers is " + result);
       return result ;
}

// DIVIDE FUNCTION
function divideNumbers(number1, number2) {
    let result;
        if(number2 != 0) {
            result = number1 / number2;
            console.log("The quotient of the numbers is " + result);
           return result ;
        }
        else {
            window.alert("The divisor cannot be 0");
        }
      
}

