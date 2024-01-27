

//Object constructor function

//CREATE
// const person = new Object();

//add properties
// person.name="john";
// person.age=30;
// person.isMarried=true;
// person.hobbies=["Sports","Cooking"];

// const person=new Object({
//     name:'John',
//     age:30,
//     hobbies:["Sports","Cooking"],
//     isMarried:true,
// });

//Object literal syntax

// const person={};

//add properties
// person.name="john";
// person.age=30;
// person.isMarried=true;
// person.hobbies=["Sports","Cooking"];

// const person={
//     name:"John",
//     age:30,
//     isMarried:true,
//     hobbies:["Cooking","Sports"],
// };

// person.anotherProperty="I do not know";


//-------
// using the dot notation
//-------

//get the name of the person
// const personName = person.name;

//get the age of the person
// const personAge = person.age;

//-------
//using the bracket notation
//-------

// const personAge = person["age"];

//get the person hobbies

// const personHobbies=person["hobbies"];


//--------
//UPADTE OBJECT PROPERTIES
//----------

//  const person={
//     name:"John",
//     age:30,
//     isMarried:true,
//     hobbies:["Cooking","Sports"],
// };

//using the dot notation

//update the person name
// person.name="Billy";
// person.age=100;
// person.hobbies=["Hiking","Dancing"];

//using the bracket notation

// person["age"]=90;
// person["hobbies"]=["Coding","Outing"];

//------
// DELETING OBJECT PROPERTIES
//------

// const person = {
//   name: "John",
//   age: 30,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin:true,
//   status: "not verfied",
// };

//using the dot notation

//delete the age property

// delete person.age;

//using the bracket notaion

// delete person["hobbies"];

//------
//ADDING METHODS TO OBJECT
//------

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isMarried: true,
  hobbies: ["Cooking", "Sports"],
  isAdmin: true,
  status: false,
  printFullName:function(){
    console.log(`Your full name is ${this.firstName} ${this.lastName}`);
   },

   checkStatus: function(){
    if(this.status===false){
        delete this.isAdmin;
    }
   },
};

// person.checkStatus();
//add printFullName method to the object

//how to callthe fnction
person.printFullName();

//--------
//This Keyword
//--------


//-------
//Iterating Over Object Properties
//-------

// const personObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   viewsCount:100,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin: true,
//   status: false,
// };

//1.for..in loop
//2.object.keys
//3.object.values
//object.entries

//for in loop

//syntax

// for(let key in personObj){
//     console.log(key);
// }

//-------
//object.keys
//-------

// const myKeys=Object.keys(personObj);

// const arr=[1, 4, 6, 2, 8];

// myKeys.forEach(function(data){
//    console.log(data);
// })


// console.log(myKeys);

//OBJECT.VALUES()

// const personObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   viewsCount: 100,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin: true,
//   status: false,
// };

// const objValues= Object.values(personObj);

// objValues.forEach(function(data){
//   console.log(data);
// })

//------
//OBJECT.ENTRIES()
//-------

const personObj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  viewsCount: 100,
  isMarried: true,
  hobbies: ["Cooking", "Sports"],
  isAdmin: true,
  status: false,
};

const objEntries = Object.entries(personObj);

// console.log(objEntries);

// objEntries.forEach(function(data){
//   console.log(data);
// })

// objEntries.forEach(function([key,value]){
//   console.log(`${key}: ${value}`)
// })



























