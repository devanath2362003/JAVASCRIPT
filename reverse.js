let name='prabakaran'
let revname=''

//split

// console.log(name.split(' '));  //string to array

let newarr= name.split('')
console.log(newarr);

let reversedArr= newarr.reverse()
console.log(reversedArr);


let revstr= reversedArr.join(''); //array to string

console.log(revstr);



for(let i=name.length-1; i>=0; i--){

    revname+=name[i]
}

console.log(revname);

//find the sum of even numbers in array 
//add  positive numbers in new array(push)