window.onload = function() {
  var clickMeButton = document.getElementById('startcalc');
  clickMeButton.onclick = youClicked;
}

function youClicked(){
  alert("Greetings! Welcome to the Calculator Game");
  var user_name = prompt("What is your name?");
  alert("Hello " + user_name + "! Please enter any two numbers in the following prompts:");

  function calcTotal() {
  var num1 = prompt("Please enter your first number:");
  var num2 = prompt("Please enter your second number:");
  num1 = Number(num1);
  num2 = Number(num2);
  var total = num1 + num2;
  alert("The sum of " + num1 + " and " + num2 + " is: " + total);
  if (total < 10) {
      alert("That is a small number");
  }
  else {
      alert("That is a big number");
  }
  }

  calcTotal();

  var user_choice = prompt("Would you like to play again? Please answer 'y' for yes or 'n' for no");

  while (user_choice == "y") {
    calcTotal();
    var user_choice = prompt("Would you like to play again? Please answer 'y' for yes or 'n' for no");
    }
  alert("Thankyou for playing!");
}