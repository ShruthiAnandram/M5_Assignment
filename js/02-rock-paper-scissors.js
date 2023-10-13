function displayTitle() {
    window.alert("Welcome to the Rock-Paper-Scissors game");
    let userChoice = Number(window.prompt("Please enter 1-Rock, 2-Paper, 3-Scissors"));
    if(userChoice >= 1 && userChoice <=3) {
        playGame(userChoice);
    }
    else {
        window.alert("You entered the wrong choice. Please try again..");
    }
       
 }

function playGame(userChoice) {
    let myArray = [1, 2, 3]; 
    let systemChoice = myArray[(Math.random() * myArray.length) | 0]

    if(userChoice == systemChoice) {
        window.alert("You ended up in a tie!");
        return;
    }
    
  
        switch(userChoice) {
            case 1 : (systemChoice == 2) ?
                        window.alert("Rock is covered by Paper. You lose!!") : window.alert("Rock smashes Scissors. You win!!");
                     break;
                     
            case 2 : (systemChoice == 1) ?
                        window.alert("Rock is covered by Paper. You win!!") : window.alert("Scissors cut Paper. You lose!!");
                     break;
    
            case 3 : (systemChoice == 1) ?
                        window.alert("Rock smashes Scissors. You lose!!") : window.alert("Scissors cut Paper. You win!!");
                      break;
         
            default : window.alert("default");
        }

    
}

function main() {
    displayTitle();
}

main();