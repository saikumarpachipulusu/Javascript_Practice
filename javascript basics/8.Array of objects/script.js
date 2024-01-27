//--------
//Array of Objects
//--------

//Mutation
const arr = [1, 2, 3, 4, 5];

//-------
//Array Methods
//------

//1. ForEach();

// const Students = [
//   { name: "John", age: 20 },
//   { name: "Mary", age: 26 },
//   { name: "Peter", age: 22 },
//   { name: "Sally", age: 23 },
// ];

// Students.forEach(user=>{
//     console.log("item",user.name);
//     console.log("age",user.age);
// });

//2.Map()

// const newStudents = Students.map((user) => {
//   return user;
// });
// newStudents.push({ name: "Emmanuel", age: "29" });
// console.log(newStudents);
// console.log(Students);

//-------
//3.filter()
//-------
// const Students = [
//     { name: "John", age: 20,debt:true},
//     { name: "Mary", age: 26,debt:false},
//     { name: "Peter", age: 22,debt:true},
//     { name: "Sally", age: 23,debt:false},
// ];

// const debtStudents=Students.filter((student)=>{
//     return student["debt"]===true;
// })

// console.log(debtStudents);

//4.reduce

// const products = [
//   { name: "banana", price: 1 },
//   { name: "orange", price: 2 },
//   { name: "apple", price: 3 },
//   { name: "pear", price: 4 },
// ];

// const ans=products.reduce(function(total,product){
//     return total+product.price;
// },0);

// console.log(ans);
