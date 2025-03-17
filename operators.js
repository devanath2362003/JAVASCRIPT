//arithmetic operators

// + - / * %(modulo - remainder) ** - power

let a =10;
let b=3;

console.log(a/b);
console.log(a%b); //it will get the remainder

console.log(10**2);






//comparison operators   > < >= <= == !=  ===(strict equality)  !==(it always return true or false value)4
let name='deva'
let age = 21

console.log(age>10);


console.log(name=='praba');//false

console.log(age==20);//false



console.log('---------------------------------');

console.log(age=='21');//true   - it will check the values only not the datatype
console.log(age==='21');//false - it will check the values  and datatype also






//logical operators (AND  -&&  OR-||     NOT-!)

console.log('logical operators');
console.log(age>10 && name=='praba');

console.log(age>10 || name=='praba');
console.log(!(name=='praba'));  //not -inverting !(false) ->true






if(0<age && age<=18){
    console.log('under age');
    
}else{
    console.log('the  age not between 0 to 18');
    
}

//ternary operator - ? : 

console.log('-----------------ternary operator--------------');
(0<age && age<=18) ?   console.log('under age') : console.log('the  age not between 0 to 18')




//assignment operator


let cart=2;

// cart=cart+1   
// cart+=1


console.log(cart);


let i=10;
// i++

i--
console.log(i);


//pre increment and post increment 

let x=52;
// console.log(x--);
// console.log(x);

console.log(--x);



//spread operator

let arr=[12,13,4,12,45,67,90]
let arr1=[...arr,'red','black'] //copying the values from array  not an array

console.log(arr1);


//type off
let m1 = 10
let m2 = true
console.log(typeof(m2));
