var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var totalDamage = 0;

while (slaying){
    if (youHit = 1){
        console.log("Woo you hit the dragon!");
        
        totalDamage +=  damageThisRound
        
        if (totalDamage >= 4){
            console.log("You slayyed the dragon woo!");
        }
        else {
            youHit = Math.floor(Math.random() * 2); 
        }
        
        
        slaying = false; 
    }
    
    else {
        console.log("Oh no! The dragon hit you!");
        slaying = false; 
    }
}
