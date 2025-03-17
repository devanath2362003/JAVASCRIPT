let a = 15
let b = 2
if (a%b==0){
    console.log('given value is even'); 
}
else{
    console.log('not even');
}
console.log('-----------------ternary operator--------------');
console.log(a);
(a%b==0) ? console.log('given number is even')
:console.log('not even');


console.log('----------------zzzz--------------');

//Range 45 to 80 including 45 & 80
let range=55
if(45<=range && range<=80){
    console.log('under range');
}
    else{
        console.log('range not between the 45 to 80' );
         }


 console.log('-----------------ternary operator--------------');
 (45<=range && range<=80) ?  console.log(`${range} under range`) : console.log(' range not between 45to 80')


 let numb=-10;

 if(numb>0){
    console.log(`${numb} is a positive number`);
    
 }else if(numb<0){
    console.log(`${numb} is a negative number`);

 }else{
    console.log(`${numb} is zero`);
 }

 //zero to 18 not including 18 ,18 to 100 eligible for vote other than that everything are invalid age
 //0 to 35 not including 35 fail 35 to 55 average 55 to 85 good 85 to 100 outstanding in other than that invalid marks
 //declare  3 variables 2 numbers 

 let age = 21
 if(age<18){
    console.log("age is not eligible");
}else if(age<100){
    console.log("age is eligible");
}else{
    console.log("invalid age");
}
let mark = 70
if(0<mark && mark<35){console.log("consider as fail");
}else if(35<=mark && mark<55){
    console.log("consider as average");
}else if (55<=mark && mark<85){
    console.log("consider as good");
}else if(85<=mark && mark<100){
    console.log("consider as outstanding");
}else{ 
    console.log("invalid marks");
 }

let z = 10 
let z1 = 20
let z2 = (z+z1)
if(0<50){console.log( "z2 is valid" );
}else if( z2>50){console.log("z2 is invalid");
}else{console.log("error");
}









if(numb>0){
   console.log(`${numb} is a positive number`);
   
}else if(numb<0){
   console.log(`${numb} is a negative number`);

}else{
   console.log(`${numb} is zero`);
}



(numb>0) ?  console.log(`${numb} is a positive number`) : ((numb<0) ? console.log(`${numb} is a negative number`) :  console.log(`${numb} is zero`))