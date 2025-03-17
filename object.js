 let student= {
    id:101,
    fname:'prabakaran',
    lname:'P',
    marks:[90,78,89],
    address:{
        city:'coimbatore',
        pincode:7789909
    },
    fullname:function (){
        return this.fname+this.lname
    }
}


//function inside the object is known as methods
console.log(student);

console.log(student.fname);
console.log(student.address.pincode);
console.log(student.marks);
console.log(student.marks[1]);

//add property , delete property, update

student.email='prabakar@gmail.com'; //it will search for email if it is not there it  will add as a new property


console.log(student);

student.id=708;

console.log(student);

delete student.marks


console.log(student);

console.log(student.fullname());


// 1.Create a Student Object

// Create an object that stores a student's details (name, age, grade, and favorite subject).
// Display each property in the console.


// 2.Update Object Properties

// Create a car object with properties like brand, model, and year.
// Update the model and year properties dynamically.
// Display the updated details.


// 3.Loop Through an Array of Movie Objects

// Create an array of movie objects, each containing a title and rating.
// Use a loop to display the list of movies with their ratings in a formatted output.


// 4.Add Methods to an Object

// Create an object for a rectangle with length and width properties.
// Add a method to calculate and return the area of the rectangle.
// Display the area in the console.

// 5.Count Object Properties

// Create an object representing an animal with various properties (name, habitat, diet, etc.).
// Write a function to count and display the total number of properties in the object.


// 6.Filter Objects Based on a Condition

// Create an array of product objects with properties like name, price, and availability status.
// Filter out and display only the available products using a loop or array method.


// 7.Create a Contact Book Using Objects

// Create an array of contact objects with name, phone number, and email properties.
// Write a function to search for a contact by name and display their details.

// 8.Sort an Array of Objects

// Create an array of book objects with properties like title and number of pages.
// Sort the books in ascending order based on the number of pages and display the sorted list.

// 9.Group Objects by Category

// Create an array of employee objects with properties like name, department, and salary.
// Group employees by their department and display each group separately.