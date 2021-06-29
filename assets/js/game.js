var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this

var enemyNames = ["Robberto","Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;


console.log(playerName, playerAttack, playerHealth);

var fight = function(enemyName) {
    
    while(enemyHealth > 0 && playerHealth > 0){  
        var promptFight = window.prompt("Would you like to FIGHT or Skip this battle?");

        if (promptFight === "fight" || promptFight === ""){
            
            enemyHealth -= playerAttack;
            console.log("Enemy Health: " + enemyHealth);

            if (enemyHealth <= 0){
                window.alert(enemyName + " had died");
                break;
            }else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth -= enemyAttack;
            console.log("Player Health: " +  playerHealth);

            if (playerHealth <= 0){
                window.alert(playerName + " had died! You have lost your robot in battle! Game Over!");
                break;
            }else{
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
                
        }else if (promptFight === "skip" || promptFight === "SKIP"){
            
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert(playerName + " has skip the fight");
                playerMoney -= 10;
                console.log("Player's Money: ",playerMoney);
                break;
            }else{
                fight();
            }
            
        }else{
            window.alert("You need to choose a valid option. Try agian!")
        }
    }
};

var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! " + (i + 1));
            var pickedEnemy = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemy);
        }else{
            endGame();
        }
    }
    startGame();
}

var endGame = function(){
    if (playerHealth > 0){
        window.alert("The game has now ended. Let's see how you did!");
    }else{
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

startGame();