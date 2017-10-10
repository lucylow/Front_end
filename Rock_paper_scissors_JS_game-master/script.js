<script>
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random(); // Random number from 0 to 1

if (computerChoice < 0.34) {
	computerChoice = "rock";
	
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

console.log("Computer: " + computerChoice);

// Compare userChoice with computerChoice

var compare = function(choice1, choice2){
    if (choice1 === choice2){
        return "The result is a tie!"; 
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors"){
            return "Rock Wins!"
        }
        else { 
            return "Paper Wins!"
        }
    }
    
    else if (choice1 === "paper") {
        if (choice2 === "rock"){
            return "Paper Wins!"
        }
        else {
            return "Scissors wins!"
        }
    }
    
    
    else  {
        if (choice2 === "rock"){
            return "Rock Wins!"
        }
        else {
            return "Scissors Wins!"
        }
    }
};

compare(userChoice, computerChoice); 
</script>







