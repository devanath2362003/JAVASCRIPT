//3
function exam(mark){
        if(90<=mark && mark<=100)
            {console.log("A");
        }else if(80<=mark && mark<=89){
            console.log("B");
        }else if (70<=mark && mark<=79){
            console.log("C");
        }else if(60<=mark && mark<=69){
            console.log("D");
        }else{ 
            console.log("Fail");
         }
}exam(55)
//8
 function faren(degree){
    let celcius=(9/5)*degree+32
    console.log(celcius);
 }faren(35)
 
//9
function bill(rate){
    let price=rate*0.05
    console.log(rate-price);
    // let totalprice= rate-price
    // console.log(totalprice);
}bill(50000)

//1
function gst(nights,cost){

let amount=nights*cost;
let gst =0

    if(0<=amount && amount<=1000){
        gst = amount*0  
    }else if(1001<=amount && amount<=7500){
        gst = amount*0.12
    }else if(7501<=amount && amount<=Infinity){
        gst = amount*0.18
    }  

console.log(gst);

    let findbill=amount+gst;
    console.log(findbill);
    
}

gst(3,4000)

function leap(year){

    if(year%4==0){
        console.log('leap year');
        
    }else{
        console.log('not leap year');
    }
}leap(2007)

function name1(unit){
    if(0<=unit && unit<=100) {
        console.log($unit*3);  
    }else if(101<=unit && unit<=200) {
        console.log(unit*5);
    }else if (201<=unit && unit<=300) {
        console.log(unit*7);
    }else if (300<Infinity) {
        console.log(unit*10);
    }   
}name1(320)