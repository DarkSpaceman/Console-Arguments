#!/usr/bin/env node

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let randNum = Math.floor(Math.random() * 100);
console.log('Загадано число от 0 до 100');

function game() {
    readline.question(``, number => {
        if (number == randNum) {
            console.log(`Отгадано число ${randNum}`);
            readline.close()
        } else if (number > randNum) {
            console.log("Меньше")
            game()
        } else if (number < randNum) {
            console.log("Больше")
            game()
        }
    })
}
game();