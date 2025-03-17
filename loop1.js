//do while - EXIT CONTROLLED LOOP
i = 1;
do{
    console.log(i);

    i++
}while(i<=5)


for(let x=0;  x<=5; x++){
    console.log(x);
 
}

//use do while range 1-50 u need to print even or odd
let a=1;
do{
    if(a%2==0){
        console.log(`even ${a}`);
     }else{
        console.log(`odd ${a}`); 
     }
    a++
}while(a<=50)

//print the given number is prime or not
 
let num = 97
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



//fibonci series

    let a1 =0;
    let a2=1;
    console.log(a1);
    console.log(a2);
  
 
    for(p=2;  p<10; p++){
       
       let next=a1+a2
       console.log(next);
       a1=a2;
       a2=next;     
    };   
    
    

/* i need a pattern like this

*
**
***
****
*****
*/


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         let k = '*';
//         console.log(`${k}`);
//     }
// }

/* i need a pattern like this

*****
*****
*****
*****
*****
// */

// let c = "*****"
// let c1 =1

// do{
//     console.log(c);
//     c1++
// }while(c1<=5)

/* 

1*1=1 .....1*10=10.....2*1=2....2*10....3*1=3.......10*10=100
*/

// let d=1;
// let d1=1;
// do{
//     console.log(`${d1}*${d}=${d1*d}`);
//     d++

// }while(d<=10)


// //
// let e=1;
// let e1=2;
// do{
//     console.log(`${e1}*${e}=${e1*e}`);
//     e++

// }while(e<=10)


