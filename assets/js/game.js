/* Module 3 - Creating a Robot Gladiators game using JS and HTML
for Con Solo Game Convention 
Rules: 1) Complete in less than 24 hours; 2) No CSS; 3) Do not alter HTML
other than the title */

var playerName = window.prompt("What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;

//You can also log mulitple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Bezos3.0";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  //Alert the players that the round is starting
  window.alert("Welcome to Robot Gladiators!")

  //Subtract the value of 'playerAttack' from the value of 'enemyHealth'
  enemyHealth = enemyHealth - playerAttack;

  //Subtract the value of 'enemyAttack' from 'playerHealth'
  playerHealth = playerHealth - enemyAttack;

  //Log a resulting message to console so we know it worked. 
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );


    // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

fight();