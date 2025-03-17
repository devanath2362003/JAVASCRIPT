// while is a entry controlled loop

console.log('hello');

let i=1; //initializtion

while(i<=5){ //condition

    console.log(` ${i}  times hello`);


   i++  //increment
}




let y=0

while(y<=10){

    if(y%2!=0){
        console.log(y);

    }

    y++
}
//print even numbers-20 
//print 5 divisibles  5,10,15....50
//print tables  3*1=3 3*2=6

/* use else if inside loop -fizzbuzz
 if the number is div by 3 it should display fizz
 if the number is div by 5 it should display buzz
 if the numb is div by both 5 and 3 means display fizzbuzz
  other wise print the same number like   
  1
  2
  fizz
  4
  buzz
  fizz
  7 
  8 
  fizz
  buzz

  14
  fizzbuzz
*/

let a=0;

while(a<=20){
    console.log(a);
    a+=2
}


// let b=1;
// while(b<=50){
//     if(b%5==0){console.log(b);
//     }
//     b++
// }

let qwe =1;
let asd = 5;
while(qwe<=10){
    console.log(`${asd * qwe}`);
    qwe++

    
}

let number = 1;
let table = 3;
    while(number<=10){
        console.log(`${table}*${number}=${table*number}`);
        number++
    }

let iop = 1;

while(iop<=20){

    if(iop%3==0 && iop%5==0){
        console.log(`fizzbuzz`); 
    }
    else if(iop%3==0){
        console.log(`fizz`);
    }else if(iop%5==0){
        console.log(`buzz`);
    }else {console.log(iop);
    }
iop++
}

//find the sum of 1 to 10
//factorial
//find the sum of square of given number 
//find the sum of even number range 20   
let num1 = 1;
let sum = 0;

while(num1<=10){
    // console.log(num);
    sum+=num1
    // console.log(sum);
    num1++
}

console.log(sum);
 
let num2 = 1;
let sum2 = 1;

while(num2<=10){
    // console.log(num);
    sum2*=num2
    // console.log(sum);
    num2++
}

console.log(sum2);
