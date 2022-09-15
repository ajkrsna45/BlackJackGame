
// let secondCard=1
let player={
    name:"Ajay",
    chips: 200

}
let cards=[]
let sum=0
// let cards=[firstCard, secondCard]
// cards.push(7)
let hasBlackJack=false
let isAlive=false
// let sum=firstCard+secondCard
let message=" "
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $"+ player.chips

// console.log(messageEl)
// console.log(cardEl)
function getRandom(){
    let num= Math.floor(Math.random()*13)+1
    if(num===1){
        return 11
    }
    else if(num>10){
        return 10
    }
    else{
        return num
    }
}
function startGame(){

    isAlive=true
    let firstCard=getRandom()
    let secondCard=getRandom()
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    
    // let cards=[firstCard, secondCard]
    cardEl.textContent="Cadrs:"
    for(let i=0; i<cards.length;i+=1){
        cardEl.textContent+=cards[i]+ " "
    }
    sumEl.textContent="Sum:" + sum  
    if(sum<21){
        message="Do you want to draw a new card";
    }
    else if(sum===21){
        message="Wow! you won the game";
        hasBlackJack=true
    }
    else{  
        message= "You are out of Game";
        isAlive=false
    }
    messageEl.textContent=message    
}
function newCard(){
    // console.log("Draw a new Card")
    if(isAlive===true && hasBlackJack===false){
    let card=getRandom()
    sum+=card
    renderGame()
}
}
// console.log(message)
