
function addtwonumber(){

    let a=10;
let b=12;

let sum= a+b;
console.log(sum);

}
addtwonumber()


//function using parameters
function intr(p,n,r){ //parameters
    let si = (p*n*r)/100

    console.log(si);
    
}


intr(5000,5,12)
intr(6000,5,12)

//function expression
let findArea = function area(l,b){
    let a= l*b;
    // console.log(a);
    
return a
}

console.log(findArea(10,2));

//arrow function  


let findArea1= (l,b)=>{
    let a= l*b;
    // console.log(a);
    
return a


}

console.log(findArea1(10,2));