let max = parseInt(prompt("What is the maximum guess number?"))
let random = Math.floor(Math.random() * max)

while (!max) {
    max = parseInt(prompt("Input a Valid Number!"))
}
let guess = parseInt(prompt("What is your first guess?"))
while (!guess) {
    guess = parseInt(prompt("Input a Valid Number!"))
}
let attempt = 1;

while (parseInt(guess) !== random) {
    if (guess === "q") break;
    attempt += 1
    if (guess < random) {
        guess = prompt("Too low, try a higher number")
    }
    else {
        guess = prompt("Too high, try a lower number")
    }
}

if (guess === "q") {
    console.log(`You are a quitter, arent you? You opted out after ${attempt} tries.`)
}
else {
    console.log(`Congratulations! You got the number right as ${guess} after ${attempt} tries.`)
}
