//step 1
let data1 = fetch('https://jsonplaceholder.typicode.com/users')

console.log(data1);


// //step 2

let data2 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>console.log(res.json()))

console.log(data2);


// //step 3

let data3= fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(respons=>console.log(respons))

console.log(data3);


// task

let photo = fetch('https://jsonplaceholder.typicode.com/photos')
console.log(photo);

let photo1 = fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>console.log(res.json())
)
console.log(photo1);

let photo2 = fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(response=>console.log(response)
)

//task 2

let todos = fetch('https://jsonplaceholder.typicode.com/todos')
console.log(todos);

let todos1 = fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>console.log(res.json()))
console.log(todos1);


let todos2 = fetch ('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then(response=>console.log(response)
)