var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or Skip this battle?");

    if (promptFight === "fight" || promptFight === ""){
        
        enemyHealth -= playerAttack;
        console.log("Enemy Health: " + enemyHealth);

        if (enemyHealth <= 0){
            window.alert(enemyName + " had died")
        }else{
            window.alert(enemyName + "still has " + enemyHealth + " health left.")
        }

        playerHealth -= enemyAttack;
        console.log("Player Health: " +  playerHealth);

        if (enemyHealth <= 0){
            window.alert(playerName + " had died")
        }else{
            window.alert(playerName + "still has " + playerHealth + " health left.")
        }
    }else if (promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
        
        if (confirmSkip){
            window.alert(playerName + " has skip the fight");
            playerMoney -= 2
        }else{
            fight();
        }
        
    }else{
        window.alert("You need to choose a valid option. Try agian!")
    }
};

fight();