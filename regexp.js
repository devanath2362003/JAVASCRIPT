// ^ - start of the pattern
// $ - end of the pattern
// [] - range
// * - 0 or  more
// + - 1 or more
// {n} - exact count
// {n,m} - count b/w n and m
// {n,} - more than n count
// ? - optional (0 or 1)
// . - single char
// \w - word chars(alphabets and numbers, _)
// \W - non word chars
// \d - digits only
// \D - non digits
// \s - space
// \S - non space

// flags - i - incase sensitive, g- global search, m- new line detections
let pattern9 = /^[a-z]+\w$/i
let input = "gJJghnnjnjnj"

console.log(pattern9.test(input));

let email = /^\w+@[a-z]+\.[a-z]{2,5}(\.[a-z]{2,6})?$/
let emailID= "sample123@gmail.com.in"
console.log(email.test(emailID));


let sen = " this is my email id test123@gmail.com and i have anotehr one sam12378@gmail.com and dhfh fhfgh@hgdh.gdgd ghfh ghfhf hffy"

let emails = /\w+@[a-z]+\.[a-z]{2,5}(\.[a-z]{2,6})?/g
let x = emails.exec(sen)
console.log(x);

console.log(x[0]);

console.log(sen.match(emails));


// Regular Expression Tasks

// 1. Character Classification
//    Write a JavaScript program that takes a single character as input and checks whether it is:  
//    - An uppercase letter  
//    - A lowercase letter  
//    - A digit  
//    - A special character  
//    Use regular expressions to classify the input.

let pattern="55"
let a=/^[a-z]+$/i
let b=/^[a-z]+$/
let c=/^\d+$/
program = true
if(pattern==a){
    console.log('uppercase');   
}else if(pattern==b){
    console.log('lowercase');   
}else if(pattern==c){
    console.log('digit');   
}else{console.log('special character');
}


// 2. Input Filtering
//    Create a program that restricts user input based on specific criteria:  
//    - Allow alphabets only (both uppercase and lowercase).  
//    - Allow numbers only.  
//    - Allow a combination of alphabets and numbers (alphanumeric).  
//    Use regular expressions to validate the input.

// 3. Data Parsing from Strings
//    Write a JavaScript function to parse and extract specific information from a given text:  
//    - Extract URLs from the text.  
//    - Extract dates in the format `DD/MM/YYYY`.  
//    - Extract mentions (e.g., `@username` on social media platforms).  

let sen2 = "this is my url link https://www.w3schools.com/html/html_intro.asp and the platform at @w3schools"
let pattern6 =/\w+\:\/\/\w+\.\w+\.[a-z]{3}\/\w+\/\w+\_\w+\.\w+/
let pattern7 =/@\w+/
let url=pattern6.exec(sen2)
console.log(url);
console.log(url[0]);
let mention =pattern7.exec(sen2)
console.log(mention[0]);

// 4. Email Address Validation
//    Write a regular expression to validate email addresses. The pattern should match standard email formats like `user@example.com`, ensuring the following:  
//    - Contains a valid username (letters, numbers, underscores).  
//    - Contains an `@` symbol.  
//    - Has a valid domain name and extension (e.g., `.com`, `.net`).  
let sen1="devanathvm2003@gmail.com and it is verufued mail and my personal mail id is fopdev1238@gmail.com"
let email1 =/\w+@[a-z]{5}\.[a-z]{2,4}/g
let i = email1.exec(sen1)
console.log(i);
console.log(i[0]);
console.log(sen1.match(email1));

// 5. Date Validation (DD/MM/YYYY)
//    Create a regular expression that validates dates in the format `DD/MM/YYYY`:  
//    - Days must be valid (01-31).  
//    - Months must be valid (01-12).  
//    - Years should be four digits.  
let input2 = "23/06/2003"
// let pattern1 =/^[1-31]+\/[1-12]+\/\d{4}$/
let pattern1 = /^0[1-9]|1[0-9]|2[0-9]|3[0-1]\/0[1-9]|1[0-2]\/\d{4}$/
console.log(pattern1.test(input2));

// 6. File Extension Extraction  
//    Write a regular expression to exziptract file extensions from a list of filenames. For example:  
//    - Input: `"image.png", "document.pdf", "archive."`  
//    - Output: `["png", "pdf", "zip"]`
let file="image.png,document.pdf,archive.zip"
let pattern8 =/\.\w{3}/g
let file2=pattern8.exec(file)
console.log(file.match(pattern8));


// 7.Phone Number Validation
// Create a regular expression to validate phone numbers in different formats
let num ="9688437929"
let pattern2 =/^\d{10}$/
console.log(pattern2.test(num));
let pattern3=/^\w{10}$/
console.log(pattern3.test(num));
let pattern4=/^[0-10]+$/
console.log(pattern4.test(num));

// 8.Password Strength Validation
// Write a regular expression to validate strong passwords. A strong password should:

// Contain at least 8 characters.
// Include at least one uppercase letter.
// Include at least one lowercase letter.
// Contain at least one digit.
// Include at least one special character (e.g., @, #, $).

let name = "Devanath@2003"
let pattern5=/^[a-z]+@\d+$/i
console.log(pattern5.test(name));

