let lname='java'

let stud= {
    id:1,
    name:'vijay',
    lname:'prasath',
    marks:[89,90,76],
    address:{
        city:'coimbatore',
        pincode:641008
    },
    fullname: function (){
        return this.name+ " "+this.lname

    },
    bldgrp:'A-ve'
}

stud.id=700; //update

delete stud.bldgrp

stud.gmail='vijay@gmail.com'; //add

console.log(stud);



let {name,marks} = stud; //destructuring

console.log(name,marks);


//rest parameter

let {fullname,address,id,...rest}=stud

console.log(rest);


let stud1= {
    id:1,
    name:'vijay',
    lname:'prasath',
    marks:[89,90,76],
    address:{
        city:'coimbatore',
        pincode:641008
    },
    fullname: function (){
        return this.name+ " "+this.lname

    },
    bldgrp:'A-ve'
}


console.log(stud1);


let jsonedObj = JSON.stringify(stud1)

console.log(jsonedObj);




// Create an array containing 5 student objects

let s1= {
    id: 1,
    name: 'Alice',
    lname: 'Smith',
    mark1: 85,
    mark2: 90,
    mark3: 88,
    totalmark: function() {
        return this.mark1 + this.mark2 + this.mark3;
    },
    averagemark: function() {
        return (this.mark1 + this.mark2 + this.mark3) / 3;
    }
}


let s2= {
    id: 2,
    name: 'Bob',
    lname: 'Johnson',
    mark1: 78,
    mark2: 82,
    mark3: 80,
    totalmark: function() {
        return this.mark1 + this.mark2 + this.mark3;
    },
    averagemark: function() {
        return (this.mark1 + this.mark2 + this.mark3) / 3;
    }
}


let s3={
    id: 3,
    name: 'Charlie',
    lname: 'Williams',
    mark1: 92,
    mark2: 95,
    mark3: 94,
    totalmark: function() {
        return this.mark1 + this.mark2 + this.mark3;
    },
    averagemark: function() {
        return (this.mark1 + this.mark2 + this.mark3) / 3;
    }
}

let studentDatabase=[s1,s2,s3]


console.log(studentDatabase);


let studentBaseJson= JSON.stringify(studentDatabase)

console.log(studentBaseJson);


let backToNormal= JSON.parse(studentBaseJson)

console.log(backToNormal);