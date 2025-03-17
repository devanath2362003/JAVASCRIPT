
function addition(){

    let a=10;
let b= 2;

console.log(a+b);

}

addition()
addition()
addition()
addition()


//function with parameters

function addTwoNumbers(num,num1){ //parameters

    let sum= num+num1;
    console.log(sum);

}

console.log('jerhjkkl');
addTwoNumbers(1,3) //arguments

addTwoNumbers(10,1)
// addTwoNumbers('deva','praba')



function game(player1,player2){
    
switch (player1) {

    case "papper":
        if (player2=="stone") {
            console.log("player1 won");
        }
        else if(player2=="papper"){
            console.log("tie");
        }
        else if(player2=="scissor"){
            console.log("player2 won");
        }
        
        break;
    case "stone":
        if(player2=="stone"){
            console.log("tie");
        }
        else if(player2=="papper"){
            console.log("player2 won");
        }
        else if(player2=="scissor"){
            console.log("player1 won");
        }
        break;
    case "scissor":
        if(player2=="stone"){
            console.log("player2 won");
        }
        else if(player2=="papper"){
            console.log("player1 won");
        }
        else if(player2=="scissor"){
            console.log("tie");
        }
        break;
}


}

game('stone','scissor')
game('stone','stone')