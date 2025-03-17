//factorial 

function factorial(num2){

 let num1=1;
    for(let i=num2; i>=1; i--){
        num1*=i

    }
   console.log(num1);
   
} factorial(5)


//given number is even or odd

function evenodd(no){
    if (no%2==0){
        console.log('even');
    }else{
        console.log('odd');   
    }
}evenodd(98)

//given marks is fail,pass

function exam(mark){
    if (1<=mark && mark<=50){
        console.log('fail');
    }else if(51<=mark && mark<=100){
        console.log('pass');   
    }
}exam(35)

//find the sum of even numbers for the given value

//add to cart and remove to cart 
//find the given number is prime or not
 
function value(num){
    
let isPrime = true

for(let i=2;i<num/2;i++){
    if(num%i==0){
        isPrime=false    
        
    }
}

if(isPrime){
    console.log("prime");
    
}
else{
    console.log("non prime");
    
}

}value(11)
    
   


