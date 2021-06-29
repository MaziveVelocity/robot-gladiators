var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function(){

        if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            this.health += 20;
            this.money -= 7;

        }else{
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function(){

        if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            this.attack += 6;
            this.money -= 7;

        }else{
            window.alert("You don't have enough money!")
        }
    }
}

var enemyInfo = [ 
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
]

// You can also log multiple values at once like this

var enemyNames = ["Robberto","Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemy) {
    
    while(enemy.health > 0 && playerHealth > 0){  
        var promptFight = window.prompt("Would you like to FIGHT or Skip this battle?");

        if (promptFight === "fight" || promptFight === "FIGHT"){
            
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemy.health = Math.max(0, enemy.health - damage);
            
            console.log("Enemy Health: " + enemy.health);

            if (enemy.health <= 0){
                window.alert(enemyName + " had died");
                break;
            }else{
                window.alert(enemyName + " still has " + enemy.health + " health left.");
            }

            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);

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
                playerMoney -= Math.max(0, playerMoney - 10);
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

function randomNumber(min, max){
    var value = Math.floor(Math.random() * (max - min +1)) + min;
    return value;
}

var startGame = function(){
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++){
        if (playerHealth > 0){
            var pickedEnemyObject = enemyInfo[i];
            enemyInfo.health = randomNumber(40, 60);
            
            window.alert("Welcome to Robot Gladiators! " + (i + 1));
            
            fight(pickedEnemyObject);

            if (playerHealth > 0 && i < enemyNames.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
                
                if (storeConfirm){
                    shop();
                }
            }
        }else{
            endGame();
        }
    }
    endGame();
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

var shop = function(){
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    
    switch(shopOptionPrompt){

        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;

        case "LEAVE":
        case "leave":
            window.alert("leavign the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
}

startGame();