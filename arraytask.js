// 1.Description: Given an array of strings, filter out the strings that contain the letter 'a' and transform the remaining strings to uppercase
let mates=['aswini','madhu','jenni']
 let classmates =mates.filter(d=>!d.includes('a'))
console.log(classmates);


//2.Description: Given an array of full names, extract the initials of each name. 

let names =['akash','agalya','kavya']

console.log(names);
console.log(names.indexOf('akash'));
console.log(names.length);
console.log(names.at(0));



// 3.Find the Longest Word
// Description: Given a sentence, find the longest word in the sentence. 

// 4.Count Occurrences of Each Character
// Description: Given a string, count the occurrences of each character. 

// 5.Remove Duplicates from an Array of Strings
// Description: Given an array of strings, remove duplicate values. 

// 6.Capitalize Each Word in a Sentence
// Description: Given a sentence, capitalize the first letter of each word. 
// JavaScript
let sentence ='capitalize the first letter of each word';
let find=sentence.split(' ')
console.log(find);
console.log(sentence.length);




// 7.Reverse Words in a Sentence
// Description: Given a sentence, reverse the order of words.

let rev1 = ' Reverse, Words, in, a, Sentence'

let rev3=rev1.split(',')
console.log(rev3);

let rev2=rev3.reverse()
console.log(rev2);

let rev4= rev2.join(''); 
console.log(rev4);

console.log(rev4.toUpperCase());


// Tasks Using for in  or for of loop

// 1.Print All Elements in an Array 
// Task:
// Create an array of fruits and use a for loop to print each fruit's name.
let fruits=['kiwi', 'berry','cherry','orange']
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    
}

//another method
for(let i in fruits){
    console.log(fruits[i],i);
    
}
//another method
console.log("for of loop");
for(let i of fruits){
    console.log(i);
    
}
// 2.Sum of Numbers in an Array 
// Task:
// Create an array of numbers and use a for loop to calculate the total sum of the numbers.
let num=[1,2,3,4,5,6,7,8,9,10]


    let sum= num.reduce((prev,curr)=>{
        return prev+=curr
     },0)
     console.log(sum);
 //another ,method
 
//  for(i=0;i<num.length;i++){
//     i+=0
//     console.log(i);
//  }

// 3.Find Even Numbers in an Array
// Task:
// Create an array of random numbers.
// Use a for loop to find and display only the even numbers from the array.
// let even =[1,2,3,4,5,6,7,8,9,10]

// for(let i of even){
//     if(i%2==0){
//         console.log(i);  
//     }
// }

// // 4.Reverse an Array 
// Task:
// Create an array of numbers and use a for loop to display the elements in reverse order

// let r = [1,2,3,4,5,6,7,8,9,10]

// // let reverse = r.reverse()
// let re =[]
// for(let i = r.length-1; i>=0; i--){
//     re.push(r[i])
    
// }
// console.log(re);


// 5.Find Maximum Value in an Array
//  Task: Find the largest number in an array

// 6.Find an Element in an Array
//  Task: Check if a given number exists in an array

