let firstCard = 8;
let secondCard = 9;
let  sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
console.log(sumEl)



function startGame() {

    sumEl.textContent = "Sum: " + sum


    if(sum <= 20 ){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "Wahoo!"
        hasBlackJack = true
    }else {
        message = "you're out of the game"
        isAlive = false
    
    }
    messageEl.textContent = message
}





