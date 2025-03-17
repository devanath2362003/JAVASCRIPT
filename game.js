let user1 = 'paper';
let user2 = 'paper';
switch(user1){
    case 'stone':
        if(user2=='stone'){
            console.log("draw");
        }
        else if(user2=='paper'){
            console.log("user2 win");   
        }
        else if(user2=='scissor'){
            console.log("user2 loss");   
        }
        break;
    
        case 'paper':
            if(user2=='stone'){
                console.log("user2 win");
            }
            else if(user2=='paper'){
                console.log("draw");   
            }
            else if(user2=='scissor'){
                console.log("user2 win");   
            }
            break;
            case 'scissor':
                if(user2=='stone'){
                    console.log("user2 win");
                }
                else if(user2=='paper'){
                    console.log("user2 loss");   
                }
                else if(user2=='scissor'){
                    console.log("draw");   
                }
                break;

            }
        