const choices = ["mA","rock", "paper", "scissors", "lizard", ];
// let mychices = 2; 
const mychices = prompt("Choose rock, paper or  scissors.\nChoose rock = 1 paper = 2 scissors = 3");
let myc = choices[parseInt(mychices)]
const computer = choices[Math.floor(Math.random() * 3+1)];
console.log(myc);
console.log(`You chose: ${myc}`);
console.log(`Computer chose: ${computer}`);

if (!choices.includes(myc)) {
  console.log("Invalid choice!");
} else if (myc === computer) {
  console.log("It's a tie!");
} else if (
  (myc === "rock" && computer === "scissors") ||
  (myc === "paper" && computer === "rock") ||
  (myc === "scissors" && computer === "paper")
) {
  console.log("You win!");
} else {
  console.log("You lose!");
}
