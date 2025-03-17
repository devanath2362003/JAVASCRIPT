// cereate a student mark 1,2,3  
  //method ,find the total marks,average mark

let student1 ={
    mark1 :25,
    mark2 :35,
    mark3 :45,
    mark4 :55,
    mark5 :65,
    averagemark:function (){
        return this.mark3
    },  
    totalmark:function(){
        return this.mark1+this.mark2+this.mark3+this.mark4+this.mark5
    }
}

console.log(student1);
console.log(student1.mark1);
console.log(student1.averagemark());
console.log(student1.totalmark());

  //create a object for shape,id,title should be ractangale ,length,breadth,  methods find area, rectangle

let work ={
    title:'rectangle',
    shape:10+5,
    id:2,
    length:10 ,
    breadth:5 ,
    area:function(){
        return this.length*this.breadth
    },
    rectangle:function(){
        return this.id*(this.length+this.breadth)
    }
}
console.log(work.area());
console.log(work.rectangle());

  //create a object for grocery like title,brand,price,quantity,qality  methods :find the  withn offer ,subract the bill,20% discount,description// 
  
  let shopping ={
      title:'milk',
      brand:'nestle',
      price:10,
      quantity:2,
      qality:'high', 
      discount:0.20,
      totalprice:function(){
        return this.price*this.quantity
      },
      offerprice:function(){
       return this.totalprice()-(this.totalprice()*this.discount)
      },
      description:function(){
        return `${this.title} by ${this.brand} buy with $${this.price}`
      }
  }
  console.log(`total price: $ ${shopping.totalprice()}`);
  console.log(`offer price: $ ${shopping.offerprice()}`);
  console.log(shopping.description());
//   console.log(`milk by nestle buy with ${shopping.price}`);
  