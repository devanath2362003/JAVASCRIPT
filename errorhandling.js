// let arr=[1,2,3,4,5,6,7,8]

let arr=[]
let sum=0;

try{


    if(arr.length==0){
        throw new Error('The Array is empty')
    }

    for(let i of arr){
        sum+=i
    }
    console.log(sum);
    
}catch(er){
    console.error(er);
    console.warn(er);//it will yellow font
    console.log(er);//normal font
}

// finally{
//     console.log('hello');
    
// }


//get two number the second number is equal to 0 means throw new error otherwise divide firstnm/sec number

let a=10
let b=20
let c=a*b
try{

    if(b==0){
        throw new Error('The Array is none')
    }
    
    console.log(c);

}catch(equal){
    console.error(equal);  
}


//get marks according to mark find the range(pass fail) , the marks should not be 0 or less than 0

let mark1 =60

   try{

        if(mark1==0){
            throw new Error('invalid mark')
        }
        mark1=true

        if(1<mark && mark<50){
            console.log('fail');
            
        }else if(51<mark && mark<100){
            console.log('pass');

        }
        console.log(mark1);
        
    }catch(equal){
        console.error(equal); 
}