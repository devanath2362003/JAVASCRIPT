let arr1=['red','yellow','green','pink','red']

console.log(arr1[0]);
console.log(arr1[3]);

console.log(arr1.length);


console.log(arr1[arr1.length-1]);

console.log(arr1.at(1));

console.log(arr1.indexOf('red'));//it will get the index value of red (first occurence)
console.log(arr1.lastIndexOf('red'));

console.log(arr1.includes('pink'));

let fruits=['apple']

console.log(fruits);

//push
fruits.push('kiwi','berry','cherry','orange'); // it will add new item intro the array in the end as last element

console.log(fruits);

fruits.pop() //it always remove last element from array

console.log(fruits);

fruits.shift()
console.log(fruits);//remove first element


fruits.unshift(1,2,3,4,5,6,7,89,90); // it will elemets in the begining
console.log(fruits);

console.log(fruits[5]);




//slice - take some part from the array. it won't affect our original array
// console.log(fr);

//arr.slice(starting index, targetindex+1)
console.log(fruits.slice(4));//from 4th index to last
console.log(fruits.slice(4,9));

// 
// console.log(fr);

console.log(fruits.slice(fruits.indexOf(5),fruits.indexOf(90)+1));

//array method all comes from string also

let candidate = 'vijayaprasanth';
console.log(candidate);
console.log(candidate.length);
console.log(candidate.indexOf('t'));
console.log(candidate.at(4));
console.log(candidate.slice(6));


let arr=['red','blue','pink','black','white']
console.log(arr);
//join, reverse
//splice and slice

//splice - add, replace, update arr.splice(target index, delete count, if u need to replace give replace element)

arr.splice(2,1);//pink deleted

console.log(arr);

arr.splice(2,0,'carrot','kiwi','yellow')
console.log(arr);


arr.splice(2,0,1,2,3,47,78)
console.log(arr);


//map, filter, foreach, join and split , converting str to number


//for in and for of loop

for(let i in arr){ //in means index
    console.log(i);
}

for (let i of arr){ //of means elements
    console.log(i);
}


let numbers=[1,2,3,5,6,7,9,2]

let newnum= numbers.map(n=>n*2)
console.log(newnum);

let day=['sun','mon','tues','wed','thurs']

let newday=day.map(d=>d+'day')
console.log(newday);


let a=day.filter(d=>d!='mon')
console.log(a);


let sum=0
numbers.forEach(e=> {
    sum+=e
});

console.log(sum);

//sort - it will change ascending to descending
let day1=['sun','mon','tues','wed','thurs']

console.log(day1.sort());

// reduce
let sum1= numbers.reduce((prev,curr)=>{
   return prev+=curr
},0)

//number - 100 reduce the value by the elements in array

console.log(sum1);


// indexof, lastindexof, slice,length, [], at, -string

let lang='Javascript'
console.log(lang);
console.log(lang.length);
console.log(lang.indexOf('i'));
console.log(lang.lastIndexOf('a'));


//uppercase and LowerCase

console.log(lang.toLowerCase());
console.log(lang.toUpperCase());


//by usin string try to achive->  javascript -->Javascript


